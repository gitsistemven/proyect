import React from 'react';
import { useParams } from 'react-router-dom';
import ProductImageGallery from '../components/ProductImageGallery'; // 💥 NUEVO COMPONENTE
import ProductInfoAndActions from '../components/ProductInfoAndActions'; // 💥 NUEVO COMPONENTE
import './ProductDetailPage.css';

// --- Interfaz de Producto (Debe coincidir con la de ProductGridCatalog) ---
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    oldPrice?: number | null;
    images: string[]; // Lista de URLs de imágenes
    brand: string;
    stock: number;
}

// --- Datos de Producto Mockeados (Simulación de Fetch de datos) ---
const mockProduct: Product = {
    id: 123,
    name: 'Set de Sábanas King Size Algodón Premium 400 Hilos',
    description: 'Experimenta la máxima comodidad con nuestro juego de sábanas King Size. Hechas de algodón egipcio de 400 hilos, garantizan suavidad y durabilidad. Incluye sábana encimera, sábana bajera ajustable y dos fundas de almohada.',
    price: 79.99,
    oldPrice: 109.99,
    images: [
        '/img/producto/sabana_main.jpg',
        '/img/producto/sabana_detail1.jpg',
        '/img/producto/sabana_detail2.jpg',
        '/img/producto/sabana_detail3.jpg',
    ],
    brand: 'HomeComfort',
    stock: 15,
};

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Obtiene el ID de la URL
    // En un proyecto real, aquí harías un fetch(`API/products/${id}`)
    const product = mockProduct; 
    
    if (!product) {
        return <main className="product-detail-page container">Producto no encontrado.</main>;
    }

    return (
        <main className="product-detail-page container">
            
            <div className="product-detail-grid">
                
                {/* 1. Galería de Imágenes (Izquierda) */}
                <div className="image-column">
                    <ProductImageGallery images={product.images} name={product.name} />
                </div>
                
                {/* 2. Información y Compra (Derecha) */}
                <div className="info-column">
                    <ProductInfoAndActions product={product} />
                </div>

            </div>
            
            {/* Sección de productos relacionados o descripción larga */}
            <div className="product-long-description">
                <h2>Descripción del Producto</h2>
                <p>{product.description}</p>
            </div>
            
        </main>
    );
};

export default ProductDetailPage;