
import { IconType } from 'react-icons';
import { FaToilet, FaBed, FaEnvelope, FaTools, FaLightbulb, FaPaw, FaTshirt, FaStar, FaChild, FaCalendarDay } from 'react-icons/fa'; // Ejemplos

interface Category {
  name: string;
  link: string;
  IconComponent: IconType; // Agregamos el Icono
  isSpecial?: boolean;
}

export const categories: Category[] = [
  { 
        name: "CONTACTO Y FORMULARIO", 
        link: "/catalogo/contacto", 
        IconComponent: FaEnvelope, // Usamos un icono de sobre
    },
  { name: "DORMITORIO", link: "/catalogo/dormitorio", IconComponent: FaBed },
  { name: "FERRETERIA", link: "/catalogo/ferreteria", IconComponent: FaTools },
  { name: "OFICINA Y PAPELERIA", link: "/catalogo/oficina", IconComponent: FaTshirt },
  { name: "SALUD Y BELLEZA", link: "/catalogo/salud-y-belleza", IconComponent: FaBed }, // Suponiendo FaHeart de tu lista anterior
  { name: "OFERTAS", link: "/ofertas", IconComponent: FaStar, isSpecial: true },
];