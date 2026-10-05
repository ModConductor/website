type SitePath = "" | "download/" | "help/" | "help/install/" | "assets/modconductor.svg";

export function sitePath(path: SitePath): string {
  return `${import.meta.env.BASE_URL}${path}`;
}
