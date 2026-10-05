import type { ReactElement } from "react";
import { Icon } from "./Icon";
import { sitePath } from "./paths";

export type SiteSection = "home" | "download" | "help" | "not-found";
type NavigationProps = { readonly currentSection: SiteSection; readonly placement: "header" | "footer" };

const destinations = [
  { section: "download", path: "download/", label: "Downloads", icon: "download" },
  { section: "help", path: "help/", label: "Help", icon: "book" },
] as const;

const linkStyle = "flex min-h-11 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-violet-600 dark:focus-visible:outline-violet-300";

export function SiteNavigation({ currentSection, placement }: NavigationProps): ReactElement {
  if (placement === "footer") {
    return <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm font-medium"><a href={sitePath("help/install/")} className={linkStyle}><Icon name="file" />Installation</a><a href="https://github.com/ModConductor/ModConductor" className={linkStyle}><Icon name="external" />Source</a></nav>;
  }
  return (
    <nav aria-label="Main" className="col-span-2 row-start-2 flex flex-wrap gap-1 text-sm font-semibold sm:order-none">
      {destinations.map(({ section, path, label, icon }) => {
        const currentStyle = currentSection === section ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-300" : "";
        return <a key={section} href={sitePath(path)} aria-current={currentSection === section ? "location" : undefined} className={`${linkStyle} px-2 hover:bg-zinc-100 focus-visible:outline-offset-2 dark:hover:bg-zinc-900 ${currentStyle}`}><Icon name={icon} />{label}</a>;
      })}
    </nav>
  );
}
