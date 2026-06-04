'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-green rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center slide-in-up">
          {/* Logo grande */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-neon-green to-green-500 rounded-full flex items-center justify-center float">
              <span className="text-6xl">🍀</span>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            TRÉBOL DESIGN
          </h1>

          {/* Eslogan */}
          <p className="text-xl md:text-3xl text-neon-green mb-8 font-light">
            Transformamos tu Visión en Realidad
          </p>

          {/* Descripción */}
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Creamos landing pages modernas, efectivas y optimizadas que convierten visitantes en clientes. 
            Diseño web profesional para negocios que quieren crecer.
          </p>

          {/* Botones */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              Ver Portfolio
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 border-2 border-neon-green text-neon-green rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition">
              Contactar
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-neon-green">50+</div>
              <div className="text-gray-400">Proyectos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neon-green">30+</div>
              <div className="text-gray-400">Clientes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neon-green">5+</div>
              <div className="text-gray-400">Años</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
