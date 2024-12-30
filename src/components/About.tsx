import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Anos de Experiência', value: '10+' },
  { icon: Users, label: 'Clientes Satisfeitos', value: '1000+' },
  { icon: Clock, label: 'Projetos Entregues', value: '500+' }
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Sobre Nós</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de uma década, a SPA Arquitetura e Piscinas transforma sonhos em realidade, 
            criando espaços de lazer únicos e fornecendo produtos de alta qualidade para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-cyan-50">
              <stat.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}