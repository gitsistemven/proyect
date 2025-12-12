import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
    es: {
        translation: {
            appName: "Tienda React",
            searchPlaceholder: "Buscar productos...",
            recentViews: "Vistas recientes",
            filterButton: "FILTRAR POR",
            toggleThemeLabel: "Alternar Tema",
            languageLabel: "Idioma",
            contactUs: "Contacto y Formulario",
            contactInstructions: "Complete el siguiente formulario y nos pondremos en contacto con usted.",
            sendData: "Enviar Consulta",
            userName: "Nombre Completo",
            email: "Correo Electrónico",
            phone: "Teléfono",
            subject: "Asunto",
            message: "Mensaje/Comentario",
            selectSubject: "Seleccione un asunto",
            subjectProduct: "Consulta Producto",
            subjectSupport: "Soporte Técnico",
            subjectOther: "Otros",
            subscribeNewsletter: "Deseo suscribirme al boletín de noticias",
            placeholderName: "Ej: Juan Pérez",
            placeholderPhone: "Ej: +56 9 1234 5678",
            placeholderMessage: "Escriba su mensaje aquí...",
            
            // --- CLAVES DE VALIDACIÓN ---
            validationNameRequired: "El nombre es obligatorio.",
            validationEmailInvalid: "Introduzca un correo electrónico válido.",
            validationMessageRequired: "El mensaje es obligatorio.",
            
            // --- CLAVES DE RESULTADOS ---
            resultsSuccessTitle: "¡Formulario Enviado con Éxito!",
            resultsSuccessSubtitle: "A continuación, se muestra la información que hemos recibido.",
            submittedData: "Datos Enviados",
            referenceId: "ID de Referencia",
            notSpecified: "No especificado",
            newsletterStatus: "Suscripción al Boletín",
            subscribed: "Suscrito",
            notSubscribed: "No Suscrito",
            resultsErrorTitle: "Error al cargar datos",
            resultsErrorMessage: "No se encontraron datos de envío. Por favor, regrese al formulario.",
            backToForm: "Volver al Formulario",
            backToHome: "Volver a Inicio",
        }
    },
    // Inglés (en)
    en: {
        translation: {
            // --- GENERAL AND NAVIGATION ---
            appName: "React Store",
            searchPlaceholder: "Search products...",
            recentViews: "Recent views",

            // --- SIDEBAR ---
            filterButton: "FILTER BY",

            // --- THEME AND LANGUAGE (For ThemeAndLanguageSwitcher) ---
            toggleThemeLabel: "Toggle Theme",
            languageLabel: "Language",

            // --- FORM AND CONTACT KEYS ---
            contactUs: "Contact and Form",
            contactInstructions: "Please complete the following form and we will contact you.",
            sendData: "Send Query",
            userName: "Full Name",
            email: "Email Address",
            phone: "Phone",
            subject: "Subject",
            message: "Message/Comment",
            selectSubject: "Select a subject",
            subjectProduct: "Product Inquiry",
            subjectSupport: "Technical Support",
            subjectOther: "Other",
            subscribeNewsletter: "I wish to subscribe to the newsletter",
            placeholderName: "Ex: John Smith",
            placeholderPhone: "Ex: +1 555 123 4567",
            placeholderMessage: "Type your message here...",

            // --- VALIDATION KEYS ---
            validationNameRequired: "Name is required.",
            validationEmailInvalid: "Please enter a valid email address.",
            validationMessageRequired: "Message is required.",

            // --- RESULTS KEYS ---
            resultsSuccessTitle: "Form Submitted Successfully!",
            resultsSuccessSubtitle: "Below is the information we have received.",
            submittedData: "Submitted Data",
            referenceId: "Reference ID",
            notSpecified: "Not specified",
            newsletterStatus: "Newsletter Subscription",
            subscribed: "Subscribed",
            notSubscribed: "Not Subscribed",
            resultsErrorTitle: "Error loading data",
            resultsErrorMessage: "No submission data found. Please return to the form.",
            backToForm: "Back to Form",
            backToHome: "Back to Home",
        }
    }
};

// 2. Inicialización de i18next
i18n
.use(LanguageDetector)
 .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es", // Si el idioma detectado no está disponible, usa español
    debug: false,
    // La clave de traducción por defecto es 'translation'
    ns: ['translation'],
    defaultNS: 'translation',
    
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;