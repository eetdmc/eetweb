import { assets } from "@/public/assets";
export const commonData = {
    headerData: {
        logo: assets.logo,
        menuItems: [
            {
                label: "About",
                href: "",
                submenu: [
                { label: "Overview ", href: "/about-us" },
                { label: "Our Team ", href: "/our-team" },
                // { label: "Partners", href: "/partners" }, 
                ],
            },
            {
                label: "Services",
                href: "/",  
                submenu: [
                { label: "Hotel & Leisure Services ", href: "/services/hotel-leisure-services" },
                { label: "MICE", href: "/services/mice" }, 
                { label: "Cruise Liners", href: "/services/cruise-liners" }, 
                { label: "Experiences", href: "/services/experiences" }, 
                ],
            },
            {
                label: "Destinations",
                href: "/destinations",
                submenu: [
                { label: "UAE ", href: "/destinations/uae" },
                { label: "Oman", href: "/destinations/oman" }, 
                { label: "Qatar", href: "/destinations/qatar" }, 
                { label: "Saudi Arabia", href: "/destinations/saudi-arabia" }, 
                ],
            },
            {
                label: "Contact",
                href: "/contact-us"
            }
        ]
    }
}
