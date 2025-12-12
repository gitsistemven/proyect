import React from 'react';
import './InfoAndCategoryBlock.css'; 

interface RelatedLink {
    label: string;
    link: string;
}

interface InfoAndCategoryBlockProps {
    category?: string; 
    relatedLinks?: RelatedLink[]; 
}
const circularItems = [
    { id: 1, src: "/img/ph.png", alt: "PRO HOME", link: "/home" },
    { id: 2, src: "/img/ps.png", alt: "PRO SPORT", link: "/sport" },
    { id: 3, src: "/img/pt.png", alt: "PRO TECH", link: "/tech" },
];
const InfoAndCategoryBlock: React.FC<InfoAndCategoryBlockProps> = ({ 
    category = "General", 
    relatedLinks = [] 
}) => {    return (
        <section className="info-category-block-section">
            <div className="container">
                <div className="circular-banners-grid">
                    {circularItems.map(item => (
                        <a key={item.id} href={item.link} className="circular-item">
                            <div className="circular-image-wrapper">
                                <img src={item.src} alt={item.alt} loading="lazy" />
                            </div>
                        </a>
                    ))}
                </div>
                <div className="payment-logo-banner">
                    <img 
                        src="/img/b.png" 
                        alt="Métodos de pago aceptados y logos de bancos" 
                        className="payment-logo-img" 
                    />
                </div>
                <div className="recent-views-section">
                <p className="divider-text">Vistas recientes</p>
                <div className="recent-links">
                    <p className="divider-text">Vistas recientes</p>
                <div className="recent-links">
                    {relatedLinks.length > 0 ? (
                        relatedLinks.map((item, index) => (
                            <a key={index} href={item.link} className="recent-link">
                                {item.label}
                            </a>
                        ))
                    ) : (
                        <p className="no-recent-views">No hay vistas recientes disponibles.</p>
                    )}
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};
export default InfoAndCategoryBlock;