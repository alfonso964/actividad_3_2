import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">Inicio</Link>
        <Link href="/productos" className="link link-hover">Productos</Link>
        <Link href="/contacto" className="link link-hover">Contacto</Link>
      </nav>
      <p className="text-sm mt-2">© 2025 Tienda Futbolera. Todos los derechos reservados.</p>
    </footer>
  );
}
