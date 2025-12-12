import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaTruck } from 'react-icons/fa';
import './ProductInfoAndActions.css';

interface ProductInfoAndActionsProps {
    product: {
        name: string;
        price: number;
        oldPrice?: number | null;
        brand: string;
        stock: number;
    };
}

const ProductInfoAndActions: React.FC<ProductInfoAndActionsProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    
    const handleAddToCart = () => {
        alert(`Añadido ${quantity}x ${product.name} al carrito.`);
    };

    return (
        <div className="product-info-actions">
            
            <h1 className="product-title">{product.name}</h1>
            <p className="product-brand">Marca: <strong>{product.brand}</strong></p>

            {/* Bloque de Precio */}
            <div className="price-block">
                {product.oldPrice && (
                    <span className="old-price">U$S {product.oldPrice.toFixed(2)}</span>
                )}
                <span className="current-price">U$S {product.price.toFixed(2)}</span>
            </div>
            
            {/* Opciones de Variantes (simulado) */}
            <div className="variants-section">
                <label>Color:</label>
                <select className="variant-select">
                    <option>Blanco</option>
                    <option>Gris Perla</option>
                </select>
                <label>Tamaño:</label>
                <select className="variant-select">
                    <option>King Size</option>
                    <option>Queen Size</option>
                </select>
            </div>

            {/* Acciones (Cantidad y Botones) */}
            <div className="actions-section">
                <input 
                    type="number" 
                    min="1" 
                    max={product.stock} 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="quantity-input"
                />
                
                <button 
                    className="btn-add-to-cart" 
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                >
                    <FaShoppingCart size={20} /> Añadir al Carrito
                </button>
                
                <button className="btn-wishlist" aria-label="Añadir a favoritos">
                    <FaHeart size={20} />
                </button>
            </div>

            {/* Información de Stock y Envío */}
            <div className="stock-delivery-info">
                <p className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
                    {product.stock > 0 ? `Stock: ${product.stock} unidades` : 'Agotado'}
                </p>
                <p className="delivery-info">
                    <FaTruck /> Envío rápido a todo el país.
                </p>
            </div>

        </div>
    );
};

export default ProductInfoAndActions;