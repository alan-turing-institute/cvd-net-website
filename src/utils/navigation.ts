// Helper function to properly join base URL with path
export function joinPath(base: string, path: string): string {
  // In development, BASE_URL is "/" so we just return the path
  if (base === '/') return path;
  // In production, BASE_URL is the full domain, so we need to extract the path part
  if (base.startsWith('http')) {
    try {
      const url = new URL(base);
      const basePath = url.pathname === '/' ? '' : url.pathname;
      return basePath + path;
    } catch {
      // Fallback if URL parsing fails
      return path;
    }
  }
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
