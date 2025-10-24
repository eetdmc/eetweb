// lib/fetchMenu.ts
import { MenuItem } from "../app/components/common/type";
import { DestinationData } from "../app/components/destination-details/type";
import { ServiceData } from "../app/components/service-details/type";

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  if (!BASE_URL) return fallbackMenu();

  try {
    const [servicesRes, destinationsRes] = await Promise.all([
      fetch(`${BASE_URL}/api/admin/services/add`),
      fetch(`${BASE_URL}/api/admin/destinations/add`),
    ]);

    if (!servicesRes.ok || !destinationsRes.ok)
      throw new Error("Failed to fetch menu");

    const servicesData = await servicesRes.json();
    const destinationsData = await destinationsRes.json();

    // Extract only service/destination names and slugs
    const servicesItems = servicesData.data.map((s: ServiceData) => ({
      label: s.firstSection.mainTitle,
      href: `/services/${s.firstSection.slug}`,
    }));

    const destinationsItems = destinationsData.data.map(
      (d: DestinationData) => ({
        label: d.firstSection.location,
        href: `/destinations/${d.firstSection.slug}`,
      })
    );

    return [
      {
        label: "About",
        href: "/about-us",
      },
      {
        label: "Services",
        href: "/services",
        submenu: servicesItems,
      },
      {
        label: "Destinations",
        href: "/destinations",
        submenu: destinationsItems,
      },
      { label: "Contact", href: "/contact-us" },
    ];
  } catch (err) {
    console.error(err);
    return fallbackMenu();
  }
};

// Fallback static menu
const fallbackMenu = () => [
  { label: "About", href: "/about-us", submenu: [] },
  { label: "Services", href: "/services", submenu: [] },
  { label: "Destinations", href: "/destinations", submenu: [] },
  { label: "Contact", href: "/contact-us" },
];
