import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Todos los campos son obligatorios')
      return
    }

    if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres')
      return
    }

    alert('Autenticación exitosa')
  }

  return (
    <main className="form-container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="form-box">
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </main>
  )
}

export default Login