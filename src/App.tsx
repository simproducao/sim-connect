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
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null)
  const [editingEdgeId, setEditingEdgeId] = useState<string | null>(null)
  const [edgeNoteValue, setEdgeNoteValue] = useState('')
  const flowRef = useRef<HTMLDivElement>(null)
  const noteInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editingEdgeId && noteInputRef.current) {
      noteInputRef.current.focus()
    }
  }, [editingEdgeId])

  const onConnect = useCallback((params: Connection) => {
    const sourceNode = (nodes as Node[]).find((n: Node) => n.id === params.source)
    const eq = sourceNode ? EQUIPMENT.find(e => e.id === (sourceNode.data as any).equipmentId) : null
    const port = eq?.ports.find(p => p.id === params.sourceHandle)
    setEdges((eds: Edge[]) => addEdge({
      ...params,
      id: `edge-${Date.now()}`,
      animated: true,
      style: { stroke: port ? SIGNAL_COLORS[port.signalType] : '#E8571A', strokeWidth: 3 },
      label: port?.signalType || 'SDI',
      labelStyle: { fill: 'white', fontSize: 9, fontFamily: 'monospace', fontWeight: 700 },
      labelBgStyle: { fill: '#111214', fillOpacity: 0.9 },
      labelBgPadding: [4, 3] as [number, number],
      labelBgBorderRadius: 3,
      data: { signalType: port?.signalType || 'SDI', cable: '' }
    } as unknown as Edge, eds))
  }, [nodes])

  const addEquipment = useCallback((equipmentId: string) => {
    instanceCounter++
    const eq = EQUIPMENT.find(e => e.id === equipmentId)
    const newNode: Node = {
      id: `node-${instanceCounter}`,
      type: 'equipment',
      position: { x: 100 + Math.random() * 200, y: 100 + Math.random() * 200 },
      data: { equipmentId, label: eq?.name || equipmentId }
    }
    setNodes((nds: Node[]) => [...nds, newNode])
  }, [])

  const loadTemplate = useCallback((templateId: string) => {
    const tpl = TEMPLATES.find(t => t.id === templateId)
    if (!tpl) return
    if ((nodes as Node[]).length > 0 && !window.confirm('Substituir diagrama atual?')) return
    setNodes(tpl.nodes as unknown as Node[])
    setEdges(tpl.edges as unknown as Edge[])
    setProjectName(tpl.name)
  }, [nodes])

  const loadUserTemplate = useCallback((tpl: UserTemplate) => {
    if ((nodes as Node[]).length > 0 && !window.confirm('Substituir diagrama atual?')) return
    setNodes(tpl.nodes as unknown as Node[])
    setEdges(tpl.edges as unknown as Edge[])
    setProjectName(tpl.name)
  }, [nodes])

  const handleSaveTemplate = useCallback(() => {
    if ((nodes as Node[]).length === 0) { alert('Diagrama vazio.'); return }
    const name = window.prompt('Nome do template:', projectName)
    if (!name) return
    const desc = window.prompt('Descrição:', '') || ''
    saveUserTemplate(name, desc, nodes, edges)
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
    localStorage.setItem(`sim-connect-${projectName}`, JSON.stringify({ projectName, nodes, edges, savedAt: new Date().toISOString() }))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }, [nodes, edges, projectName])

  const clearCanvas = useCallback(() => {
    if (window.confirm('Limpar diagrama?')) { setNodes([]); setEdges([]); setProjectName('Novo Projeto') }
  }, [])

  const deleteSelected = useCallback(() => {
    if (!selectedNodeId) return
    setNodes((nds: Node[]) => nds.filter(n => n.id !== selectedNodeId))
    setEdges((eds: Edge[]) => eds.filter(e => e.source !== selectedNodeId && e.target !== selectedNodeId))
    setSelectedNodeId(null)
  }, [selectedNodeId])

  const openEdgeNote = useCallback(() => {
    if (!selectedEdgeId) return
    const edge = (edges as Edge[]).find(e => e.id === selectedEdgeId)
    const current = edge ? ((edge.data as any)?.cable || '') : ''
    setEdgeNoteValue(current)
    setEditingEdgeId(selectedEdgeId)
  }, [selectedEdgeId, edges])

  const saveEdgeNote = useCallback(() => {
    if (!editingEdgeId) return
    setEdges((eds: Edge[]) => eds.map(e => e.id === editingEdgeId ? {
      ...e,
      label: edgeNoteValue
        ? `${(e.data as any)?.signalType || 'SDI'} · ${edgeNoteValue}`
        : (e.data as any)?.signalType || 'SDI',
      data: { ...(e.data as any), cable: edgeNoteValue }
    } : e))
    setEditingEdgeId(null)
    setSelectedEdgeId(null)
  }, [editingEdgeId, edgeNoteValue])

  if (!authed) return <LoginScreen onLogin={login} />

  return (
    <div className="app-root">

      {/* TOOLBAR */}
      <div className="toolbar">
        {!isMobile && (
          <button onClick={() => setSidebarOpen(s => !s)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: 20, cursor: 'pointer' }}>
            ☰
          </button>
        )}
        <img src="/logo.png" alt="SIM" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
        {!isMobile && <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>Connect</span>}
        <div style={{ flex: 1 }} />
        <input
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          style={{
            background: '#0b0c0f', border: '1px solid #2a2b2f', borderRadius: 6,
            padding: '4px 8px', fontSize: 11, color: 'white', textAlign: 'center',
            width: isMobile ? 140 : 180, outline: 'none'
          }}
        />
        <div style={{ flex: 1 }} />
        {!isMobile && <>
          <button onClick={clearCanvas} style={{ padding: '5px 10px', fontSize: 11, border: '1px solid #2a2b2f', borderRadius: 6, background: 'transparent', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>Limpar</button>
          <button onClick={handleSaveTemplate} style={{ padding: '5px 10px', fontSize: 11, border: '1px solid #2a2b2f', borderRadius: 6, background: 'transparent', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>Template</button>
          <button onClick={saveProject} style={{ padding: '5px 10px', fontSize: 11, border: '1px solid #2a2b2f', borderRadius: 6, background: saved ? '#1a4a2a' : 'transparent', color: saved ? '#00C896' : 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>{saved ? '✓ Guardado' : 'Guardar'}</button>
        </>}
        <button onClick={handleExport} style={{ padding: '5px 12px', fontSize: 11, border: 'none', borderRadius: 6, background: '#E8571A', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>PDF</button>
        {!isMobile && <button onClick={logout} style={{ padding: '5px 10px', fontSize: 11, border: '1px solid #2a2b2f', borderRadius: 6, background: 'transparent', color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>Sair</button>}
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
        <div className="canvas-wrap" ref={flowRef}>
          <ReactFlow
            nodes={nodes} edges={edges}
            onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}
            onConnect={onConnect} nodeTypes={nodeTypes}
            fitView proOptions={{ hideAttribution: true }}
            onPaneClick={() => { setSelectedNodeId(null); setSelectedEdgeId(null); setEditingEdgeId(null) }}
            onEdgeClick={(_, edge) => { setSelectedEdgeId(edge.id); setSelectedNodeId(null) }}
            onNodeClick={(_, node) => { setSelectedNodeId(node.id); setSelectedEdgeId(null); setEditingEdgeId(null) }}
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
                nodeStrokeColor="#E8571A" nodeBorderRadius={4}
              />
            )}
          </ReactFlow>

          {/* PAINEL NOTA DA LIGAÇÃO */}
          {editingEdgeId && (
            <div style={{
              position: 'absolute', top: 12, left: 12,
              backgroundColor: '#1a1b1f',
              border: '1px solid #4A9EFF',
              borderRadius: 12,
              padding: '12px 14px',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
              minWidth: 260
            }}>
              <div style={{ color: '#4A9EFF', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
                ✏️ Nota da ligação
              </div>
              <input
                ref={noteInputRef}
                value={edgeNoteValue}
                onChange={e => setEdgeNoteValue(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') saveEdgeNote(); if (e.key === 'Escape') setEditingEdgeId(null) }}
                placeholder="ex: SDI 35m, XLR 50m..."
                style={{
                  backgroundColor: '#0b0c0f',
                  border: '1px solid #2a2b2f',
                  borderRadius: 6,
                  padding: '8px 10px',
                  fontSize: 12,
                  color: 'white',
                  outline: 'none',
                  fontFamily: 'monospace'
                }}
              />
              <div style={{ display: 'flex', gap: 6 }}>
                <button
                  onClick={saveEdgeNote}
                  style={{
                    flex: 1, padding: '7px 0', fontSize: 11, border: 'none',
                    borderRadius: 6, background: '#4A9EFF', color: 'white',
                    fontWeight: 'bold', cursor: 'pointer'
                  }}
                >
                  Guardar
                </button>
                <button
                  onClick={() => setEditingEdgeId(null)}
                  style={{
                    padding: '7px 12px', fontSize: 11, border: '1px solid #2a2b2f',
                    borderRadius: 6, background: 'transparent', color: 'rgba(255,255,255,0.4)',
                    cursor: 'pointer'
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {/* BOTÃO NOTA LIGAÇÃO */}
          {selectedEdgeId && !editingEdgeId && (
            <button
              onClick={openEdgeNote}
              style={{
                position: 'absolute', top: 12, left: 12,
                background: '#4A9EFF', border: 'none', borderRadius: 10,
                padding: '10px 16px', color: 'white', fontWeight: 'bold',
                fontSize: 13, cursor: 'pointer', zIndex: 100,
                boxShadow: '0 4px 16px rgba(74,158,255,0.4)',
                display: 'flex', alignItems: 'center', gap: 8
              }}
            >
              ✏️ Nota da ligação
            </button>
          )}

          {/* BOTÃO APAGAR NODE */}
          {selectedNodeId && (
            <button onClick={deleteSelected} style={{
              position: 'absolute', top: 12, right: 12,
              background: '#ff4444', border: 'none', borderRadius: 10,
              padding: '10px 16px', color: 'white', fontWeight: 'bold',
              fontSize: 13, cursor: 'pointer', zIndex: 100,
              boxShadow: '0 4px 16px rgba(255,68,68,0.5)',
              display: 'flex', alignItems: 'center', gap: 8
            }}>
              🗑 Apagar
            </button>
          )}
        </div>
      </div>

      {/* BARRA MOBILE */}
      {isMobile && (
        <div className="bottom-bar">
          <button className={`bottom-bar-btn ${mobileTab === 'equipment' ? 'active' : ''}`}
            onClick={() => setMobileTab(t => t === 'equipment' ? null : 'equipment')}>
            <span style={{ fontSize: 22 }}>📦</span>
            Equipamentos
          </button>
          <button className={`bottom-bar-btn ${mobileTab === 'templates' ? 'active' : ''}`}
            onClick={() => setMobileTab(t => t === 'templates' ? null : 'templates')}>
            <span style={{ fontSize: 22 }}>📋</span>
            Templates
          </button>
          <button className={`bottom-bar-btn ${saved ? 'saved' : ''}`} onClick={saveProject}>
            <span style={{ fontSize: 22 }}>{saved ? '✓' : '💾'}</span>
            {saved ? 'Guardado' : 'Guardar'}
          </button>
          <button className="bottom-bar-btn" onClick={logout}>
            <span style={{ fontSize: 22 }}>🚪</span>
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