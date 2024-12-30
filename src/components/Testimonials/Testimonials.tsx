import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Cliente Residencial',
    content: 'Projeto incrível! A equipe foi super profissional e entregou exatamente o que sonhávamos para nossa área de lazer.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Carlos Santos',
    role: 'Proprietário de Hotel',
    content: 'Excelente serviço de manutenção. Nossa piscina nunca esteve tão bem cuidada e os hóspedes sempre elogiam.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Mariana Costa',
    role: 'Arquiteta',
    content: 'Parceria de sucesso! Os produtos são de altíssima qualidade e o suporte técnico é excepcional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Depoimentos</h2>
          <p className="mt-4 text-xl text-gray-600">
            O que nossos clientes dizem sobre nós
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}