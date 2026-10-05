import type { ReactElement, ReactNode } from "react";
import { ActionLink } from "../site/Links";
import { sitePath } from "../site/paths";

type HelpOverviewProps = { readonly children: ReactNode };

function InstallationEntry(): ReactElement {
  return (
    <section className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-violet-200 bg-linear-to-br from-violet-100 to-indigo-50 p-6 sm:p-8 dark:border-violet-300/15 dark:from-violet-400/10 dark:to-indigo-400/5">
      <h2 className="text-2xl font-bold tracking-tight">Install Mod Conductor</h2>
      <ActionLink href={sitePath("help/install/")}>Open the installation notes →</ActionLink>
    </section>
  );
}

export function HelpOverview({ children }: HelpOverviewProps): ReactElement {
  return (
    <article>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Help topics</h1>
      <div className="mt-4 space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">{children}</div>
      <InstallationEntry />
    </article>
  );
}
