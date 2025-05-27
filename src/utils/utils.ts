// Format the date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

/**
 * Resolves asset paths by prefixing with BASE_URL when needed
 * This handles image paths and other static assets that need the base URL in production
 */
function getAssetPath(path?: string): string {
  // Handle undefined or empty strings
  if (!path) {
    return "";
  }

  // If the path already starts with http/https, return as is
  if (path.startsWith("http")) {
    return path;
  }

  // For paths that start with /, prefix with BASE_URL
  // Otherwise return the path as is (for relative paths)
  if (path.startsWith("/")) {
    const baseUrl = import.meta.env.BASE_URL;
    // If BASE_URL is root ("/"), just return the path
    if (baseUrl === "/") {
      return path;
    }
    return `${baseUrl}${path}`;
  }

  // For other cases, return as is
  return path;
}

export { formatDate, getAssetPath };
