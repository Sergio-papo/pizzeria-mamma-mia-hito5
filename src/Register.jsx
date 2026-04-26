import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios')
      return
    }

    if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres')
      return
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    alert('Registro exitoso')
  }

  return (
    <main className="form-container">
      <h1>Register</h1>

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

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </main>
  )
}

export default Register