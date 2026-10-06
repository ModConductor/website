import type { IconName } from "../site/Icon";

export const helpTopics = [
  { slug: "install", title: "Installation", description: "Windows and Linux packages, including Nix.", icon: "download" },
  { slug: "first-profile", title: "First profile", description: "Select a game, find its folder, and set up a profile.", icon: "profiles" },
  { slug: "games", title: "Games", description: "Choose a catalog game or add a compatible game.", icon: "book" },
  { slug: "mods", title: "Mods", description: "Get archives, install mods, and organize the library.", icon: "file" },
  { slug: "load-order", title: "Load order", description: "Manage plugins and files, and review Optimise results.", icon: "order" },
  { slug: "skyrim", title: "Skyrim components", description: "Select optional SKSE, ENBSeries, and FNIS components.", icon: "book" },
  { slug: "tools", title: "Tools", description: "Run executables with Native, Wine, or Proton.", icon: "file" },
  { slug: "profiles", title: "Profiles and saves", description: "Keep private saves and import or export .mcprof files.", icon: "profiles" },
  { slug: "troubleshooting", title: "Troubleshooting", description: "Check setup, downloads, deployment, and tool problems.", icon: "book" },
  { slug: "faq", title: "FAQ", description: "Profiles, compatibility, and local files.", icon: "book" },
] as const satisfies ReadonlyArray<{ readonly slug: string; readonly title: string; readonly description: string; readonly icon: IconName }>;

export type HelpArticleSlug = (typeof helpTopics)[number]["slug"];
export type HelpTopic = "index" | HelpArticleSlug;
