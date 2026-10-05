import type { ReactElement } from "react";
import { sitePath } from "./paths";

export type SiteSection = "home" | "download" | "help" | "not-found";
type NavigationProps = { readonly currentSection: SiteSection; readonly placement: "header" | "footer" };

const destinations = [
  { section: "download", path: "download/", label: "Downloads" },
  { section: "help", path: "help/", label: "Help" },
] as const;
const currentStyles = {
  header: "font-bold text-violet-900 dark:text-violet-200",
  footer: "text-white",
};
const inactiveStyles = {
  header: "text-zinc-600 dark:text-zinc-300",
  footer: "text-zinc-300",
};
const linkStyles = {
  header: "flex min-h-11 items-center rounded-lg px-3 hover:bg-violet-100 hover:text-violet-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:hover:bg-violet-400/10 dark:hover:text-violet-200 dark:focus-visible:outline-violet-300",
  footer: "flex min-h-11 items-center rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300",
};

export function SiteNavigation({ currentSection, placement }: NavigationProps): ReactElement {
  const navStyles = placement === "header" ? "flex gap-1 text-sm font-semibold sm:gap-2" : "flex flex-wrap gap-6 text-sm font-semibold";
  return (
    <nav aria-label={placement === "header" ? "Main" : "Footer"} className={navStyles}>
      {destinations.map(({ section, path, label }) => (
        <a key={section} href={sitePath(path)} aria-current={currentSection === section ? "location" : undefined} className={`${linkStyles[placement]} ${currentSection === section ? currentStyles[placement] : inactiveStyles[placement]}`}>
          {label}
        </a>
      ))}
      {placement === "footer" ? <a href="https://github.com/ModConductor/ModConductor" className={linkStyles.footer}>Source ↗︎</a> : null}
    </nav>
  );
}
