import type { ReactElement } from "react";
import { LandingIntro } from "../LandingIntro";
import { DesktopStage } from "./DesktopStage";
import { ProfileFeature } from "./ProfileFeature";
import { LandingGuides } from "./LandingGuides";
import { LandingReveal } from "./LandingReveal";
import type { ScreenshotSource } from "./ScreenshotFigure";

type LandingProps = { readonly mods: ScreenshotSource; readonly profiles: ScreenshotSource };

export function Landing({ mods, profiles }: LandingProps): ReactElement {
  return (
    <div className="mx-auto w-full overflow-clip px-4 pb-7 sm:px-8 2xl:w-5/6">
      <LandingReveal><LandingIntro /></LandingReveal>
      <LandingReveal><DesktopStage image={mods} /></LandingReveal>
      <LandingReveal><ProfileFeature image={profiles} /></LandingReveal>
      <LandingReveal><LandingGuides /></LandingReveal>
    </div>
  );
}
