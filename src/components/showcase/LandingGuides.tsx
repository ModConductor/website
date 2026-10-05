import type { ReactElement } from "react";
import { TextLink } from "../site/Links";
import { sitePath } from "../site/paths";
import { GuideCard } from "./GuideCard";

export function LandingGuides(): ReactElement {
  return (
    <section className="mt-12 border-t border-zinc-200 pt-7 sm:mt-16 sm:pt-9 dark:border-zinc-800">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-3"><h2 className="text-2xl font-medium tracking-tight">Help for your next step</h2><TextLink href={sitePath("help/")} icon="book">All topics</TextLink></div>
      <div className="grid gap-x-8 sm:grid-cols-3">
        <GuideCard href={sitePath("help/install/")} icon="download" title="Installation" description="Read the current installation notes for Linux and Windows." />
        <GuideCard href={sitePath("help/")} icon="profiles" title="First profile" description="Check the help index for workspace and profile guides." />
        <GuideCard href={sitePath("help/")} icon="order" title="Load order" description="Check the help index for plugin and file priority guides." />
      </div>
    </section>
  );
}
