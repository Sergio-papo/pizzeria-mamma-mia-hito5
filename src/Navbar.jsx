import { Link } from "react-router-dom";

function Navbar() {
  const total = 25000;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Pizzería Mamma Mía
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/cart">🛒 Total: ${total.toLocaleString("es-CL")}</Link>
      </div>
    </nav>
  );
}

export default Navbar;