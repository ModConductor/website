import type { ReactElement } from "react";
import { BrandImage } from "./BrandImage";
import { SiteNavigation, type SiteSection } from "./SiteNavigation";
import { ThemeToggle } from "./ThemeToggle";
import { sitePath } from "./paths";

type SiteHeaderProps = { readonly currentSection: SiteSection };

export function SiteHeader({ currentSection }: SiteHeaderProps): ReactElement {
  const frame = currentSection === "home" ? "mx-auto w-full 2xl:w-5/6" : "";
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className={`grid grid-cols-2 items-center gap-x-2 gap-y-1 px-4 py-2 sm:flex sm:px-8 ${frame}`}>
        <a href={sitePath("")} aria-current={currentSection === "home" ? "page" : undefined} className="flex min-h-11 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:mr-auto dark:focus-visible:outline-violet-300"><BrandImage size={32} /><strong className="text-sm tracking-tight sm:text-base">Mod Conductor</strong></a>
        <div className="col-start-2 row-start-1 justify-self-end sm:order-last"><ThemeToggle /></div>
        <SiteNavigation currentSection={currentSection} placement="header" />
      </div>
    </header>
  );
}
