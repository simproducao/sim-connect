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
      gap: 24
    }}>
      <img src="/logo.png" alt="SIM" style={{ height: 60, objectFit: 'contain' }} />
      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, letterSpacing: 2 }}>CONNECT</div>

      <div style={{
        backgroundColor: '#1a1b1f',
        border: '1px solid #2a2b2f',
        borderRadius: 12,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: 300
      }}>
        <div style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>
          Acesso Restrito
        </div>

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && tentar()}
          style={{
            backgroundColor: '#0b0c0f',
            border: `1px solid ${erro ? '#ff4444' : '#2a2b2f'}`,
            borderRadius: 8,
            padding: '10px 14px',
            fontSize: 14,
            color: 'white',
            outline: 'none',
            textAlign: 'center'
          }}
          autoFocus
        />

        {erro && (
          <div style={{ color: '#ff4444', fontSize: 12, textAlign: 'center' }}>
            Password incorreta
          </div>
        )}

        <button
          onClick={tentar}
          style={{
            backgroundColor: '#E8571A',
            border: 'none',
            borderRadius: 8,
            padding: '10px 0',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
            cursor: 'pointer'
          }}
        >
          Entrar
        </button>
      </div>

      <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11 }}>
        SIM Produção · sim.pt
      </div>
    </div>
  )
}