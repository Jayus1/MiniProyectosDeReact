import { Link } from "../Links";

export default function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <p>Esta es una pagina para un ejemplo de router</p>
      <Link to="/About">Ir a sobre nnosotros</Link>
    </>
  );
}
