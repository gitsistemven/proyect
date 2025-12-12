// src/contexts/ThemeContext.tsx

import React, { createContext, useState, useEffect, useContext } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// El Provider que envuelve toda la App en App.tsx
export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Cargar tema desde localStorage o usar 'light' por defecto
    return (localStorage.getItem('theme') as Theme) || 'light';
  });

  useEffect(() => {
    // Aplicar la clase de tema al cuerpo del documento (ej: 'theme-light' o 'theme-dark')
    document.body.className = `theme-${theme}`; 
    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// El hook personalizado que usarán los componentes para consumir el tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Error de seguridad si el hook se usa fuera del Provider
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};