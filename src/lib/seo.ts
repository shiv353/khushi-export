const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://khushi-export.vercel.app";

export const siteUrl = new URL(configuredSiteUrl).origin;
export const siteMetadataBase = new URL(siteUrl);

export function absoluteUrl(path: string): string {
  return new URL(path, siteMetadataBase).toString();
}
