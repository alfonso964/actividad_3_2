import ProductCard from "./components/ProductCard";
import TooltipButton from "./components/TooltipButton";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Tienda apasionados por el fútbol</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard nombre="Balón Adidas" precio="39.99" img="/balon.jpg" />
        <ProductCard nombre="Botas Nike" precio="89.99" img="/botas.jpg" />
        <ProductCard nombre="Camiseta Real Madrid" precio="99.99" img="/camiseta.jpg" />
      </div>

      <div className="flex justify-center mt-8">
        <TooltipButton texto="Ver más productos" tooltip="Ir a catálogo completo" />
      </div>
    </div>
  );
}
