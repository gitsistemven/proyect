export interface Subcategory {
    label: string;
    link: string;
}

export interface CategorySidebarData {
    title: string;
    subcategories: Subcategory[];
}
export const subcategoryData: { [key: string]: CategorySidebarData } = {
    'dormitorio': {
        title: "DORMITORIO",
        subcategories: [
            { label: "Sábanas", link: "/catalogo/dormitorio/sabanas" },
            { label: "Acolchados", link: "/catalogo/dormitorio/acolchados" },
            { label: "Almohadas", link: "/catalogo/dormitorio/almohadas" },
            { label: "Camas y Sommiers", link: "/catalogo/dormitorio/camas" },
            { label: "Organizadores", link: "/catalogo/dormitorio/organizadores" },
            { label: "Accesorios", link: "/catalogo/dormitorio/accesorios" },
        ],
    },
    'oficina': {
        title: "OFICINA Y PAPELERÍA",
        subcategories: [
            { label: "Sillas Ergonómicas", link: "/catalogo/oficina/sillas" },
            { label: "Escritorios", link: "/catalogo/oficina/escritorios" },
            { label: "Archiveros y Cajoneras", link: "/catalogo/oficina/archiveros" },
            { label: "Iluminación de Escritorio", link: "/catalogo/oficina/iluminacion" },
            { label: "Accesorios y Organización", link: "/catalogo/oficina/accesorios" },
        ],
    },
    'salud-y-belleza': {
        title: "SALUD Y BELLEZA",
        subcategories: [
            { label: "Cuidado Facial", link: "/catalogo/salud-y-belleza/facial" },
            { label: "Aparatos de Masaje", link: "/catalogo/salud-y-belleza/masaje" },
            { label: "Balanza", link: "/catalogo/salud-y-belleza/balanza" },
            { label: "Cuidado Corporal", link: "/catalogo/salud-y-belleza/corporal" },
        ],
    },
    'ferreteria': {
        title: "FERRETERÍA",
        subcategories: [
            { label: "Herramientas Eléctricas", link: "/catalogo/ferreteria/electricas" },
            { label: "Kits y Sets", link: "/catalogo/ferreteria/kits" },
            { label: "Seguridad y Protección", link: "/catalogo/ferreteria/seguridad" },
            { label: "Manuales", link: "/catalogo/ferreteria/manuales" },
        ],
    },
};