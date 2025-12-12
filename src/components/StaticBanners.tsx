// src/components/StaticBanners.tsx (Versión corregida de la interfaz)
import React from 'react';
import './StaticBanners.css';

// 1. DEFINICIÓN DEL TIPO DE CADA BANNER
interface BannerItem {
    id: number;
    // Ahora 'title' es obligatorio (si lo pasas desde HomePage)
    title: string; 
    src: string;
    link: string;
    // Hacemos 'alt' opcional ya que no estaba en tus datos originales,
    // o lo eliminamos si siempre usas 'title' como alt
    alt?: string; 
}

// 2. DEFINICIÓN DE LAS PROPIEDADES QUE ESPERA EL COMPONENTE
// El componente ahora espera un array de BannerItem llamado 'banners'
interface StaticBannersProps {
    banners: BannerItem[];
}

// 3. ACTUALIZACIÓN DEL COMPONENTE: Aceptar 'banners' como prop
const StaticBanners: React.FC<StaticBannersProps> = ({ banners }) => {
    // Nota: Eliminamos el array local 'staticBanners' y usamos la prop 'banners'
    // que viene desde HomePage.tsx.

    return (
        <section className="static-banners-section container">
            <div className="banners-grid">
                {banners.map((banner) => ( // Usamos 'banners' aquí
                    <a key={banner.id} href={banner.link} className="banner-item">
                        <img src={banner.src} alt={banner.alt} loading="lazy" />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default StaticBanners;