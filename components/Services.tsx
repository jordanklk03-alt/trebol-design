'use client';

import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Diseño Web',
    description: 'Diseños modernos, atractivos y alineados con tu marca. Cada pixel cuenta.',
  },
  {
    icon: Code,
    title: 'Desarrollo',
    description: 'Código limpio, optimizado y escalable. Tecnologías modernas para máximo rendimiento.',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'Sitios que se ven perfectos en cualquier dispositivo. Mobile-first siempre.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Velocidad extrema y optimización SEO. Tu sitio carga en milisegundos.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
          Servicios
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Ofrecemos soluciones completas de diseño y desarrollo web para llevar tu negocio al siguiente nivel.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neon-green">
                      <Icon className="h-6 w-6 text-dark-bg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
