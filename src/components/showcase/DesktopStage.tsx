import type { ReactElement } from "react";
import { ScreenshotFigure, type ScreenshotSource } from "./ScreenshotFigure";

type DesktopStageProps = { readonly image: ScreenshotSource };

export function DesktopStage({ image }: DesktopStageProps): ReactElement {
  return (
    <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-violet-200/60 bg-linear-to-br from-violet-200/60 via-indigo-100/40 to-white/60 p-3 shadow-xl shadow-violet-950/5 sm:mt-16 sm:p-7 dark:border-violet-300/10 dark:from-violet-500/10 dark:via-indigo-500/5 dark:to-zinc-900/50 dark:shadow-violet-950/10">
      <ScreenshotFigure image={image} alt="Mod Conductor's Mods tab with five selected demonstration mods beside their file priority and Skyrim plugin load order." caption="Mods and load order · Linux v0.2.0 · Demo data" loading="eager" />
    </div>
  );
}
