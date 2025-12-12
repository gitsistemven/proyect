import React from 'react';
import './FinalServiceAndNewsletter.css';
import { FaTruck, FaCreditCard, FaBoxOpen } from 'react-icons/fa';

const serviceBanners = [
    {
        icon: FaTruck,
        title: "Envíos Rápidos",
        subtitle: "A todo el país",
    },
    {
        icon: FaCreditCard,
        title: "Hasta 12 Pagos",
        subtitle: "Con Oca, Visa, Master y Líder",
    },
    {
        icon: FaBoxOpen,
        title: "Distribuidores",
        subtitle: "Venta por mayor",
    },
];
const FinalServiceAndNewsletter: React.FC = () => {
    return (
        <section className="final-service-newsletter-section">
                        <div className="top-service-row">
                <div className="container service-grid-container">
                    {serviceBanners.map((service, index) => (
                        <div key={index} className="service-banner-item">
                            <div className="service-icon-circle">
                                <service.icon size={50} className="service-icon" />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-subtitle">{service.subtitle}</p>
                            <button className="ver-mas-btn">ver más...</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FinalServiceAndNewsletter;