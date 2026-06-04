'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-[#0a0e27] to-transparent">
      <nav className="container flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neon-green rounded-full flex items-center justify-center">
            <span className="text-dark-bg font-bold text-lg">🍀</span>
          </div>
          <span className="text-white font-bold text-xl glow-text">TRÉBOL</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#inicio" className="text-white hover:text-neon-green transition">Inicio</a>
          <a href="#portfolio" className="text-white hover:text-neon-green transition">Portfolio</a>
          <a href="#servicios" className="text-white hover:text-neon-green transition">Servicios</a>
          <a href="#contacto" className="text-white hover:text-neon-green transition">Contacto</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg border-t border-neon-green/20">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#inicio" className="text-white hover:text-neon-green">Inicio</a>
            <a href="#portfolio" className="text-white hover:text-neon-green">Portfolio</a>
            <a href="#servicios" className="text-white hover:text-neon-green">Servicios</a>
            <a href="#contacto" className="text-white hover:text-neon-green">Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
}
