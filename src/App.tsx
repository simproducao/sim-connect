import { useCallback, useRef, useState, useEffect } from 'react'
import {
  ReactFlow, Background, Controls, MiniMap,
  addEdge, useNodesState, useEdgesState,
  BackgroundVariant
} from '@xyflow/react'
import type { Connection, Edge, Node } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Sidebar } from './components/Sidebar'
import { NodeEquipment } from './components/NodeEquipment'
import { exportToPDF } from './components/ExportPDF'
import { EQUIPMENT, SIGNAL_COLORS } from './data/equipment'
import { TEMPLATES, saveUserTemplate, UserTemplate } from './data/templates'
import { useAuth, LoginScreen } from './Auth'

const nodeTypes = { equipment: NodeEquipment }

let instanceCounter = 0

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

export default function App() {
  const { authed, login, logout } = useAuth()
  const isMobile = useIsMobile()
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])
  const [projectName, setProjectName] = useState('Novo Projeto')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [saved, setSaved] = useState(false)
  const [templateRefresh, setTemplateRefresh] = useState(0)
  const [mobileTab, setMobileTab] = useState<'equipment' | 'templates' | null>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const flowRef = useRef<HTMLDivElement>(null)

  const onConnect = useCallback((params: Connection) => {
    const sourceNode = (nodes as Node[]).find((n: Node) => n.id === params.source)
    const eq = sourceNode ? EQUIPMENT.find(e => e.id === (sourceNode.data as any).equipmentId) : null
    const port = eq?.ports.find(p => p.id === params.sourceHandle)
    setEdges((eds: Edge[]) => addEdge({
      ...params,
      id: `edge-${Date.now()}`,
      animated: true,
      style: {
        stroke: port ? SIGNAL_COLORS[port.signalType] : '#E8571A',
        strokeWidth: 2
      },
      data: { signalType: port?.signalType || 'SDI', cable: '' }
    } as unknown as Edge, eds))
  }, [nodes])

  const addEquipment = useCallback((equipmentId: string) => {
    instanceCounter++
    const eq = EQUIPMENT.find(e => e.id === equipmentId)
    const newNode: Node = {
      id: `node-${instanceCounter}`,
      type: 'equipment',
      position: { x: 200 + Math.random() * 150, y: 150 + Math.random() * 150 },
      data: { equipmentId, label: eq?.name || equipmentId }
    }
    setNodes((nds: Node[]) => [...nds, newNode])
  }, [])

  const loadTemplate = useCallback((templateId: string) => {
    const tpl = TEMPLATES.find(t => t.id === templateId)
    if (!tpl) return
    if ((nodes as Node[]).length > 0) {
      if (!window.confirm('Substituir diagrama atual pelo template?')) return
    }
    setNodes(tpl.nodes as unknown as Node[])
    setEdges(tpl.edges as unknown as Edge[])
    setProjectName(tpl.name)
  }, [nodes])

  const loadUserTemplate = useCallback((tpl: UserTemplate) => {
    if ((nodes as Node[]).length > 0) {
      if (!window.confirm('Substituir diagrama atual pelo template?')) return
    }
    setNodes(tpl.nodes as unknown as Node[])
    setEdges(tpl.edges as unknown as Edge[])
    setProjectName(tpl.name)
  }, [nodes])

  const handleSaveTemplate = useCallback(() => {
    if ((nodes as Node[]).length === 0) {
      alert('O diagrama está vazio. Adiciona equipamentos primeiro.')
      return
    }
    const name = window.prompt('Nome do template:', projectName)
    if (!name) return
    const description = window.prompt('Descrição (opcional):', '') || ''
    saveUserTemplate(name, description, nodes, edges)
    setTemplateRefresh(k => k + 1)
    alert(`Template "${name}" guardado.`)
  }, [nodes, edges, projectName])

  const handleExport = useCallback(async () => {
    if (!flowRef.current) return
    const connections = (edges as Edge[]).map((e: Edge) => {
      const src = (nodes as Node[]).find((n: Node) => n.id === e.source)
      const tgt = (nodes as Node[]).find((n: Node) => n.id === e.target)
      return {
        from: ((src?.data as any)?.label as string) || e.source,
        to: ((tgt?.data as any)?.label as string) || e.target,
        signalType: ((e.data as any)?.signalType as string) || 'SDI',
        cable: ((e.data as any)?.cable as string) || '—',
        notes: (e.data as any)?.notes as string | undefined
      }
    })
    await exportToPDF(projectName, flowRef.current, connections)
  }, [nodes, edges, projectName])

  const saveProject = useCallback(() => {
    const data = { projectName, nodes, edges, savedAt: new Date().toISOString() }
    localStorage.setItem(`sim-connect-${projectName}`, JSON.stringify(data))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }, [nodes, edges, projectName])

  const clearCanvas = useCallback(() => {
    if (window.confirm('Limpar diagrama?')) {
      setNodes([])
      setEdges([])
      setProjectName('Novo Projeto')
    }
  }, [])

  const deleteSelected = useCallback(() => {
    if (!selectedNodeId) return
    setNodes((nds: Node[]) => nds.filter(n => n.id !== selectedNodeId))
    setEdges((eds: Edge[]) => eds.filter(e => e.source !== selectedNodeId && e.target !== selectedNodeId))
    setSelectedNodeId(null)
  }, [selectedNodeId])

  if (!authed) return <LoginScreen onLogin={login} />

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0b0c0f', overflow: 'hidden', flexDirection: 'column' }}>

      {/* TOOLBAR */}
      <div style={{
        height: 48,
        backgroundColor: '#1a1b1f',
        borderBottom: '1px solid #2a2b2f',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        gap: 8,
        flexShrink: 0,
        zIndex: 10
      }}>
        {!isMobile && (
          <button
            onClick={() => setSidebarOpen(s => !s)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: 18, cursor: 'pointer', padding: 4 }}
          >
            ☰
          </button>
        )}
        <img src="/logo.png" alt="SIM" style={{ height: 30, width: 'auto', objectFit: 'contain' }} />
        {!isMobile && (
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>Connect</span>
        )}
        <div style={{ flex: 1 }} />
        <input
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          style={{
            backgroundColor: '#0b0c0f',
            border: '1px solid #2a2b2f',
            borderRadius: 6,
            padding: '4px 8px',
            fontSize: 11,
            color: 'white',
            textAlign: 'center',
            width: isMobile ? 120 : 180,
            outline: 'none'
          }}
        />
        <div style={{ flex: 1 }} />
        {!isMobile && (
          <>
            <button onClick={clearCanvas} style={{ padding: '6px 10px', fontSize: 11, border: '1px solid #2a2b2f', borderRadius: 6, backgroundColor: 'transparent', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>
              Limpar
            </button>
            <button onClick={handleSaveTemplate} style={{ padding: '6px 10px', fontSize: 11, border: '1px solid #2a2b2f', borderRadius: 6, backgroundColor: 'transparent', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
              Guardar Template
            </button>
            <button onClick={saveProject} style={{ padding: '6px 10px', fontSize: 11, border: '1px solid #2a2b2f', borderRadius: 6, backgroundColor: saved ? '#1a4a2a' : 'transparent', color: saved ? '#00C896' : 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
              {saved ? '✓ Guardado' : 'Guardar'}
            </button>
          </>
        )}
        <button onClick={handleExport} style={{ padding: '6px 12px', fontSize: 11, border: 'none', borderRadius: 6, backgroundColor: '#E8571A', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
          PDF
        </button>
        {!isMobile && (
          <button onClick={logout} style={{ padding: '6px 10px', fontSize: 11, border: '1px solid #2a2b2f', borderRadius: 6, backgroundColor: 'transparent', color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>
            Sair
          </button>
        )}
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>

        {/* SIDEBAR DESKTOP */}
        {!isMobile && sidebarOpen && (
          <Sidebar
            onAddEquipment={addEquipment}
            onLoadTemplate={loadTemplate}
            onLoadUserTemplate={loadUserTemplate}
            refreshKey={templateRefresh}
            isMobile={false}
            mobileTab={null}
            onCloseMobile={() => {}}
          />
        )}

        {/* CANVAS */}
        <div style={{ flex: 1, position: 'relative' }} ref={flowRef}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            proOptions={{ hideAttribution: true }}
            onNodeClick={(_, node) => setSelectedNodeId(node.id)}
            onPaneClick={() => setSelectedNodeId(null)}
          >
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#2a2b2f" />
            {!isMobile && <Controls />}
            {!isMobile && (
              <MiniMap
                style={{ backgroundColor: '#1a1b1f', border: '1px solid #2a2b2f' }}
                maskColor="rgba(0,0,0,0.6)"
                nodeColor={(n) => {
                  const eq = EQUIPMENT.find(e => e.id === (n.data as any)?.equipmentId)
                  return eq ? eq.color : '#E8571A'
                }}
                nodeStrokeColor="#E8571A"
                nodeBorderRadius={4}
              />
            )}
          </ReactFlow>

          {/* BOTÃO APAGAR NODE SELECIONADO */}
          {selectedNodeId && (
            <button
              onClick={deleteSelected}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                backgroundColor: '#ff4444',
                border: 'none',
                borderRadius: 8,
                padding: '10px 16px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 13,
                cursor: 'pointer',
                zIndex: 100,
                boxShadow: '0 4px 12px rgba(255,68,68,0.4)'
              }}
            >
              🗑 Apagar
            </button>
          )}
        </div>
      </div>

      {/* BARRA MOBILE DE BAIXO */}
      {isMobile && (
        <div style={{
          height: 64,
          backgroundColor: '#1a1b1f',
          borderTop: '1px solid #2a2b2f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexShrink: 0,
          zIndex: 10
        }}>
          <button
            onClick={() => setMobileTab(t => t === 'equipment' ? null : 'equipment')}
            style={{
              flex: 1, height: '100%', border: 'none',
              backgroundColor: mobileTab === 'equipment' ? '#E8571A22' : 'transparent',
              color: mobileTab === 'equipment' ? '#E8571A' : 'rgba(255,255,255,0.5)',
              fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase',
              letterSpacing: 0.5, cursor: 'pointer', display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4
            }}
          >
            <span style={{ fontSize: 20 }}>📦</span>
            Equipamentos
          </button>
          <button
            onClick={() => setMobileTab(t => t === 'templates' ? null : 'templates')}
            style={{
              flex: 1, height: '100%', border: 'none',
              backgroundColor: mobileTab === 'templates' ? '#E8571A22' : 'transparent',
              color: mobileTab === 'templates' ? '#E8571A' : 'rgba(255,255,255,0.5)',
              fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase',
              letterSpacing: 0.5, cursor: 'pointer', display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4
            }}
          >
            <span style={{ fontSize: 20 }}>📋</span>
            Templates
          </button>
          <button
            onClick={saveProject}
            style={{
              flex: 1, height: '100%', border: 'none',
              backgroundColor: saved ? '#1a4a2a' : 'transparent',
              color: saved ? '#00C896' : 'rgba(255,255,255,0.5)',
              fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase',
              letterSpacing: 0.5, cursor: 'pointer', display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4
            }}
          >
            <span style={{ fontSize: 20 }}>💾</span>
            {saved ? '✓ Guardado' : 'Guardar'}
          </button>
          <button
            onClick={logout}
            style={{
              flex: 1, height: '100%', border: 'none',
              backgroundColor: 'transparent',
              color: 'rgba(255,255,255,0.3)',
              fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase',
              letterSpacing: 0.5, cursor: 'pointer', display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4
            }}
          >
            <span style={{ fontSize: 20 }}>🚪</span>
            Sair
          </button>
        </div>
      )}

      {/* SIDEBAR MOBILE */}
      {isMobile && (
        <Sidebar
          onAddEquipment={addEquipment}
          onLoadTemplate={loadTemplate}
          onLoadUserTemplate={loadUserTemplate}
          refreshKey={templateRefresh}
          isMobile={true}
          mobileTab={mobileTab}
          onCloseMobile={() => setMobileTab(null)}
        />
      )}
    </div>
  )
}