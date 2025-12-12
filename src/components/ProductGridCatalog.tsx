import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductGridCatalog.css';

interface Product {
    id: number;
    name: string;
    price: number;
    src: string;
    // 💥 Añadimos oldPrice para consistencia con los datos de HomePage
    oldPrice: number | null;// Lo hacemos opcional por si no todos los productos tienen oferta
}
interface ProductGridCatalogProps {
    products: Product[];
}
const ProductGridCatalog: React.FC<ProductGridCatalogProps> = ({ products }) => {
    return (
        <div className="product-catalog-grid">
            {products.map(product => (
                <div key={product.id} className="catalog-product-card">
                    <a href={`/producto/${product.id}`} className="product-link">
                        <img src={product.src} alt={product.name} loading="lazy" />
                        
                        <div className="catalog-product-info">
                            <span className="catalog-product-name">{product.name}</span>
                            
                            {/* Opcionalmente mostrar el precio anterior si existe */}
                            {product.oldPrice && (
                                <span className="catalog-old-price">U$S {product.oldPrice.toFixed(2)}</span>
                            )}
                            
                            <span className="catalog-product-price">U$S {product.price.toFixed(2)}</span>
                        </div>
                    </a>
                    
                    <button className="add-to-cart-btn" aria-label="Añadir al carrito">
                        <FaShoppingCart size={18} /> Comprar
                    </button>
                </div>
            ))}
        </div>
    );
};
export default ProductGridCatalog;