import React from 'react';
import './CategoryBar.css';
import { useLocation } from 'react-router-dom'; 
import { categories } from '../data/categories'; 

interface CategoryBarProps {
    isScrolled: boolean; 
}

const CategoryBar: React.FC<CategoryBarProps> = ({ isScrolled })=> {
    const location = useLocation(); 
    
    return (
        <nav className={`category-bar ${isScrolled ? 'sticky' : ''}`}>
            <div className="category-bar-inner container">
                {categories.map((category) => {
                
                    const isActive = location.pathname.startsWith(category.link);

                    return (
                        <a 
                            key={category.name} 
                            href={category.link} 
                            className={`category-link ${category.isSpecial ? 'special-offer' : ''} ${isActive ? 'active' : ''}`}
                        >
                            <category.IconComponent size={20} className="category-icon" /> 
                            <span className="category-name">{category.name}</span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};
export default CategoryBar;