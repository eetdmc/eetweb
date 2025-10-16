import { assets } from "@/public/assets";
export const commonData = {
    headerData: {
        logo: assets.logo,
        menuItems: [
            {
                label: "About",
                href: "/about-us",
                submenu: [
                { label: "About ", href: "#" },
                { label: "services", href: "#" }, 
                ],
            },
            {
                label: "Services",
                href: "/services",
    submenu: [
      { label: "services", href: "#" }, 
    ],
            },
            {
                label: "Destinations",
                href: "/destinations"
            },
            {
                label: "Contact",
                href: "/contact"
            }
        ]
    }
}
