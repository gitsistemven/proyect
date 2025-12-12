// src/components/ThemeToggle.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
// Asegúrate de importar tu contexto de tema
import { useTheme } from '../context/ThemeContext'; 
import './ThemeToggle.css'; // 💥 CLAVE: ¡Importar el CSS!

const ThemeToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    const currentLang = i18n.language;

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        // 💥 Este es el contenedor FLEX principal
        <div className="theme-lang-controls">
            
            {/* 1. Selector de Idioma (Agrupado) */}
            <div className="language-switcher">
                <button
                    className={currentLang === 'es' ? 'active' : ''}
                    onClick={() => changeLanguage('es')}
                >
                    ES
                </button>
                <span className="separator">|</span>
                <button
                    className={currentLang === 'en' ? 'active' : ''}
                    onClick={() => changeLanguage('en')}
                >
                    EN
                </button>
            </div>

            {/* 2. Botón de Tema */}
            <button 
                className="theme-toggle-btn" 
                onClick={toggleTheme}
                aria-label="Cambiar tema"
            >
                {/* Usamos iconos de texto o de librería, dependiendo de tu setup */}
                {theme === 'light' ? '🌙' : '☀️'}
            </button>

        </div>
    );
};

export default ThemeToggle;