import type { ImageMetadata } from "astro";
import mods from "../../assets/screenshots/mods-load-order.png";
import profiles from "../../assets/screenshots/profiles.png";
import type { HelpArticleSlug } from "./topics";

export const helpIllustrations = [
  { slug: "load-order", image: mods, alt: "Mods and the mixed load-order view in a demonstration Skyrim profile.", caption: "Mods and load order · Linux v0.2.0 · Demo data" },
  { slug: "profiles", image: profiles, alt: "Three demonstration profile cards, with Everyday adventures active.", caption: "Profiles · Linux v0.2.0 · Demo data" },
] as const satisfies ReadonlyArray<{ readonly slug: HelpArticleSlug; readonly image: ImageMetadata; readonly alt: string; readonly caption: string }>;
