'use client';

import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'LA RAZA RD',
    category: 'Drink Bar',
    description: 'Landing page moderna para drink bar dominicano con integración de WhatsApp y menú de bebidas.',
    url: 'https://colmadoproyect.netlify.app/',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    name: 'Barbería Premium',
    category: 'Barbería',
    description: 'Sitio elegante para barbería con galería de cortes, reservas y sistema de contacto.',
    url: 'https://barberiaprojet.netlify.app/',
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 3,
    name: 'Salón de Belleza',
    category: 'Salón',
    description: 'Web premium para salón de belleza con servicios, testimonios y reservas por WhatsApp.',
    url: 'https://agent-6a212c9fe3002b4c80ce94e7--bellezasalon.netlify.app/#tienda',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
          Portfolio
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Proyectos recientes que demuestran nuestra experiencia en diseño web moderno y efectivo.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card group hover:scale-105 transition-transform duration-300">
              <div className={`h-48 bg-gradient-to-br ${project.color} rounded-lg mb-4 flex items-center justify-center`}>
                <span className="text-white text-4xl font-bold opacity-20">🚀</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-neon-green text-sm mb-3">{project.category}</p>
              <p className="text-gray-400 text-sm mb-6">{project.description}</p>
              
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neon-green hover:gap-3 transition-all"
              >
                Ver Proyecto
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
