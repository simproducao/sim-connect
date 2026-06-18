import { useCallback, useRef, useState } from 'react'
import {
  ReactFlow, Background, Controls, MiniMap,
  addEdge, useNodesState, useEdgesState,
  Connection, Edge, Node, BackgroundVariant
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Sidebar } from './components/Sidebar'
import { NodeEquipment } from './components/NodeEquipment'
import { exportToPDF } from './components/ExportPDF'
import { EQUIPMENT, SIGNAL_COLORS } from './data/equipment'
import { TEMPLATES } from './data/templates'

const nodeTypes = { equipment: NodeEquipment }

let instanceCounter = 0

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [projectName, setProjectName] = useState('Novo Projeto')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [saved, setSaved] = useState(false)
  const flowRef = useRef<HTMLDivElement>(null)

  const onConnect = useCallback(
    (params: Connection) => {
      const sourceNode = nodes.find(n => n.id === params.source)
      const eq = sourceNode ? EQUIPMENT.find(e => e.id === sourceNode.data.equipmentId) : null
      const port = eq?.ports.find(p => p.id === params.sourceHandle)
      setEdges(eds => addEdge({
        ...params,
        animated: true,
        style: {
          stroke: port ? SIGNAL_COLORS[port.signalType] : '#E8571A',
          strokeWidth: 2
        },
        data: { signalType: port?.signalType || 'SDI', cable: '' }
      }, eds))
    },
    [nodes]
  )

  const addEquipment = useCallback((equipmentId: string) => {
    instanceCounter++
    const eq = EQUIPMENT.find(e => e.id === equipmentId)
    const newNode: Node = {
      id: `node-${instanceCounter}`,
      type: 'equipment',
      position: { x: 200 + Math.random() * 150, y: 150 + Math.random() * 150 },
      data: { equipmentId, label: eq?.name || equipmentId }
    }
    setNodes(nds => [...nds, newNode])
  }, [])

  const loadTemplate = useCallback((templateId: string) => {
    const tpl = TEMPLATES.find(t => t.id === templateId)
    if (!tpl) return
    if (nodes.length > 0) {
      if (!window.confirm('Substituir diagrama atual pelo template?')) return
    }
    setNodes(tpl.nodes as Node[])
    setEdges(tpl.edges as Edge[])
    setProjectName(tpl.name)
  }, [nodes])

  const handleExport = async () => {
    if (!flowRef.current) return
    const connections = edges.map(e => {
      const src = nodes.find(n => n.id === e.source)
      const tgt = nodes.find(n => n.id === e.target)
      return {
        from: (src?.data?.label as string) || e.source,
        to: (tgt?.data?.label as string) || e.target,
        signalType: (e.data?.signalType as string) || 'SDI',
        cable: (e.data?.cable as string) || '—',
        notes: e.data?.notes as string | undefined
      }
    })
    await exportToPDF(projectName, flowRef.current, connections)
  }

  const saveProject = () => {
    const data = { projectName, nodes, edges, savedAt: new Date().toISOString() }
    localStorage.setItem(`sim-connect-${projectName}`, JSON.stringify(data))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const clearCanvas = () => {
    if (window.confirm('Limpar diagrama?')) {
      setNodes([])
      setEdges([])
      setProjectName('Novo Projeto')
    }
  }

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0b0c0f', overflow: 'hidden' }}>
      {sidebarOpen && (
        <Sidebar onAddEquipment={addEquipment} onLoadTemplate={loadTemplate} />
      )}

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Toolbar */}
        <div style={{
          height: 48,
          backgroundColor: '#1a1b1f',
          borderBottom: '1px solid #2a2b2f',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: 12
        }}>
          <button
            onClick={() => setSidebarOpen(s => !s)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: 18, cursor: 'pointer', padding: 4 }}
          >
            ☰
          </button>

          <span style={{ color: '#E8571A', fontWeight: 900, fontSize: 16, letterSpacing: 2 }}>SIM</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>Connect</span>

          <div style={{ flex: 1 }} />

          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            style={{
              backgroundColor: '#0b0c0f',
              border: '1px solid #2a2b2f',
              borderRadius: 6,
              padding: '4px 12px',
              fontSize: 12,
              color: 'white',
              textAlign: 'center',
              width: 200,
              outline: 'none'
            }}
          />

          <div style={{ flex: 1 }} />

          <button
            onClick={clearCanvas}
            style={{
              padding: '6px 12px',
              fontSize: 11,
              border: '1px solid #2a2b2f',
              borderRadius: 6,
              backgroundColor: 'transparent',
              color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer'
            }}
          >
            Limpar
          </button>

          <button
            onClick={saveProject}
            style={{
              padding: '6px 12px',
              fontSize: 11,
              border: '1px solid #2a2b2f',
              borderRadius: 6,
              backgroundColor: saved ? '#1a4a2a' : 'transparent',
              color: saved ? '#00C896' : 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {saved ? '✓ Guardado' : 'Guardar'}
          </button>

          <button
            onClick={handleExport}
            style={{
              padding: '6px 14px',
              fontSize: 11,
              border: 'none',
              borderRadius: 6,
              backgroundColor: '#E8571A',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Export PDF
          </button>
        </div>

        {/* Canvas */}
        <div style={{ flex: 1 }} ref={flowRef}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            proOptions={{ hideAttribution: true }}
          >
            <Background
              variant={BackgroundVariant.Dots}
              gap={20}
              size={1}
              color="#2a2b2f"
            />
            <Controls />
            <MiniMap
              style={{ backgroundColor: '#1a1b1f' }}
              nodeColor="#E8571A"
            />
          </ReactFlow>
        </div>
      </div>
    </div>
  )
}
