import React, { useState } from 'react';
import './ProductImageGallery.css';

interface ProductImageGalleryProps {
    images: string[];
    name: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, name }) => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="product-gallery">
            {/* Imagen Principal */}
            <div className="main-image-container">
                <img src={mainImage} alt={`Imagen principal de ${name}`} className="main-image" />
            </div>
            
            {/* Miniaturas */}
            <div className="thumbnail-grid">
                {images.map((imgSrc, index) => (
                    <div 
                        key={index}
                        className={`thumbnail-item ${imgSrc === mainImage ? 'active' : ''}`}
                        onClick={() => setMainImage(imgSrc)}
                    >
                        <img src={imgSrc} alt={`${name} - vista ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageGallery;