import React, { useState, useEffect } from 'react';
import './ProductCarouselGrid.css';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';

interface Product {
    id: number;
    name: string;
    price: number;
    src: string;
}

interface ProductCarouselGridProps {
    title: string;
    products: Product[];
}

const ProductCarouselGrid: React.FC<ProductCarouselGridProps> = ({ title, products }) => {
    const [currentPage, setCurrentPage] = useState(0); 
    const ITEMS_PER_PAGE = 4; // Mostramos 4 productos a la vez
    
    // Calcula cuántos deslizamientos individuales son posibles
    const maxScroll = products.length - ITEMS_PER_PAGE; 

    // --- Lógica de Navegación Manual ---
    const goToNext = () => {
        // Se mueve un índice a la vez
        setCurrentPage(prev => Math.min(prev + 1, maxScroll));
    };

    const goToPrev = () => {
        // Se mueve un índice a la vez
        setCurrentPage(prev => Math.max(prev - 1, 0));
    };
    
    // --- Lógica de Deslizamiento Automático (Autoplay) ---
    useEffect(() => {
        if (maxScroll <= 0) return; // Detener si no hay nada que desplazar
        
        const interval = setInterval(() => {
            setCurrentPage(prev => {
                // Si llegamos al final, volvemos al inicio (bucle infinito)
                const next = prev + 1;
                return next > maxScroll ? 0 : next; 
            });
        }, 4000); // Se desplaza cada 4 segundos (ajustable)

        return () => clearInterval(interval);
    }, [maxScroll]); 
    // Fin de la Lógica de Deslizamiento Automático

    return (
        <section className="product-grid-section container">
            <h2>{title}</h2>
            <div className="carousel-grid-wrapper">
                
                <div 
                    className="grid-product-list"
                    // Aplicamos la transformación. El desplazamiento es el (100% / 4) por cada ítem
                    style={{ transform: `translateX(-${currentPage * (100 / ITEMS_PER_PAGE)}%)` }} 
                >
                    {products.map(product => (
                        <div key={product.id} className="grid-product-card">
                            <a href={`/producto/${product.id}`} className="product-link">
                                
                                {/* Imagen del Producto */}
                                <img src={product.src} alt={product.name} loading="lazy" />
                                
                                {/* Información del Producto */}
                                <div className="grid-product-info">
                                    <span className="grid-product-name">{product.name}</span>
                                    <span className="grid-product-price">U$S {product.price.toFixed(2)}</span>
                                </div>
                            </a>
                            
                            {/* Botón de Carrito con Icono y Texto */}
                            <button className="add-to-cart-btn" aria-label="Añadir al carrito">
                                <FaShoppingCart size={18} /> Comprar
                            </button>
                        </div>
                    ))}
                </div>

                {/* Controles de Navegación (Flechas) */}
                <button 
                    className="grid-nav-arrow left" 
                    onClick={goToPrev} 
                    disabled={currentPage === 0}>
                    <FaChevronLeft size={16} />↔
                </button>
                <button 
                    className="grid-nav-arrow right" 
                    onClick={goToNext} 
                    disabled={currentPage === maxScroll}>
                    <FaChevronRight size={16}/>→
                </button>

            </div>
        </section>
    );
};

export default ProductCarouselGrid;