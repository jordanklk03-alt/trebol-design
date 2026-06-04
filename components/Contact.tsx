'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 glow-text">
          Contacto
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Nos encantaría escucharte. Contáctanos hoy.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neon-green">
                  <Phone className="h-6 w-6 text-dark-bg" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Teléfono</h3>
                <p className="text-gray-400">+1 (809) 555-0123</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neon-green">
                  <Mail className="h-6 w-6 text-dark-bg" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                <p className="text-gray-400">info@treboldesign.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neon-green">
                  <MapPin className="h-6 w-6 text-dark-bg" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Ubicación</h3>
                <p className="text-gray-400">Santo Domingo, República Dominicana</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-neon-green/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-neon-green/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-dark-card border border-neon-green/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Enviar Mensaje
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
