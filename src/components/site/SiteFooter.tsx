import type { ReactElement } from "react";
import { SiteNavigation, type SiteSection } from "./SiteNavigation";

type SiteFooterProps = { readonly currentSection: SiteSection };

export function SiteFooter({ currentSection }: SiteFooterProps): ReactElement {
  return (
    <footer className="mt-6 border-t border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Mod Conductor · Native desktop mod management</p>
        <SiteNavigation currentSection={currentSection} placement="footer" />
      </div>
    </footer>
  );
}
