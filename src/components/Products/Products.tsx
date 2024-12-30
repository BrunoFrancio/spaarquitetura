import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
    name: 'Filtro Premium Plus',
    price: 'R$ 1.299,00',
    description: 'Filtro de alta performance para piscinas de até 100.000L'
  },
  {
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10c78?auto=format&fit=crop&w=600&q=80',
    name: 'Kit Manutenção Completo',
    price: 'R$ 499,00',
    description: 'Kit completo para manutenção mensal da sua piscina'
  },
  {
    image: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=600&q=80',
    name: 'Bomba Ultra Silenciosa',
    price: 'R$ 2.499,00',
    description: 'Bomba de última geração com tecnologia silenciosa'
  }
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Produtos</h2>
          <p className="mt-4 text-xl text-gray-600">
            Equipamentos e acessórios de alta qualidade para sua piscina
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}