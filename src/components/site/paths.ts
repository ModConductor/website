import type { HelpArticleSlug } from "../help/topics";

type SitePath = `_astro/${string}` | "" | "download/" | "help/" | `help/${HelpArticleSlug}/` | "assets/modconductor.svg";

export function sitePath(path: SitePath): string {
  return `${import.meta.env.BASE_URL}${path}`;
}
