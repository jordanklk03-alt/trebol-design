'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-neon-green/20 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                <span className="text-dark-bg font-bold">🍀</span>
              </div>
              <span className="text-white font-bold">TRÉBOL</span>
            </div>
            <p className="text-gray-400 text-sm">Transformamos tu visión en realidad digital.</p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#inicio" className="hover:text-neon-green transition">Inicio</a></li>
              <li><a href="#portfolio" className="hover:text-neon-green transition">Portfolio</a></li>
              <li><a href="#servicios" className="hover:text-neon-green transition">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-neon-green transition">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-neon-green transition">Diseño Web</a></li>
              <li><a href="#" className="hover:text-neon-green transition">Desarrollo</a></li>
              <li><a href="#" className="hover:text-neon-green transition">SEO</a></li>
              <li><a href="#" className="hover:text-neon-green transition">Consultoría</a></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-neon-green transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-neon-green/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Trébol Design. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-neon-green transition">Privacidad</a>
              <a href="#" className="hover:text-neon-green transition">Términos</a>
              <a href="#" className="hover:text-neon-green transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
