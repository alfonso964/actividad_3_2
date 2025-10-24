import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata = {
  title: "Tienda Futbolera",
  description: "Proyecto con Next.js + Tailwind + DaisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-base-200">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
