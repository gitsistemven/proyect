import { IconType } from 'react-icons';
import { FaUser, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa'; 
import { IoMailOutline } from 'react-icons/io5';
import { FaTiktok } from 'react-icons/fa6';

interface HeaderIcon {
  id: number;
  IconComponent: IconType;
  label: string;
  link: string;
  isButton?: boolean;
  className?: string;
  count?: number; 
}

export const headerIcons: HeaderIcon[] = [
  { id: 1, IconComponent: FaMapMarkerAlt, label: "Sucursales", link: "/sucursales" },
  { id: 2, IconComponent: IoMailOutline, label: "Contacto", link: "https://wa.me/..." },
  { id: 3, IconComponent: FaWhatsapp, label: "Whatsapp", link: "/Whatsapp" },
  { id: 4, IconComponent: FaInstagram, label: "Instagram", link: "/Instagram.com" },
  { id: 5, IconComponent: FaFacebook, label: "Facebook", link: "/facebook.com" },
  { id: 6, IconComponent: FaYoutube, label: "Youtube", link: "/youtube.com" },
  { id: 7, IconComponent: FaLinkedin, label: "WWW.linkedin", link: "/company" },
  { id: 8, IconComponent: FaTiktok, label: "Carrito", link: "/carrito", isButton: true},
  { id: 9, IconComponent: FaUser, label: "Usuario", link: "/login", isButton: true, className: 'user-icon' }
  
];