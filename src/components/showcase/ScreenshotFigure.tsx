import type { ReactElement } from "react";

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
      <a href={image.fullSizePath} className="block overflow-hidden rounded-md border border-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:border-zinc-700 dark:focus-visible:outline-violet-300" aria-label={`Open ${caption} at full size`}>
        <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} width={image.width} height={image.height} alt={alt} loading={loading} fetchPriority={loading === "eager" ? "high" : "auto"} decoding="async" className="h-auto w-full" />
      </a>
      <figcaption className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{caption}</figcaption>
    </figure>
  );
}
