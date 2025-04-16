// No need to import Icons since we're using string literals for icons

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
        href: "/about/project-overview",
        icon: "mdi:information-outline",
      },
      {
        title: "Work Packages",
        description: "Explore the different research areas within the project.",
        href: "/about/work-packages",
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
        href: "/about/project-team",
        icon: "mdi:account-group",
      },
      {
        title: "Contact Us",
        description: "Get in touch with the project team.",
        href: "/about/contact",
        icon: "mdi:email-outline",
      },
    ],
  },
];