export const navigationLinks = [
  { href: `${import.meta.env.BASE_URL}`, label: "Home" },
  {
    href: `${import.meta.env.BASE_URL}/about/project-overview`,
    label: "About",
  }, // Link to the main overview page
  { href: `${import.meta.env.BASE_URL}/resources`, label: "Resources" },
  { href: `${import.meta.env.BASE_URL}/blog`, label: "Blog" },
  { href: `${import.meta.env.BASE_URL}/news-events`, label: "News & Events" },
  // Contact is handled by the CTA button now
];
