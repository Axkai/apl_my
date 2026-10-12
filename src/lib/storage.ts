/**
 * Resolves a storage key/path to a full Neon Object Storage URL.
 * Preserves external URLs (like Google Drive links) untouched.
 * Falls back safely to local path if NEXT_PUBLIC_STORAGE_URL is undefined.
 */
export function getAssetUrl(path: string): string {
  if (!path) return "";

  // If already an absolute HTTP/HTTPS URL, return as-is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const baseUrl = process.env.NEXT_PUBLIC_STORAGE_URL?.replace(/\/$/, "") || "";
  const cleanPath = path.replace(/^\//, "");
  return baseUrl ? `${baseUrl}/${cleanPath}` : `/${cleanPath}`;
}
