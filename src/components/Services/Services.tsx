import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Projeto e Construção',
    description: 'Projetos personalizados e execução completa da sua piscina dos sonhos',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10c78?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Serviços especializados de manutenção para garantir água cristalina',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Reforma e Modernização',
    description: 'Renovação completa da sua piscina com as últimas tecnologias',
    image: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Serviços</h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções completas para sua piscina, do projeto à manutenção
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}