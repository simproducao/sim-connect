import { useState } from 'react'
import { EQUIPMENT, CATEGORIES } from '../data/equipment'
import { TEMPLATES } from '../data/templates'

interface Props {
  onAddEquipment: (equipmentId: string) => void
  onLoadTemplate: (templateId: string) => void
}

export function Sidebar({ onAddEquipment, onLoadTemplate }: Props) {
  const [tab, setTab] = useState<'equipment' | 'templates'>('equipment')
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = EQUIPMENT.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCategory ? e.category === activeCategory : true
    return matchSearch && matchCat
  })

  return (
    <div style={{
      width: 280,
      backgroundColor: '#1a1b1f',
      borderRight: '1px solid #2a2b2f',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }}>
      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #2a2b2f' }}>
        {(['equipment', 'templates'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              padding: '12px 0',
              fontSize: 11,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 1,
              border: 'none',
              backgroundColor: 'transparent',
              color: tab === t ? '#E8571A' : 'rgba(255,255,255,0.3)',
              borderBottom: tab === t ? '2px solid #E8571A' : '2px solid transparent',
              cursor: 'pointer'
            }}
          >
            {t === 'equipment' ? 'Equipamentos' : 'Templates'}
          </button>
        ))}
      </div>

      {tab === 'equipment' && (
        <>
          <div style={{ padding: 12 }}>
            <input
              type="text"
              placeholder="Pesquisar..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#0b0c0f',
                border: '1px solid #2a2b2f',
                borderRadius: 6,
                padding: '8px 12px',
                fontSize: 12,
                color: 'white',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ padding: '0 12px 8px', display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                padding: '3px 8px',
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: !activeCategory ? '#E8571A' : '#0b0c0f',
                color: 'white'
              }}
            >
              TODOS
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                style={{
                  padding: '3px 8px',
                  borderRadius: 4,
                  fontSize: 10,
                  fontWeight: 'bold',
                  border: '1px solid #2a2b2f',
                  cursor: 'pointer',
                  backgroundColor: activeCategory === cat ? '#E8571A' : '#0b0c0f',
                  color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.4)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {filtered.map(eq => (
              <button
                key={eq.id}
                onClick={() => onAddEquipment(eq.id)}
                style={{
                  textAlign: 'left',
                  padding: 10,
                  borderRadius: 6,
                  border: '1px solid #2a2b2f',
                  backgroundColor: eq.color + '44',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s'
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#E8571A')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2b2f')}
              >
                <div style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>{eq.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginTop: 2 }}>
                  {eq.category} · qty: {eq.quantity}
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {tab === 'templates' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {TEMPLATES.map(t => (
            <button
              key={t.id}
              onClick={() => onLoadTemplate(t.id)}
              style={{
                textAlign: 'left',
                padding: 12,
                borderRadius: 6,
                border: '1px solid #2a2b2f',
                backgroundColor: '#0b0c0f',
                cursor: 'pointer'
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#E8571A')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2b2f')}
            >
              <div style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>{t.name}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginTop: 4 }}>{t.description}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
