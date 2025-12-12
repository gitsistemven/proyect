// src/components/HeroSection.tsx
import React, { useEffect, useState } from "react";
import "./HeroSection.css";
// Iconos de flecha (asumo que tienes react-icons instalado)
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const slides = [
  "/img/bann.jpeg",
  "/img/bann2.jpeg",
  "/img/bann3.jpeg",
  "/img/bann4.jpg",
];

const HeroSection: React.FC = () => {
  const [idx, setIdx] = useState(0);

  // --- Funciones de Navegación Manual ---

  const goToPrev = () => {
    // Si estamos en el slide 0, vamos al último slide. Si no, restamos 1.
    setIdx(i => (i === 0 ? slides.length - 1 : i - 1));
  };

  const goToNext = () => {
    // Si estamos en el último slide, vamos al slide 0. Si no, sumamos 1.
    setIdx(i => (i + 1) % slides.length);
  };

  // --- Navegación Automática ---
  useEffect(() => {
    const t = setInterval(goToNext, 4500); // Usamos goToNext para mantener el bucle
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div key={i} className={`hero-slide ${i === idx ? "active" : ""}`} style={{ backgroundImage: `url(${s})` }} />
      ))}
      
      {/* 💥 Puntos y Flechas van DENTRO del carrusel, sobre la imagen */}
      <div className="hero-controls container">
        
        {/* --- 1. Botones de Navegación (Flechas) --- */}
        <button className="nav-arrow left" onClick={goToPrev} aria-label="Anterior">
          <FaChevronLeft size={24} />
        </button>
        <button className="nav-arrow right" onClick={goToNext} aria-label="Siguiente">
          <FaChevronRight size={24} />
        </button>
        
        {/* --- 2. Puntos Indicadores (Dots) --- */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={`dot ${i === idx ? "active" : ""}`} 
              onClick={() => setIdx(i)} 
              aria-label={`Slide ${i+1}`} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};
export default HeroSection;