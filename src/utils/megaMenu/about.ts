// No need to import Icons since we're using string literals for icons
import { joinPath } from "../navigation";

interface AboutMenuItem {
  title: string;
  description: string;
  href: string;
  icon: string; // Using string type for Iconify icons
}

interface AboutMenuSection {
  sectionTitle: string; // Keep sectionTitle optional if not always needed visually
  items: AboutMenuItem[];
}

export const aboutMenu: AboutMenuSection[] = [
  {
    sectionTitle: "About CVD-Net", // First section
    items: [
      {
        title: "Project Overview",
        description: "Understand the goals and vision of CVD-Net.",
        href: joinPath(import.meta.env.BASE_URL, "/about/project-overview"),
        icon: "mdi:information-outline",
      },
      {
        title: "Work Packages",
        description: "Explore the different research areas within the project.",
        href: joinPath(import.meta.env.BASE_URL, "/about/work-packages"),
        icon: "mdi:package-variant",
      },
    ],
  },
  {
    sectionTitle: "Team & Contact", // Second section
    items: [
      {
        title: "Project Team",
        description: "Meet the researchers and staff involved.",
        href: joinPath(import.meta.env.BASE_URL, "/about/project-team"),
        icon: "mdi:account-group",
      },
      {
        title: "Contact Us",
        description: "Get in touch with the project team.",
        href: joinPath(import.meta.env.BASE_URL, "/about/contact"),
        icon: "mdi:email-outline",
      },
    ],
  },
];
