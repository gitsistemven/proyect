import React from 'react';
import './StaticPromoBanners.css';
const promoBanners = [
    {
        id: 1,
        src: "/img/h1.png", 
        link: "/outlet"
    },
    {
        id: 2,
        src: "/img/h2.png", 
        link: "/hogar"
    },
    {
        id: 3,
        src: "/img/h3.png", 
        link: "/petshop"
    },
];
const StaticPromoBanners: React.FC = () => {
    return (
        <section className="promo-banners-section container">
            <div className="banners-container-grid">
                {promoBanners.map(banner => (
                    <a key={banner.id} href={banner.link} className="promo-card">
                        <img src={banner.src} loading="lazy" />
                    </a>
                ))}
            </div>
            <div className="pro-home-text-block">
                    <h2>PRO HOME</h2>
                    <p>Contamos con una amplia variedad de productos, de consumo cotidiano, decorativos o de uso doméstico.</p>
                </div>
        </section>
    );
};
export default StaticPromoBanners;