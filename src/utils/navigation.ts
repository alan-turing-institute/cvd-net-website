// Helper function to properly join base URL with path
function joinPath(base: string, path: string): string {
  if (base === '/') return path;
  return base + path;
}

export const navigationLinks = [
  { href: import.meta.env.BASE_URL, label: "Home" },
  {
    href: joinPath(import.meta.env.BASE_URL, "/about/project-overview"),
    label: "About",
  }, // Link to the main overview page
  { href: joinPath(import.meta.env.BASE_URL, "/resources"), label: "Resources" },
  { href: joinPath(import.meta.env.BASE_URL, "/blog"), label: "Blog" },
  { href: joinPath(import.meta.env.BASE_URL, "/news-events"), label: "News & Events" },
  // Contact is handled by the CTA button now
];
