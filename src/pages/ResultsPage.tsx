import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaTag, FaComment } from 'react-icons/fa';
import { ContactData } from '../types/ContactForm';
import { useTranslation } from 'react-i18next';
import './ResultsPage.css'; // Crear CSS en el siguiente paso

const ResultsPage: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();

    // 💥 OBTENER DATOS DEL ESTADO DE LA RUTA
    // Usamos el estado pasado desde navigate, si existe
    const submittedData: ContactData | undefined = location.state?.data;

    // Si no hay datos (ej. si el usuario navegó directamente), mostramos un error o redireccionamos
    if (!submittedData) {
        return (
            <main className="results-page-main container">
                <div className="results-error">
                    <h2>{t('resultsErrorTitle')}</h2>
                    <p>{t('resultsErrorMessage')}</p>
                    <Link to="/contacto" className="back-button">
                        {t('backToForm')}
                    </Link>
                </div>
            </main>
        );
    }

    const { name, email, phone, subject, message, newsletter, id } = submittedData;
    
    return (
        <main className="results-page-main container">
            <div className="results-card">
                <FaCheckCircle className="success-icon" />
                <h1 className="results-title">{t('resultsSuccessTitle')}</h1>
                <p className="results-subtitle">{t('resultsSuccessSubtitle')}</p>
                
                <div className="data-display">
                    
                    {/* ID de Referencia */}
                    <p className="reference-id"><strong>{t('referenceId')}:</strong> {id}</p>
                    
                    <h3>{t('submittedData')}</h3>
                    
                    <div className="data-item">
                        <FaUser /> <strong>{t('userName')}:</strong> {name}
                    </div>
                    <div className="data-item">
                        <FaEnvelope /> <strong>{t('email')}:</strong> {email}
                    </div>
                    {phone && (
                        <div className="data-item">
                            <FaPhone /> <strong>{t('phone')}:</strong> {phone}
                        </div>
                    )}
                    <div className="data-item">
                        <FaTag /> <strong>{t('subject')}:</strong> {subject || t('notSpecified')}
                    </div>
                    <div className="data-item message-content">
                        <FaComment /> <strong>{t('message')}:</strong> <p>{message}</p>
                    </div>
                    <div className="data-item newsletter-status">
                        <strong>{t('newsletterStatus')}:</strong> 
                        <span>{newsletter ? t('subscribed') : t('notSubscribed')}</span>
                    </div>
                </div>

                <Link to="/" className="back-button primary-button">
                    {t('backToHome')}
                </Link>
            </div>
        </main>
    );
};

export default ResultsPage;