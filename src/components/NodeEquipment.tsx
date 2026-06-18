import { memo } from 'react'
import { Handle, Position, NodeProps } from '@xyflow/react'
import { EQUIPMENT, SIGNAL_COLORS } from '../data/equipment'

export const NodeEquipment = memo(({ data, selected }: NodeProps) => {
  const eq = EQUIPMENT.find(e => e.id === (data.equipmentId as string))
  if (!eq) return null

  const inputs = eq.ports.filter(p => p.direction === 'input')
  const outputs = eq.ports.filter(p => p.direction === 'output')

  return (
    <div
      style={{
        backgroundColor: eq.color,
        borderColor: selected ? '#E8571A' : 'rgba(255,255,255,0.1)',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 8,
        minWidth: 180,
        color: 'white',
        fontSize: 11,
        fontFamily: 'monospace',
        boxShadow: selected ? '0 0 0 2px #E8571A' : 'none'
      }}
    >
      <div style={{
        padding: '6px 12px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        fontWeight: 'bold',
        fontSize: 11,
        textAlign: 'center',
        lineHeight: 1.3
      }}>
        {(data.label as string) || eq.name}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 4px', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {inputs.map(port => (
            <div key={port.id} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Handle
                type="target"
                position={Position.Left}
                id={port.id}
                style={{
                  background: SIGNAL_COLORS[port.signalType],
                  width: 8, height: 8,
                  left: -12
                }}
              />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9, marginLeft: 4 }}>{port.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
          {outputs.map(port => (
            <div key={port.id} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9, marginRight: 4 }}>{port.label}</span>
              <Handle
                type="source"
                position={Position.Right}
                id={port.id}
                style={{
                  background: SIGNAL_COLORS[port.signalType],
                  width: 8, height: 8,
                  right: -12
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '4px 12px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        fontSize: 9,
        color: 'rgba(255,255,255,0.3)',
        textAlign: 'center'
      }}>
        {eq.category}
      </div>
    </div>
  )
})
