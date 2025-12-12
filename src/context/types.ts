// src/context/types.ts (MODIFICADO)

export type Theme = 'light' | 'dark';
export type Language = 'es' | 'en';

// Interfaz del Contexto
export interface AppContextType {
    theme: Theme;
    language: Language;
    toggleTheme: () => void;
    setLanguage: (lang: Language) => void;
    // 💥 ELIMINAMOS: texts: { [key: string]: string };
}