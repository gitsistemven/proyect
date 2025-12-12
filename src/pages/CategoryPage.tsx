import React from 'react';
import './CategoryPage.css';
import { useParams } from 'react-router-dom';

import InfoAndCategoryBlock from '../components/InfoAndCategoryBlock';
import SidebarMenu from '../components/SidebarMenu'; 
import ProductGridCatalog from '../components/ProductGridCatalog';

import { subcategoryData, CategorySidebarData } from '../data/subcategories'; 

interface Product {
    id: number;
    name: string;
    price: number;
    src: string;
    oldPrice: number | null; 
}

interface RelatedLink {
    label: string;
    link: string;
}


const bedroomProducts = [
    { id: 101, name: 'Set de Sábanas King Size', price: 55.00, src: '/img/d1.webp', oldPrice: null }, 
    { id: 102, name: 'Velador de Mesa Industrial', price: 28.50, src: '/img/d2.webp', oldPrice: 35.00 }, // Ejemplo con descuento
    { id: 103, name: 'Almohada Viscoelástica Premium', price: 42.00, src: '/img/d3.webp', oldPrice: null },
    { id: 104, name: 'Acolchado de Plumas Matrimonial', price: 89.90, src: '/img/d4.webp', oldPrice: 99.90 }, // Ejemplo con descuento
    { id: 105, name: 'Alfombra Suave Nórdica', price: 35.00, src: '/img/d5.webp', oldPrice: null },
    { id: 106, name: 'Espejo de Pie Grande', price: 110.00, src: '/img/d6.webp', oldPrice: null },
];
const officeProducts = [
    { id: 201, name: 'Silla Ergonómica Ejecutiva', price: 150.00, src: '/img/o1.webp', oldPrice: 180.00 },
    { id: 202, name: 'Escritorio Moderno de Melamina', price: 95.00, src: '/img/o2.webp', oldPrice: null },
    { id: 203, name: 'Lámpara de Escritorio LED', price: 35.00, src: '/img/o3.webp', oldPrice: 45.00 },
    { id: 204, name: 'Organizador de Documentos Metálico', price: 15.00, src: '/img/o4.webp', oldPrice: null },
];
const healthBeautyProducts = [
    { id: 301, name: 'Cepillo Eléctrico Sónico', price: 45.00, src: '/img/s1.webp', oldPrice: 60.00 },
    { id: 302, name: 'Set de Masajeador Facial Jade', price: 18.00, src: '/img/s2.webp', oldPrice: null },
    { id: 303, name: 'Secador de Pelo Profesional 2000W', price: 75.00, src: '/img/s3.webp', oldPrice: 90.00 },
    { id: 304, name: 'Kit de Manicura y Pedicura', price: 29.50, src: '/img/s4.webp', oldPrice: null },
    { id: 305, name: 'Balanzas Digital de Baño', price: 22.00, src: '/img/s5.webp', oldPrice: null },
    { id: 306, name: 'Espejo de Aumento con LED', price: 19.90, src: '/img/s6.webp', oldPrice: 25.00 },
];

const hardwareProducts = [
    { id: 401, name: 'Taladro Percutor 850W', price: 70.00, src: '/img/f1.webp', oldPrice: 95.00 },
    { id: 402, name: 'Set de 50 Puntas y Destornilladores', price: 25.00, src: '/img/f2.webp', oldPrice: null },
    { id: 403, name: 'Caja de Herramientas Plástica', price: 30.00, src: '/img/f3.webp', oldPrice: null },
    { id: 404, name: 'Guantes de Seguridad Reforzados', price: 12.00, src: '/img/s4.webp', oldPrice: null },
    { id: 405, name: 'Candado de Alta Seguridad', price: 18.00, src: '/img/s4.webp', oldPrice: null },
    { id: 406, name: 'Linterna LED Recargable', price: 22.00, src: '/img/s5.webp', oldPrice: 28.00 },
    { id: 407, name: 'Linterna LED Recargable', price: 22.00, src: '/img/s6.webp', oldPrice: 28.00 },
];



const relatedLinksMap: { [key: string]: RelatedLink[] } = {
    'dormitorio': [
        { label: "Sábanas", link: "/catalogo/dormitorio/sabanas" },
        { label: "Almohadas", link: "/catalogo/dormitorio/almohadas" },
        { label: "Camas", link: "/catalogo/dormitorio/camas" },
    ],
    'oficina': [
        { label: "Escritorios", link: "/catalogo/oficina/escritorios" },
        { label: "Sillas Ergonómicas", link: "/catalogo/oficina/sillas" },
        { label: "Archiveros", link: "/catalogo/oficina/archiveros" },
    ],
    'salud-y-belleza': [
        { label: "Cuidado Facial", link: "/catalogo/salud-y-belleza/facial" },
        { label: "Masajeadores", link: "/catalogo/salud-y-belleza/masaje" },
        { label: "Balanzas", link: "/catalogo/salud-y-belleza/balanzas" },
    ],
    'ferreteria': [
        { label: "Herramientas Eléctricas", link: "/catalogo/ferreteria/electricas" },
        { label: "Seguridad", link: "/catalogo/ferreteria/seguridad" },
        { label: "Manuales", link: "/catalogo/ferreteria/manuales" },
    ],
};

const CategoryPage: React.FC = () => {
    const { category } = useParams<{ category: string }>(); 
    
    let currentProducts: Product[] = []; 
    let pageTitle = "Catálogo";
    
    let sidebarContent: CategorySidebarData = { title: category || "", subcategories: [] }; 
    let relatedLinks: RelatedLink[] = [];

    // Lógica de selección de datos para la cuadrícula
    switch (category) {
        case 'dormitorio':
            currentProducts = bedroomProducts;
            pageTitle = "Catálogo: Dormitorio";
            break;
        case 'oficina':
            currentProducts = officeProducts;
            pageTitle = "Catálogo: Oficina y Papelería";
            break;
        case 'salud-y-belleza':
            currentProducts = healthBeautyProducts;
            pageTitle = "Catálogo: Salud y Belleza";
            break;
        case 'ferreteria':
            currentProducts = hardwareProducts;
            pageTitle = "Catálogo: Ferretería";
            break;
        default:
            pageTitle = "Categoría no encontrada";
            break;
    }
    

    sidebarContent = subcategoryData[category || ''] || sidebarContent;
    relatedLinks = relatedLinksMap[category || ''] || [];


    return (
        <main className="category-page-main container">
            
            <div className="category-layout-grid">
                
                <aside className="category-sidebar">
                    <SidebarMenu 
                        title={sidebarContent.title} 
                        subcategories={sidebarContent.subcategories} 
                    />
                </aside>

                <section className="category-content">
                    <h1>{pageTitle}</h1> 
                    <ProductGridCatalog products={currentProducts} />
                </section>

            </div>
            
            <InfoAndCategoryBlock 
                category={category || ''} 
                relatedLinks={relatedLinks} 
            />

        </main>
    );
};
export default CategoryPage;