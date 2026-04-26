const Navbar = ({ setView }) => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button onClick={() => setView('home')}>🍕 Home</button>

        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setView('login')}>🔐 Login</button>
            <button onClick={() => setView('register')}>🔐 Register</button>
          </>
        )}
      </div>

      <div className="nav-right">
        <button>🛒 Total: ${total.toLocaleString('es-CL')}</button>
      </div>
    </nav>
  )
}

export default Navbar