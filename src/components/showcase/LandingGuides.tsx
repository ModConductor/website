import type { ReactElement } from "react";
import { TextLink } from "../site/Links";
import { sitePath } from "../site/paths";
import { GuideCard } from "./GuideCard";

export function LandingGuides(): ReactElement {
  return (
    <section className="mx-auto mt-16 max-w-7xl">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><h2 className="text-3xl font-bold tracking-tight">Help for your next step</h2><TextLink href={sitePath("help/")}>All help topics →</TextLink></div>
      <div className="grid gap-5 md:grid-cols-3">
        <GuideCard href={sitePath("help/install/")} title="Installation" description="Read the current installation notes for Linux and Windows." />
        <GuideCard href={sitePath("help/")} title="First profile" description="Check the help index for workspace and profile guides." />
        <GuideCard href={sitePath("help/")} title="Load order" description="Check the help index for plugin and file priority guides." />
      </div>
    </section>
  );
}
