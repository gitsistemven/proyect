

import React, { useState } from "react";
import "./Header.css"; 
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { headerIcons } from '../data/headerIcons'; 
import ThemeToggle from './ThemeToggle';
import { FaEnvelope} from 'react-icons/fa'; 

interface HeaderProps {
    isScrolled: boolean; 
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false); 

    const contactText = "Contacto y Formulario"; 
    
    const mobileMenuItems = [
        
        { 
            id: 'mobile-contact',
            label: t('contactUs') || contactText, 
            link: '/contacto',
            IconComponent: FaEnvelope, 
            className: 'mobile-menu-link contact-highlight'
        },
        ...headerIcons.map(icon => ({
            ...icon,
            className: `mobile-menu-link ${icon.className || ''}`
        }))
    ];

    return (
        <header className={`site-header ${isScrolled ? 'hidden-on-scroll' : ''} ${open ? 'is-open' : ''}`}> 
            
            <div className="header-inner container">
                
                <div className="brand">
                    <a href="/" aria-label="Inicio">
                        <img src="/img/logo.svg" alt="PRO Accesorios" className="logo" />
                    </a>
                    <Link to="/contacto" className="contact-link">
                        {t('contactUs') || contactText} 
                    </Link>
                </div>

                <div className="search-bar-container">
                    <input 
                        type="text" 
                        placeholder={t('searchPlaceholder') || "🔍 Buscar..."} 
                        className="search-input" 
                    />
                    <button className="search-btn btn-reset" aria-label={t('searchPlaceholder') || "Buscar"}></button>
                </div>

                <div className="header-actions">
                    
                    {open && (
                        <nav className="mobile-nav-menu">
                            {mobileMenuItems.map((item) => (
                                <Link 
                                    key={item.id} 
                                    to={item.link} 
                                    className={item.className}
                                    onClick={() => setOpen(false)} 
                                >
                                    <item.IconComponent size={20} />
                                    <span>{item.label}</span>
                                    
                                   {(item as { count?: number }).count !== undefined && (item as { count?: number }).count! > 0 && (
                                        <span className="cart-count-mobile">{(item as { count?: number }).count}</span>
                                    )}
                                </Link>
                            ))}
                        </nav>
                    )}
                    
                    <ThemeToggle />
                    
                    {headerIcons.map((icon) => (
                      <a 
                        key={icon.id} 
                        href={icon.link} 
                        className={`action-icon-link ${icon.className || ''}`}
                        aria-label={icon.label}
                      >
                        <icon.IconComponent size={20} />
                        {icon.count !== undefined && icon.count > 0 && (
                          <span className="cart-count">{icon.count}</span>
                        )}
                      </a>
                    ))}
                    
                    <button
                      className={`hamburger btn-reset ${open ? "is-active" : ""}`}
                      onClick={() => setOpen(v => !v)}
                      aria-label="Abrir menú"
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;