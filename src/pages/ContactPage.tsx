import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaTag, FaPaperPlane } from 'react-icons/fa';
import { ContactData } from '../types/ContactForm';
import { useTranslation } from 'react-i18next';
import './ContactPage.css'; // Crear CSS en el siguiente paso

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<ContactData>({
        id: '', 
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false,
    });
    
    // Estado para manejar la validación/errores
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    // Estado para el mensaje de éxito (opcional)
    const [isSubmitted, setIsSubmitted] = useState(false); 

    // Función genérica para manejar cambios en los campos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        // Manejar checkbox de forma especial
        const newValue = type === 'checkbox' 
            ? (e.target as HTMLInputElement).checked 
            : value;

        setFormData(prevData => ({
            ...prevData,
            [name]: newValue,
        }));

        // Limpiar el error cuando el usuario comienza a escribir
        if (errors[name]) {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = t('validationNameRequired');
        if (!formData.email || !formData.email.includes('@')) newErrors.email = t('validationEmailInvalid');
        if (!formData.message) newErrors.message = t('validationMessageRequired');
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validate()) {
            const finalData: ContactData = {
                ...formData,
                id: Date.now().toString(), // Generar un ID único simple
            };

            // 💥 NAVEGACIÓN Y PASO DE DATOS
            // Pasamos los datos como estado de la ruta.
            navigate('/contacto/resultado', { state: { data: finalData } });
            
            // Si estuviéramos guardando en una API, la llamada iría aquí.
            setIsSubmitted(true);
        }
    };

    if (isSubmitted && !Object.keys(errors).length) {
        // En una app real, esto sería reemplazado por la redirección o un modal.
        // Como estamos redireccionando con navigate, este estado es solo para la lógica interna.
    }

    return (
        <main className="contact-page-main container">
            <h1 className="contact-title">{t('contactUs')}</h1>
            <p className="contact-subtitle">{t('contactInstructions')}</p>
            
            <form onSubmit={handleSubmit} className="contact-form-grid">
                
                {/* 1. Nombre Completo */}
                <div className="form-group span-2">
                    <label htmlFor="name"><FaUser /> {t('userName')}*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'input-error' : ''}
                        placeholder={t('placeholderName')}
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>

                {/* 2. Correo Electrónico */}
                <div className="form-group">
                    <label htmlFor="email"><FaEnvelope /> {t('email')}*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'input-error' : ''}
                        placeholder="ejemplo@correo.com"
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                {/* 3. Teléfono */}
                <div className="form-group">
                    <label htmlFor="phone"><FaPhone /> {t('phone')}</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('placeholderPhone')}
                    />
                </div>

                {/* 4. Asunto */}
                <div className="form-group span-2">
                    <label htmlFor="subject"><FaTag /> {t('subject')}</label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    >
                        <option value="">{t('selectSubject')}</option>
                        <option value="Consulta Producto">{t('subjectProduct')}</option>
                        <option value="Soporte Técnico">{t('subjectSupport')}</option>
                        <option value="Otros">{t('subjectOther')}</option>
                    </select>
                </div>

                {/* 5. Mensaje */}
                <div className="form-group span-2">
                    <label htmlFor="message"><FaPaperPlane /> {t('message')}*</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'input-error' : ''}
                        rows={5}
                        placeholder={t('placeholderMessage')}
                    />
                    {errors.message && <p className="error-message">{errors.message}</p>}
                </div>
                
                {/* 6. Checkbox de Newsletter */}
                <div className="form-group span-2 checkbox-group">
                    <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="newsletter">{t('subscribeNewsletter')}</label>
                </div>

                {/* 7. Botón de Envío */}
                <div className="form-group span-2 submit-group">
                    <button type="submit" className="submit-button">
                        {t('sendData')}
                    </button>
                </div>

            </form>
        </main>
    );
};

export default ContactPage;