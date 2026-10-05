import type { ReactElement } from "react";
import { BrandImage } from "./BrandImage";
import { SiteNavigation, type SiteSection } from "./SiteNavigation";

type SiteFooterProps = { readonly currentSection: SiteSection };

export function SiteFooter({ currentSection }: SiteFooterProps): ReactElement {
  return (
    <footer className="mt-20 border-t border-white/10 bg-zinc-900 text-zinc-300 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-10 sm:px-8">
        <div className="flex items-center gap-3"><BrandImage size={36} /><div><p className="font-semibold text-white">Mod Conductor</p><p className="mt-1 text-sm text-zinc-400">Native mod management for Linux and Windows.</p></div></div>
        <SiteNavigation currentSection={currentSection} placement="footer" />
      </div>
    </footer>
  );
}
