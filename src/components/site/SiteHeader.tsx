import type { ReactElement } from "react";
import { BrandImage } from "./BrandImage";
import { SiteNavigation, type SiteSection } from "./SiteNavigation";
import { sitePath } from "./paths";

type SiteHeaderProps = { readonly currentSection: SiteSection };

export function SiteHeader({ currentSection }: SiteHeaderProps): ReactElement {
  return (
    <header className="sticky top-0 z-20 border-b border-violet-200/50 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href={sitePath("")} aria-current={currentSection === "home" ? "page" : undefined} className="flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:focus-visible:outline-violet-300">
          <span className="rounded-xl border border-violet-200/70 bg-white p-1.5 shadow-sm dark:border-violet-300/20 dark:bg-zinc-900"><BrandImage size={32} /></span>
          <span><strong className="block text-sm tracking-tight sm:text-base">Mod Conductor</strong><span className="mt-0.5 hidden text-xs text-zinc-500 sm:block dark:text-zinc-400">Desktop mod management</span></span>
        </a>
        <SiteNavigation currentSection={currentSection} placement="header" />
      </div>
    </header>
  );
}
