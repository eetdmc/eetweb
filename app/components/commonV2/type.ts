export interface SubMenuItem {
  label: string;
  href: string;
  slug?: string;
  title?: string;
}

export interface MenuItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
  title?: string;
}