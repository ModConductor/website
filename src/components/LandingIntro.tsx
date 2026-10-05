import type { ReactElement } from "react";
import { ActionLink, SecondaryLink } from "./site/Links";
import { sitePath } from "./site/paths";

export function LandingIntro(): ReactElement {
  return (
    <div className="mx-auto max-w-6xl text-center">
      <h1 className="text-5xl leading-none font-bold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">Native mod management<br className="hidden md:block" /><span className="text-violet-800 dark:text-violet-200"> for Linux and Windows.</span></h1>
      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl dark:text-zinc-400">Install mods, manage profiles, and arrange your load order in one native desktop application.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4"><ActionLink href={sitePath("download/")}>Download Mod Conductor <span aria-hidden="true">↓</span></ActionLink><SecondaryLink href={sitePath("help/")}>Read the help <span aria-hidden="true">→</span></SecondaryLink></div>
    </div>
  );
}
