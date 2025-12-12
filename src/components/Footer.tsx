import React from 'react';
import "./Footer.css";
import { 
    FaPhone, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, 
    FaBuilding, FaMapMarkerAlt, FaNewspaper, FaRegEnvelope, FaShoppingBag, FaGift, 
    FaStar, FaTag, FaIndustry, FaUser, FaQuestionCircle, FaTruck, FaCreditCard, 
    FaFileAlt, FaLock, FaBullhorn, FaRegUser 
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
interface ListItemProps {
    Icon: React.ElementType;
    text: string;
}
const FooterListItem: React.FC<ListItemProps> = ({ Icon, text }) => (
    <li>
        <Icon size={14} className="list-icon" /> {text}
    </li>
);
export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("¡Suscripción registrada!");
    };
  return (
    <footer className="footer">
      {/* 💥 NUEVA FILA: BOLETÍN POR EMAIL */}
            <div className="top-footer-newsletter-row">
                <div className="container newsletter-container">
                    <span className="newsletter-label">Boletín por email</span>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input 
                            type="email" 
                            placeholder="Tu email" 
                            required 
                            className="newsletter-input" 
                        />
                        <button type="submit" className="newsletter-submit-btn">
                            Regístrame
                        </button>
                    </form>
                </div>
            </div>
      <div className="footer-social">
        <h3>Seguinos</h3>
        <div className="footer-social-icons">
          <FaWhatsapp />
          <FaPhone />
          <FaEnvelope />
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaYoutube />
          <MdLocationOn />
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-column">
          <h4><FaBuilding size={16} className="title-icon" /> Nosotros</h4>
          <ul>
            <FooterListItem Icon={FaBuilding} text="Empresa" />
            <FooterListItem Icon={FaMapMarkerAlt} text="Ubicación" />
            <FooterListItem Icon={FaNewspaper} text="Noticias" />
            <FooterListItem Icon={FaRegEnvelope} text="Contacto" />
          </ul>
        </div>
        <div className="footer-column">
          <h4><FaShoppingBag size={16} className="title-icon" /> Tienda</h4>
          <ul>
            <FooterListItem Icon={FaStar} text="Destacados" />
            <FooterListItem Icon={FaGift} text="Nuevos" />
            <FooterListItem Icon={FaTag} text="Ofertas" />
            <FooterListItem Icon={FaIndustry} text="Marcas" />
            <FooterListItem Icon={FaFileAlt} text="Venta por mayor" />
          </ul>
        </div>
        <div className="footer-column">
          <h4><FaQuestionCircle size={16} className="title-icon" /> Ayuda</h4>
          <ul>
            <FooterListItem Icon={FaQuestionCircle} text="Preguntas" />
            <FooterListItem Icon={FaTruck} text="Envíos" />
            <FooterListItem Icon={FaCreditCard} text="Formas de pago" />
            <FooterListItem Icon={FaFileAlt} text="Condiciones" />
            <FooterListItem Icon={FaLock} text="Privacidad" />
          </ul>
        </div>
        <div className="footer-column">
          <h4><FaUser size={16} className="title-icon" /> Mi cuenta</h4>
          <ul>
            <FooterListItem Icon={FaRegUser} text="Mi cuenta" />
            <FooterListItem Icon={FaBullhorn} text="Boletín" />
          </ul>
        </div>
        <div className="footer-info">
          <h4>PRO Accesorios - ProHome</h4>
          <div className="footer-info-row">
            <FaPhone />
            <span>2900 7264</span>
          </div>
          <div className="footer-info-row">
            <FaWhatsapp />
            <span>97 497 597</span>
          </div>
          <div className="footer-address">
            <MdLocationOn />
            <div>
              <p>Cerro Largo 1173 entre Av. Libertador y Cuareim</p>
              <p>Centro, Montevideo - Uruguay</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Respetamos su información personal. Sus datos personales le corresponden solo a usted y este sitio web es responsable de no revelar ninguna clase de información.
        </p>
        <p>
          Las imágenes son meramente ilustrativas, puede variar según la disponibilidad de stock.
        </p>
        <p>© Copyright 2025 PRO ACCESORIOS | HOME</p>
      </div>
    </footer>
  );
}