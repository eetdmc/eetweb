export interface SubMenuItem {
  label: string;
  href: string;
  slug?: string;
}

export interface MenuItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
}