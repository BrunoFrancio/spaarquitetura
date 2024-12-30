import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

export default function ProductCard({ image, name, price, description }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-600">{price}</span>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-cyan-700 transition-colors">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}