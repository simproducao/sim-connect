import { useState, useEffect } from 'react'

const PASSWORD = 'Simultaneo2@'

export function useAuth() {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('sim-connect-auth')
    if (saved === PASSWORD) setAuthed(true)
  }, [])

  const login = (pass: string) => {
    if (pass === PASSWORD) {
      localStorage.setItem('sim-connect-auth', pass)
      setAuthed(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('sim-connect-auth')
    setAuthed(false)
  }

  return { authed, login, logout }
}

export function LoginScreen({ onLogin }: { onLogin: (pass: string) => boolean }) {
  const [pass, setPass] = useState('')
  const [erro, setErro] = useState(false)

  const tentar = () => {
    const ok = onLogin(pass)
    if (!ok) {
      setErro(true)
      setPass('')
      setTimeout(() => setErro(false), 2000)
    }
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#0b0c0f',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 32,
      backgroundImage: 'radial-gradient(ellipse at center, #1a1b2f 0%, #0b0c0f 70%)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <img
          src="/logo.png"
          alt="SIM"
          style={{ height: 120, width: 'auto', objectFit: 'contain' }}
        />
        <div style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: 11,
          letterSpacing: 6,
          textTransform: 'uppercase',
          fontWeight: 300
        }}>
          Connect
        </div>
      </div>

      <div style={{
        backgroundColor: '#1a1b1f',
        border: '1px solid #2a2b2f',
        borderRadius: 16,
        padding: '36px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: 320,
        boxShadow: '0 24px 64px rgba(0,0,0,0.6)'
      }}>
        <div style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          letterSpacing: 0.5
        }}>
          Acesso Restrito
        </div>

        <div style={{
          width: 40,
          height: 2,
          backgroundColor: '#E8571A',
          margin: '0 auto',
          borderRadius: 2
        }} />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && tentar()}
          style={{
            backgroundColor: '#0b0c0f',
            border: `1px solid ${erro ? '#ff4444' : '#2a2b2f'}`,
            borderRadius: 10,
            padding: '12px 16px',
            fontSize: 15,
            color: 'white',
            outline: 'none',
            textAlign: 'center',
            letterSpacing: 3,
            transition: 'border-color 0.2s'
          }}
          autoFocus
        />

        {erro && (
          <div style={{
            color: '#ff4444',
            fontSize: 12,
            textAlign: 'center',
            marginTop: -8
          }}>
            Password incorreta. Tenta novamente.
          </div>
        )}

        <button
          onClick={tentar}
          style={{
            backgroundColor: '#E8571A',
            border: 'none',
            borderRadius: 10,
            padding: '13px 0',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
            cursor: 'pointer',
            letterSpacing: 1,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Entrar
        </button>
      </div>

      <div style={{
        color: 'rgba(255,255,255,0.15)',
        fontSize: 11,
        letterSpacing: 1
      }}>
        SIM Produção · sim.pt
      </div>
    </div>
  )
}