// src/App.tsx

import './i18n'; // 💥 1. Importar la configuración de i18next (IMPORTANTE)
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext'; // 💥 2. Importar ThemeProvider y useTheme
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryBar from './components/CategoryBar';

// Importaciones de Páginas (Asegúrate de que existan)
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import ResultsPage from './pages/ResultsPage';

// -----------------------------------------------------------
// 1. AppContent: Componente principal con rutas y uso de contexto
// -----------------------------------------------------------

const AppContent: React.FC = () => {
    // Usamos useLocation para saber si estamos en la raíz (simulando un scroll-down)
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    
    // NOTA: El tema se aplica directamente al 'body' en ThemeContext.tsx.
    // Aquí solo necesitamos la clase 'app-container' para el diseño interno.
    
    // Lógica de scroll/fijación del Header
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Aplicar clase del tema al contenedor principal (opcional si ya está en body)
    // Pero si quieres aislar los estilos del AppContainer:
    // const { theme } = useTheme(); 
    // const appClass = `app-container theme-${theme}`;

    return (
        <div className="app-container"> 
            <Header isScrolled={isScrolled} />
            
            {/* Solo mostramos CategoryBar en la página de inicio o categorías */}
            {location.pathname === '/' || location.pathname.startsWith('/catalogo') ? (
                <CategoryBar isScrolled={isScrolled} />
            ) : null}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalogo/:category" element={<CategoryPage />} />
                
                {/* RUTAS DEL FORMULARIO (Punto G) */}
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/contacto/resultado" element={<ResultsPage />} />
                
                <Route path="*" element={<h1>404 - Página No Encontrada</h1>} />
            </Routes>
            <Footer />
        </div>
    );
};

// -----------------------------------------------------------
// 2. App: Componente Raíz con Providers
// -----------------------------------------------------------

const App: React.FC = () => {
    return (
        <Router>
            {/* 💥 ThemeProvider envuelve toda la aplicación */}
            <ThemeProvider> 
                <AppContent /> 
            </ThemeProvider>
        </Router>
    );
};
export default App;