import type { ReactElement } from "react";
import { ScreenshotFigure, type ScreenshotSource } from "./ScreenshotFigure";

type DesktopStageProps = { readonly image: ScreenshotSource };

export function DesktopStage({ image }: DesktopStageProps): ReactElement {
  return (
    <section aria-label="Application screenshot" className="mt-9 sm:mt-12">
      <ScreenshotFigure image={image} alt="Mod Conductor's Mods tab with five selected demonstration mods beside their file priority and Skyrim plugin load order." caption="Mods and load order · Linux v0.2.0 · Demo data" loading="eager" />
    </section>
  );
}
