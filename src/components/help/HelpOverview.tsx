import type { ReactElement, ReactNode } from "react";
import { Icon } from "../site/Icon";
import { ActionLink } from "../site/Links";
import { sitePath } from "../site/paths";

type HelpOverviewProps = { readonly children: ReactNode };

function InstallationEntry(): ReactElement {
  return (
    <section className="mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-zinc-200 py-4 dark:border-zinc-800">
      <h2 className="flex items-center gap-3 text-lg font-semibold"><Icon name="download" />Install Mod Conductor</h2>
      <ActionLink href={sitePath("help/install/")} icon="book">Open the installation notes</ActionLink>
    </section>
  );
}

export function HelpOverview({ children }: HelpOverviewProps): ReactElement {
  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight">Help topics</h1>
      <div className="mt-3 space-y-4 leading-7 text-zinc-600 dark:text-zinc-400">{children}</div>
      <InstallationEntry />
    </article>
  );
}
