import { memo } from 'react'
import { Handle, Position, NodeProps } from '@xyflow/react'
import { EQUIPMENT, SIGNAL_COLORS } from '../data/equipment'

const CATEGORY_COLORS: Record<string, string> = {
  'ATEMs': '#0066cc',
  'CÂMARA': '#006633',
  'PTZ': '#2d5a00',
  'Conversores': '#7a3500',
  'FIBRA': '#6600aa',
  'ÁUDIO': '#00557a',
  'DANTE': '#7a0055',
  'GRAVAÇÃO': '#7a0000',
  'COMPUTADOR': '#1a4a00',
  'CONTROLO': '#4a4a00',
  'ECRÃ': '#004a4a',
}

function darken(hex: string, amount: number = 0.4): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.min(255, Math.floor((num >> 16) * (1 - amount))))
  const g = Math.max(0, Math.min(255, Math.floor(((num >> 8) & 0xff) * (1 - amount))))
  const b = Math.max(0, Math.min(255, Math.floor((num & 0xff) * (1 - amount))))
  return `rgb(${r},${g},${b})`
}

export const NodeEquipment = memo(({ data, selected }: NodeProps) => {
  const eq = EQUIPMENT.find(e => e.id === (data.equipmentId as string))
  if (!eq) return null

  const inputs = eq.ports.filter(p => p.direction === 'input')
  const outputs = eq.ports.filter(p => p.direction === 'output')
  const categoryColor = CATEGORY_COLORS[eq.category] || '#333'
  const borderColor = selected ? '#E8571A' : 'rgba(255,255,255,0.15)'

  return (
    <div style={{
      backgroundColor: '#111214',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 6,
      minWidth: 200,
      maxWidth: 260,
      fontFamily: '-apple-system, BlinkMacSystemFont, monospace',
      boxShadow: selected
        ? '0 0 0 2px #E8571A, 0 8px 24px rgba(0,0,0,0.8)'
        : '0 4px 16px rgba(0,0,0,0.6)',
    }}>
      {/* HEADER */}
      <div style={{
        backgroundColor: categoryColor,
        padding: '5px 10px',
        borderRadius: '4px 4px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6
      }}>
        <div style={{
          color: 'white',
          fontSize: 10,
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          opacity: 0.9
        }}>
          {eq.category}
        </div>
        {eq.image && (
          <img
            src={eq.image}
            alt=""
            style={{ width: 20, height: 20, objectFit: 'contain', borderRadius: 2 }}
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        )}
      </div>

      {/* NOME */}
      <div style={{
        padding: '6px 10px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        backgroundColor: '#161820'
      }}>
        <div style={{
          color: 'white',
          fontSize: 11,
          fontWeight: 700,
          lineHeight: 1.3,
          letterSpacing: 0.2
        }}>
          {(data.label as string) || eq.name}
        </div>
      </div>

      {/* PORTAS */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 0',
        gap: 8,
        backgroundColor: '#111214',
        position: 'relative'
      }}>
        {/* INPUTS — cor escurecida */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flex: 1
        }}>
          {inputs.map(port => {
            const signalColor = SIGNAL_COLORS[port.signalType]
            const inputColor = darken(signalColor, 0.35)
            return (
              <div key={port.id} style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 4,
                minHeight: 22
              }}>
                <Handle
                  type="target"
                  position={Position.Left}
                  id={port.id}
                  style={{
                    background: inputColor,
                    width: 12,
                    height: 12,
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: `2px solid ${signalColor}44`,
                    borderRadius: 3,
                    cursor: 'crosshair',
                    zIndex: 10
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: inputColor,
                    flexShrink: 0
                  }} />
                  <span style={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: 9,
                    fontFamily: 'monospace',
                    letterSpacing: 0.3,
                    lineHeight: 1.3
                  }}>
                    {port.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* DIVIDER */}
        <div style={{
          width: 1,
          backgroundColor: 'rgba(255,255,255,0.06)',
          flexShrink: 0,
          alignSelf: 'stretch'
        }} />

        {/* OUTPUTS — cor brilhante */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flex: 1,
          alignItems: 'flex-end'
        }}>
          {outputs.map(port => {
            const signalColor = SIGNAL_COLORS[port.signalType]
            return (
              <div key={port.id} style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: 20,
                paddingLeft: 4,
                minHeight: 22
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: 9,
                    fontFamily: 'monospace',
                    letterSpacing: 0.3,
                    lineHeight: 1.3,
                    textAlign: 'right'
                  }}>
                    {port.label}
                  </span>
                  <div style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: signalColor,
                    flexShrink: 0
                  }} />
                </div>
                <Handle
                  type="source"
                  position={Position.Right}
                  id={port.id}
                  style={{
                    background: signalColor,
                    width: 12,
                    height: 12,
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: '2px solid rgba(0,0,0,0.6)',
                    borderRadius: 3,
                    cursor: 'crosshair',
                    zIndex: 10
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        padding: '3px 10px',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderRadius: '0 0 4px 4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{
          color: 'rgba(255,255,255,0.25)',
          fontSize: 8,
          fontFamily: 'monospace',
          letterSpacing: 0.5
        }}>
          {inputs.length}IN · {outputs.length}OUT
        </span>
        <span style={{
          color: 'rgba(255,255,255,0.25)',
          fontSize: 8,
          fontFamily: 'monospace'
        }}>
          qty:{eq.quantity}
        </span>
      </div>
    </div>
  )
})