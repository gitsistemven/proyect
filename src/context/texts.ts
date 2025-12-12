// src/context/texts.ts

import { Language } from './types';

// Estructura de textos: [key: string]: { es: string, en: string }
export const i18nTexts = {
    appName: {
        es: "Tienda React",
        en: "React Store"
    },
    searchPlaceholder: {
        es: "Buscar productos...",
        en: "Search products..."
    },
    filterButton: {
        es: "FILTRAR POR",
        en: "FILTER BY"
    },
    recentViews: {
        es: "Vistas recientes",
        en: "Recent views"
    },
    // Botones de Tema/Idioma
    toggleThemeLabel: {
        es: "Alternar Tema",
        en: "Toggle Theme"
    },
    languageLabel: {
        es: "Idioma",
        en: "Language"
    },
};

// Función para obtener los textos según el idioma
export const getTexts = (lang: Language) => {
    // Mapea la estructura plana a un objeto de strings para fácil acceso
    const translatedTexts: { [key: string]: string } = {};

    for (const key in i18nTexts) {
        // @ts-ignore: Acceso seguro a la propiedad de la estructura
        translatedTexts[key] = i18nTexts[key][lang];
    }
    
    return translatedTexts;
};