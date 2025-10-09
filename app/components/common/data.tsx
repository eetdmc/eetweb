import { assets } from "@/public/assets";
export const commonData = {
    headerData: {
        logo: assets.logo,
        menuItems: [
            {
                label: "About",
                href: "/about-us"
            },
            {
                label: "Services",
                href: "/services"
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
