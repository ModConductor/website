import type { ReactElement, ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { SiteSection } from "./SiteNavigation";

type SiteChromeProps = { readonly currentSection: SiteSection; readonly children: ReactNode };

export function SiteChrome({ currentSection, children }: SiteChromeProps): ReactElement {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <a href="#content" className="sr-only z-30 rounded-xl bg-white p-3 text-violet-900 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:outline-2 focus:outline-violet-700 dark:bg-zinc-800 dark:text-violet-200">Skip to content</a>
      <SiteHeader currentSection={currentSection} />
      <main id="content" tabIndex={-1} className="flex-1 scroll-mt-32 focus:outline-none">{children}</main>
      <SiteFooter currentSection={currentSection} />
    </div>
  );
}
