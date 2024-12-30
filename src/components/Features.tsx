import React from 'react';
import { Shield, Truck, Headphones, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Garantia de Qualidade',
    description: 'Produtos e serviços com garantia estendida e certificação de qualidade.'
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Entrega em até 48 horas para produtos em estoque na região.'
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description: 'Equipe técnica pronta para auxiliar em todas as etapas.'
  },
  {
    icon: Award,
    title: '10 Anos de Experiência',
    description: 'Tradição e excelência no mercado de piscinas e arquitetura.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Por que escolher a SPA Arquitetura e Piscinas?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Compromisso com qualidade e satisfação do cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}