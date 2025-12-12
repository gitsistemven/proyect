// src/components/MainContentGrid.tsx
import React from 'react';
import ProductCarousel from './ProductCarousel'; 
import './MainContentGrid.css';

const MainContentGrid: React.FC = () => {
  return (
    <div className="main-content-grid container">
      {/* Columna 2: Carrusel de Productos Destacados */}
      <div className="grid-item product-carousel-wrap">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default MainContentGrid;