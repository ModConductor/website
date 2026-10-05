import type { ReactElement } from "react";

export type IconName = "download" | "book" | "external" | "profiles" | "order" | "file" | "sun" | "moon" | "copy";
type IconProps = { readonly name: IconName; readonly size?: "standard" | "heading" };

const paths: Readonly<Record<IconName, ReactElement>> = {
  copy: <><rect x="8" y="8" width="13" height="13" rx="2" /><path d="M16 8V3H3v13h5" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  moon: <path d="M20 15a9 9 0 0 1-11-11A9 9 0 1 0 20 15Z" />,
  download: <><path d="M12 3v12m-4-4 4 4 4-4" /><path d="M4 15v5h16v-5" /></>,
  book: <><path d="M12 6v15M12 6C9 3 5 3 3 4v15c3-1 6 0 9 2 3-2 6-3 9-2V4c-2-1-6-1-9 2Z" /><path d="M6 8h3m6 0h3" /></>,
  external: <><path d="M14 3h7v7M21 3l-9 9" /><path d="M10 5H4v15h15v-6" /></>,
  profiles: <><circle cx="9" cy="7" r="3" /><path d="M3 20v-3c0-3 3-5 6-5s6 2 6 5v3H3Zm14-15a3 3 0 0 1 0 6m1 3c2 1 3 2 3 5v1" /></>,
  order: <><path d="M10 5h11M10 12h11M10 19h11M3 4h2v3M3 11h3v1l-3 2h3M3 18h3v3H3" /></>,
  file: <><path d="M5 2h9l5 5v15H5V2Zm9 0v6h5M8 12h8m-8 4h6" /></>,
};

export function Icon({ name, size = "standard" }: IconProps): ReactElement {
  const className = size === "heading" ? "size-6 shrink-0" : "size-5 shrink-0";
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
