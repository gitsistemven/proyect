import React from 'react';
import './InfoBannersAndText.css';
// Puedes cambiar estos iconos por los que mejor se adapten a tus servicios
import { FaTruck, FaLock, FaCreditCard } from 'react-icons/fa'; 

// --- Datos de los 3 Servicios/Banners ---
const serviceBanners = [
    {
        icon: FaTruck,
        title: "ENVÍOS EN 24HS",
        description: "Recibe tu pedido en menos de un día hábil en Montevideo.",
    },
    {
        icon: FaLock,
        title: "COMPRA SEGURA",
        description: "Tus datos están protegidos por encriptación de alto nivel.",
    },
    {
        icon: FaCreditCard,
        title: "HASTA 12 PAGOS",
        description: "Financia tus compras con las principales tarjetas de crédito.",
    },
];

const InfoBannersAndText: React.FC = () => {
    return (
        <section className="info-banners-section">
            <div className="container">
                
                {/* PARTE 1: BLOQUE DE 3 BANNERS DE SERVICIO */}
                <div className="service-banners-grid">
                    {serviceBanners.map((service, index) => (
                        <div key={index} className="service-item">
                            {/* Renderiza el Icono */}
                            <service.icon size={40} className="service-icon" />
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default InfoBannersAndText;