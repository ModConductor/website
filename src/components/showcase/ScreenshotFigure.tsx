import type { ReactElement } from "react";
import { TextLink } from "../site/Links";

export type ScreenshotSource = {
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
  readonly fullSizePath: string;
  readonly width: number;
  readonly height: number;
};

type ScreenshotFigureProps = {
  readonly image: ScreenshotSource;
  readonly alt: string;
  readonly caption: string;
  readonly loading: "eager" | "lazy";
};

export function ScreenshotFigure({ image, alt, caption, loading }: ScreenshotFigureProps): ReactElement {
  return (
    <figure>
      <a href={image.fullSizePath} className="block overflow-hidden rounded-2xl border border-zinc-600 bg-zinc-900 p-1.5 shadow-2xl shadow-zinc-950/20 ring-1 ring-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:shadow-black/50 dark:focus-visible:outline-violet-300" aria-label={`Open ${caption} at full size`}>
        <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} width={image.width} height={image.height} alt={alt} loading={loading} fetchPriority={loading === "eager" ? "high" : "auto"} decoding="async" className="h-auto w-full rounded-xl" />
      </a>
      <figcaption className="mt-4 flex flex-wrap justify-between gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <span>{caption}</span>
        <TextLink href={image.fullSizePath}>Open full screenshot ↗︎</TextLink>
      </figcaption>
    </figure>
  );
}
