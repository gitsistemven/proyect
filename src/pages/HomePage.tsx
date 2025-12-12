import React from 'react';
import HeroSection from '../components/HeroSection';
import StaticBanners from '../components/StaticBanners';
import ProductCarousel from '../components/ProductCarousel';
import ProductCarouselGrid from '../components/ProductCarouselGrid';
import StaticPromoBanners from '../components/StaticPromoBanners'; 
import InfoAndCategoryBlock from '../components/InfoAndCategoryBlock'; 
import FinalServiceAndNewsletter from '../components/FinalServiceAndNewsletter';
const staticBannersData = [
    { id: 1, title: "LAVADO Y LIMPIEZA", src: "/img/e1.png", link: "/lavado" },
    { id: 2, title: "COCCIÓN Y PREPARACIÓN", src: "/img/e2.png", link: "/coccion" },
    { id: 3, title: "ORGANIZACIÓN", src: "/img/e3.png", link: "/organizacion" }
];

const ProductsStatic = [
    { id: 1, name: 'Lámpara LED Vintage', price: 15.99, src: '/img/pr1.webp', oldPrice: null }, 
    { id: 2, name: 'Reflector Exterior 50W', price: 35.50, src: '/img/pr2.webp', oldPrice: 42.00 },
    { id: 3, name: 'Tira LED RGB 5m', price: 22.00, src: '/img/pr3.webp', oldPrice: null }, 
    { id: 4, name: 'Foco Inteligente WiFi', price: 18.99, src: '/img/pro4.webp', oldPrice: 25.00 } 
];
const lightingProducts = [
    { id: 1, name: 'Lámpara LED Vintage', price: 15.99, src: '/img/p1.webp', oldPrice: null }, 
    { id: 2, name: 'Reflector Exterior 50W', price: 35.50, src: '/img/p2.webp', oldPrice: 42.00 }, 
    { id: 3, name: 'Tira LED RGB 5m', price: 22.00, src: '/img/p3.webp', oldPrice: null }, 
    { id: 4, name: 'Foco Inteligente WiFi', price: 18.99, src: '/img/p4.webp', oldPrice: 25.00 }, 
    { id: 5, name: 'Aplique de Pared Moderno', price: 45.00, src: '/img/p5.webp', oldPrice: null }, 
    { id: 6, name: 'Luminaria de Techo Plana', price: 58.00, src: '/img/p6.webp', oldPrice: 65.00 }, 
    { id: 7, name: 'Aplique de Pared Moderno', price: 45.00, src: '/img/p7.webp', oldPrice: null }, 
    { id: 8, name: 'Luminaria de Techo Plana', price: 58.00, src: '/img/p8.webp', oldPrice: 65.00 },

];
const petProducts = [
    { id: 7, name: 'Cama Ortopédica para Perro', price: 49.99, src: '/img/pp1.webp', oldPrice: null }, // 💥 AÑADIDO oldPrice
    { id: 8, name: 'Comedero Automático', price: 30.00, src: '/img/pp2.webp', oldPrice: null }, // 💥 AÑADIDO oldPrice
    { id: 9, name: 'Juguete Interactivo Láser', price: 12.50, src: '/img/pp3.webp', oldPrice: 15.00 }, // 💥 AÑADIDO oldPrice
    { id: 10, name: 'Rascador para Gatos Grande', price: 65.00, src: '/img/pp4.webp', oldPrice: null }, // 💥 AÑADIDO oldPrice
    { id: 11, name: 'Correa Retráctil 5m', price: 20.00, src: '/img/pp5.webp', oldPrice: 28.00 }, // 💥 AÑADIDO oldPrice
    { id: 12, name: 'Bebedero Fuente Silenciosa', price: 38.00, src: '/img/pp6.webp', oldPrice: null }, // 💥 AÑADIDO oldPrice
];
const HomePage: React.FC = () => {
    return (
        <main className="page-content">
           
            <HeroSection /> 
            <StaticBanners banners={staticBannersData} /> 
            <ProductCarousel products={ProductsStatic} /> 
            <ProductCarouselGrid title="Iluminación" products={lightingProducts} />
            <ProductCarouselGrid title="Para tu mascota" products={petProducts} />
            <StaticPromoBanners /> 
            <InfoAndCategoryBlock /> 
            <FinalServiceAndNewsletter />
        </main>
    );
};
export default HomePage;