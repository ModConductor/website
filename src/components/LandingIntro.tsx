import type { ReactElement } from "react";
import { ActionLink, SecondaryLink } from "./site/Links";
import { sitePath } from "./site/paths";

export function LandingIntro(): ReactElement {
  return <section className="pt-9 text-center sm:pt-16 xl:pt-24"><h1 data-landing-enter="" className="text-4xl leading-tight font-medium tracking-tight sm:text-5xl lg:text-6xl lg:leading-none xl:text-7xl">Native mod management<br className="hidden sm:block" /> for Linux and Windows.</h1><p data-landing-enter="" className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">Install mods, keep separate profiles, and control your load order.</p><div data-landing-enter="" className="mt-6 flex flex-wrap justify-center gap-3"><ActionLink href={sitePath("download/")} icon="download">Download Mod Conductor</ActionLink><SecondaryLink href={sitePath("help/")} icon="book">Read the help</SecondaryLink></div></section>;
}
