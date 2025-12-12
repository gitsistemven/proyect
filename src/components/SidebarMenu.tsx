// src/components/SidebarMenu.tsx

import React from 'react';
import './SidebarMenu.css';
import { useTranslation } from 'react-i18next';
import { FaFilter, FaHome } from 'react-icons/fa';
interface Subcategory {
    label: string;
    link: string;
}

interface SidebarMenuProps {
    title: string; 
    subcategories: Subcategory[]; 
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ title, subcategories }) => {
    const { t } = useTranslation(); 
    const categorySlug = title.toLowerCase().replace(/ /g, '-');
    
    return (
        <div className="sidebar-menu">
            <h3 className="sidebar-title">
                <a href={`/catalogo/${title.toLowerCase().replace(/ /g, '-')}`}>
                    <FaHome size={20} className="title-icon" />{title}
                </a>
            </h3>

            <ul className="subcategory-list">
                {subcategories.map((item, index) => (
                    <li key={index} className="subcategory-item">
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>

            <div className="filter-section">
                <button className="filter-button">
                    {t('filterButton')} <FaFilter size={14} /> 
                </button>
            </div>
            
            {/* Aquí podrían ir otros filtros (precio, color, marca) */}
        </div>
    );
};

export default SidebarMenu;