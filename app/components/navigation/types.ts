export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Roads", href: "/roads" },
  { label: "Material Production", href: "/material-production" },
];
