import React, { useState, useEffect } from 'react';
import './ProductCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// 1. DEFINICIÓN DEL TIPO DE UN PRODUCTO
interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice: number | null; // Incluye oldPrice, ya que lo usas en el ejemplo
    src: string;
}

// 2. DEFINICIÓN DE LAS PROPIEDADES QUE ESPERA EL COMPONENTE
interface ProductCarouselProps {
    products: Product[]; // Array de productos (que se pasa desde HomePage)
    title?: string;      // Asumo que podrías querer un título, lo hacemos opcional
}

const ITEMS_PER_PAGE = 2;

// 3. ACTUALIZACIÓN DEL COMPONENTE: Aceptar 'products' como prop
const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title }) => {
    
    // 💥 AHORA USAMOS 'products' EN LUGAR DE 'featuredProducts'
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    
    const [currentPage, setCurrentPage] = useState(0);

    // Mantenemos la lógica de paginación
    const paginatedProducts = Array.from({ length: totalPages }, (_, pageIndex) => {
        const start = pageIndex * ITEMS_PER_PAGE;
        return products.slice(start, start + ITEMS_PER_PAGE);
    });

    const goNext = () => setCurrentPage(prev => (prev + 1) % totalPages);
    const goPrev = () => setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    
    // Autoplay, solo si hay más de una página
    useEffect(() => {
        if (totalPages > 1) {
            const autoplay = setInterval(goNext, 4500);
            return () => clearInterval(autoplay);
        }
    }, [totalPages, goNext]); // Incluimos dependencias para useEffect
    
    return (
        <section className="product-carousel container">
            {/* Opcionalmente muestra el título */}
            {title && <h2 className="carousel-title">{title}</h2>}
            
            <div className="carousel">
                {/* Track */}
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                    {paginatedProducts.map((page, pageIndex) => (
                        <div className="carousel-page" key={pageIndex}>
                            {page.map(product => (
                                <div className="product-item" key={product.id}>
                                    <div className="product-image">
                                        <img src={product.src} alt={product.name} />
                                    </div>
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                        <div className="prices">
                                            {/* Manejo de precio anterior/oferta */}
                                            {product.oldPrice && 
                                                <p className="old-price">${product.oldPrice.toFixed(2)}</p>
                                            }
                                            <p className="price">${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                
                {/* Botones de navegación solo si hay más de una página */}
                {totalPages > 1 && (
                    <>
                        <button className="nav-btn left" onClick={goPrev} aria-label="Anterior">
                            <FaChevronLeft size={16} />
                        </button>
                        <button className="nav-btn right" onClick={goNext} aria-label="Siguiente">
                            <FaChevronRight size={16} />
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};
export default ProductCarousel;
