"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="drawer">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-100 shadow-md px-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="menu-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <Link href="/" className="text-xl font-bold text-primary">Tienda apasionados por el fútbol</Link>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/productos">Productos</Link></li>
              <li><Link href="/carrito">Carrito</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 bg-base-200">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/productos">Productos</Link></li>
          <li><Link href="/carrito">Carrito</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </div>
  );
}
