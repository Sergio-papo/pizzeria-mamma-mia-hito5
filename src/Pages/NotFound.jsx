import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}

export default NotFound;