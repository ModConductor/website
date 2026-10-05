import type { ReactElement } from "react";
import { TextLink } from "../site/Links";
import { Icon } from "../site/Icon";
import { sitePath } from "../site/paths";
import { ScreenshotFigure, type ScreenshotSource } from "./ScreenshotFigure";
type ImageProps = { readonly image: ScreenshotSource };

export function ProfileFeature({ image }: ImageProps): ReactElement {
  return <section className="mt-12 grid items-start gap-7 border-t border-zinc-200 pt-9 sm:mt-16 sm:pt-12 lg:grid-cols-12 dark:border-zinc-800"><div className="lg:col-span-4"><span className="mb-4 block text-zinc-500 dark:text-zinc-400"><Icon name="profiles" size="heading" /></span><h2 className="text-3xl leading-tight font-medium tracking-tight xl:text-4xl">Separate profiles for each mod setup</h2><p className="mt-5 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">A workspace keeps one installed copy of each mod. Profiles keep their own selections and priorities.</p><div className="mt-3"><TextLink href={sitePath("help/")} icon="book">Profiles and workspaces</TextLink></div></div><div className="lg:col-span-8"><ScreenshotFigure image={image} alt="Three real demonstration profile cards, with Everyday adventures active." caption="Profiles · Linux v0.2.0 · Demo data" loading="lazy" /></div></section>;
}
