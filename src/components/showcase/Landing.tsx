import type { ReactElement } from "react";
import { LandingIntro } from "../LandingIntro";
import { DesktopStage } from "./DesktopStage";
import { ProfileFeature } from "./ProfileFeature";
import { LandingGuides } from "./LandingGuides";
import type { ScreenshotSource } from "./ScreenshotFigure";

type LandingProps = { readonly mods: ScreenshotSource; readonly profiles: ScreenshotSource };

export function Landing({ mods, profiles }: LandingProps): ReactElement {
  return (
    <div className="bg-linear-to-b from-violet-100/60 via-zinc-50 to-zinc-50 px-6 pt-14 sm:px-8 sm:pt-20 dark:from-violet-950/30 dark:via-zinc-950 dark:to-zinc-950">
      <LandingIntro />
      <DesktopStage image={mods} />
      <ProfileFeature image={profiles} />
      <LandingGuides />
    </div>
  );
}
