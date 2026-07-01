import { useState, useEffect } from 'react'
import { EQUIPMENT, CATEGORIES } from '../data/equipment'
import { TEMPLATES, getUserTemplates, deleteUserTemplate, UserTemplate } from '../data/templates'

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

interface Props {
  onAddEquipment: (equipmentId: string) => void
  onLoadTemplate: (templateId: string) => void
  onLoadUserTemplate: (template: UserTemplate) => void
  refreshKey: number
  isMobile: boolean
  mobileTab: 'equipment' | 'templates' | null
  onCloseMobile: () => void
}

export function Sidebar({ onAddEquipment, onLoadTemplate, onLoadUserTemplate, refreshKey, isMobile, mobileTab, onCloseMobile }: Props) {
  const [tab, setTab] = useState<'equipment' | 'templates'>('equipment')
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [userTemplates, setUserTemplates] = useState<UserTemplate[]>([])

  useEffect(() => {
    setUserTemplates(getUserTemplates())
  }, [refreshKey])

  useEffect(() => {
    if (mobileTab) setTab(mobileTab)
  }, [mobileTab])

  const filtered = EQUIPMENT.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCategory ? e.category === activeCategory : true
    return matchSearch && matchCat
  })

  const handleDelete = (id: string) => {
    if (window.confirm('Apagar este template?')) {
      deleteUserTemplate(id)
      setUserTemplates(getUserTemplates())
    }
  }

  const handleAddEquipment = (id: string) => {
    onAddEquipment(id)
    if (isMobile) onCloseMobile()
  }

  const handleLoadTemplate = (id: string) => {
    onLoadTemplate(id)
    if (isMobile) onCloseMobile()
  }

  const handleLoadUserTemplate = (t: UserTemplate) => {
    onLoadUserTemplate(t)
    if (isMobile) onCloseMobile()
  }

  const sidebarStyle: React.CSSProperties = isMobile ? {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '75vh',
    backgroundColor: '#0e0f11',
    borderTop: '1px solid #2a2b2f',
    borderRadius: '16px 16px 0 0',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 -8px 32px rgba(0,0,0,0.8)'
  } : {
    width: 290,
    backgroundColor: '#0e0f11',
    borderRight: '1px solid #1e1f23',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden'
  }

  const content = (
    <div style={sidebarStyle}>
      {/* DRAG HANDLE MOBILE */}
      {isMobile && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 6px' }}>
          <div style={{ width: 36, height: 4, backgroundColor: '#333', borderRadius: 2 }} />
        </div>
      )}

      {/* TABS */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #1e1f23',
        backgroundColor: '#0e0f11',
        flexShrink: 0
      }}>
        {(['equipment', 'templates'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              padding: '11px 0',
              fontSize: 10,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              border: 'none',
              backgroundColor: 'transparent',
              color: tab === t ? '#E8571A' : 'rgba(255,255,255,0.25)',
              borderBottom: tab === t ? '2px solid #E8571A' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'color 0.15s'
            }}
          >
            {t === 'equipment' ? '⬛ Equipamentos' : '📋 Templates'}
          </button>
        ))}
        {isMobile && (
          <button
            onClick={onCloseMobile}
            style={{
              padding: '11px 16px',
              border: 'none',
              backgroundColor: 'transparent',
              color: 'rgba(255,255,255,0.3)',
              fontSize: 18,
              cursor: 'pointer'
            }}
          >✕</button>
        )}
      </div>

      {tab === 'equipment' && (
        <>
          {/* SEARCH */}
          <div style={{ padding: '10px 12px 6px', flexShrink: 0 }}>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute', left: 10, top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.25)', fontSize: 12
              }}>🔍</span>
              <input
                type="text"
                placeholder="Pesquisar equipamento..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#161820',
                  border: '1px solid #2a2b2f',
                  borderRadius: 6,
                  padding: '8px 12px 8px 30px',
                  fontSize: 11,
                  color: 'white',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'monospace'
                }}
              />
            </div>
          </div>

          {/* CATEGORIAS */}
          <div style={{
            padding: '4px 12px 8px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            flexShrink: 0,
            borderBottom: '1px solid #1e1f23'
          }}>
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                padding: '3px 8px',
                borderRadius: 3,
                fontSize: 9,
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                backgroundColor: !activeCategory ? '#E8571A' : '#1a1b1f',
                color: 'white',
                transition: 'background 0.15s'
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
                  borderRadius: 3,
                  fontSize: 9,
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  backgroundColor: activeCategory === cat
                    ? (CATEGORY_COLORS[cat] || '#E8571A')
                    : '#1a1b1f',
                  color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.4)',
                  transition: 'background 0.15s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* LISTA EQUIPAMENTOS */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '6px 8px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
            {filtered.map(eq => {
              const catColor = CATEGORY_COLORS[eq.category] || '#333'
              return (
                <button
                  key={eq.id}
                  onClick={() => handleAddEquipment(eq.id)}
                  style={{
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: 5,
                    border: '1px solid #1e1f23',
                    backgroundColor: '#161820',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    transition: 'border-color 0.15s, background 0.15s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = catColor
                    e.currentTarget.style.backgroundColor = catColor + '22'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1e1f23'
                    e.currentTarget.style.backgroundColor = '#161820'
                  }}
                >
                  {/* BARRA COR CATEGORIA */}
                  <div style={{
                    width: 3,
                    alignSelf: 'stretch',
                    borderRadius: 2,
                    backgroundColor: catColor,
                    flexShrink: 0
                  }} />

                  {/* IMAGEM */}
                  {eq.image && (
                    <img
                      src={eq.image}
                      alt=""
                      style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 3, flexShrink: 0 }}
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    />
                  )}

                  {/* INFO */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      color: 'white',
                      fontSize: 11,
                      fontWeight: 600,
                      lineHeight: 1.3,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {eq.name}
                    </div>
                    <div style={{
                      color: 'rgba(255,255,255,0.3)',
                      fontSize: 9,
                      marginTop: 2,
                      fontFamily: 'monospace',
                      letterSpacing: 0.3
                    }}>
                      {eq.category} · {eq.ports.filter(p => p.direction === 'input').length}IN {eq.ports.filter(p => p.direction === 'output').length}OUT · qty:{eq.quantity}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </>
      )}

      {tab === 'templates' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 8px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>

          {/* PREDEFINIDOS */}
          <div style={{
            color: 'rgba(255,255,255,0.25)',
            fontSize: 9,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            padding: '4px 4px 2px',
            fontFamily: 'monospace'
          }}>
            Predefinidos
          </div>
          {TEMPLATES.map(t => (
            <button
              key={t.id}
              onClick={() => handleLoadTemplate(t.id)}
              style={{
                textAlign: 'left',
                padding: '10px 12px',
                borderRadius: 5,
                border: '1px solid #1e1f23',
                backgroundColor: '#161820',
                cursor: 'pointer',
                transition: 'border-color 0.15s'
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#E8571A')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e1f23')}
            >
              <div style={{ color: 'white', fontSize: 11, fontWeight: 600 }}>{t.name}</div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, marginTop: 3, fontFamily: 'monospace' }}>{t.description}</div>
            </button>
          ))}

          {/* OS MEUS TEMPLATES */}
          <div style={{
            color: 'rgba(255,255,255,0.25)',
            fontSize: 9,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            padding: '8px 4px 2px',
            fontFamily: 'monospace'
          }}>
            Os meus templates
          </div>
          {userTemplates.length === 0 && (
            <div style={{
              color: 'rgba(255,255,255,0.2)',
              fontSize: 10,
              fontStyle: 'italic',
              padding: '6px 4px',
              fontFamily: 'monospace'
            }}>
              Ainda não guardaste nenhum.
            </div>
          )}
          {userTemplates.map(t => (
            <div
              key={t.id}
              style={{
                padding: '10px 12px',
                borderRadius: 5,
                border: '1px solid #1e1f23',
                backgroundColor: '#161820',
                position: 'relative'
              }}
            >
              <button
                onClick={() => handleLoadUserTemplate(t)}
                style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  padding: 0,
                  paddingRight: 24
                }}
              >
                <div style={{ color: 'white', fontSize: 11, fontWeight: 600 }}>{t.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, marginTop: 3, fontFamily: 'monospace' }}>{t.description}</div>
              </button>
              <button
                onClick={() => handleDelete(t.id)}
                style={{
                  position: 'absolute', top: 8, right: 8,
                  background: 'none', border: 'none',
                  color: 'rgba(255,255,255,0.2)',
                  cursor: 'pointer', fontSize: 12,
                  padding: 2
                }}
                title="Apagar"
              >✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  if (isMobile && mobileTab === null) return null

  if (isMobile) {
    return (
      <>
        <div
          onClick={onCloseMobile}
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 999
          }}
        />
        {content}
      </>
    )
  }

  return content
}