import type { ReactElement } from "react";
import { TextLink } from "../site/Links";
import { sitePath } from "../site/paths";
import { ScreenshotFigure, type ScreenshotSource } from "./ScreenshotFigure";

type ProfileFeatureProps = { readonly image: ScreenshotSource };

export function ProfileFeature({ image }: ProfileFeatureProps): ReactElement {
  return (
    <section className="mx-auto mt-16 grid max-w-7xl items-center gap-8 rounded-3xl border border-violet-200/70 bg-linear-to-br from-white via-white to-violet-100/70 p-6 sm:p-10 lg:grid-cols-5 lg:gap-12 dark:border-white/10 dark:from-zinc-900 dark:via-zinc-900 dark:to-violet-950/40">
      <div className="lg:col-span-3"><ScreenshotFigure image={image} alt="Three Skyrim demonstration profiles: Clean baseline, active Everyday adventures, and Visual refresh, with controls to select a profile and manage settings and saves." caption="Profiles · Linux v0.2.0 · Demo data" loading="lazy" /></div>
      <div className="lg:col-span-2">
        <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">Separate profiles for each mod setup</h2>
        <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">A workspace keeps one installed copy of each mod. Profiles keep their own mod selections and priorities.</p>
        <p className="mt-6"><TextLink href={sitePath("help/")}>Profiles and workspaces help →</TextLink></p>
      </div>
    </section>
  );
}
