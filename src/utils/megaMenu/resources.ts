// No need to import Icons since we're using string literals for icons
import { joinPath } from "../navigation";

interface ResourceMenuItem {
  title: string;
  description: string;
  href: string;
  icon: string; // Using string type for Iconify icons
}

interface ResourceMenuSection {
  sectionTitle: string; // Keep sectionTitle optional if not always needed visually
  items: ResourceMenuItem[];
}

export const resourcesMenu: ResourceMenuSection[] = [
  {
    sectionTitle: "Core Resources", // First section
    items: [
      {
        title: "ModularCirc",
        description: "Information about the ModularCirc resource.",
        href: joinPath(import.meta.env.BASE_URL, "/resources/modularcirc"),
        icon: "mdi:circle-slice-4",
      },
      {
        title: "Data Safe Haven",
        description: "Details on the secure data environment.",
        href: joinPath(import.meta.env.BASE_URL, "/resources/data-safe-haven"),
        icon: "mdi:database-lock",
      },
    ],
  },
  {
    sectionTitle: "Platforms & Overview", // Second section
    items: [
      {
        title: "TEA Platform",
        description:
          "Learn about the Trustworthy and Ethical Assurance Platform.",
        href: joinPath(import.meta.env.BASE_URL, "/resources/tea-platform"),
        icon: "mdi:shield-check",
      },
      {
        title: "All Resources",
        description: "View all available project resources.",
        href: joinPath(import.meta.env.BASE_URL, "/resources"),
        icon: "mdi:view-grid",
      },
    ],
  },
];
