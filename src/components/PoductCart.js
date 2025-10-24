'use client';
import { toast } from "sonner";

export default function ProductCard({ product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const exists = cart.some((p) => p.id === product.id);

    if (exists) return toast.warning(`${product.name} ya está en el carrito`);

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success(`${product.name} añadido al carrito`);
  };

  return (
    <div className="card bg-base-100 shadow-md border border-base-300">
      <figure>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="text-lg font-semibold text-primary">{product.price} €</p>
        <div className="card-actions justify-end">
          <button onClick={addToCart} className="btn btn-success btn-sm">Añadir</button>
        </div>
      </div>
    </div>
  );
}
