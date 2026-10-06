import type { ReactElement } from "react";

export type IconName = "download" | "book" | "profiles" | "order" | "file" | "sun" | "moon" | "github";
type IconProps = { readonly name: IconName; readonly size?: "standard" | "heading" };

const paths: Readonly<Record<IconName, ReactElement>> = {
  github: <path d="M9 21v-3.4c-4 1.2-4-2-6-2.4M15 21v-4.5c0-1 .2-1.6.8-2.2C19 13.8 20 12.2 20 9.7c0-1.5-.5-2.8-1.4-3.8.3-1.1.3-2.4-.2-3.4-1.2 0-2.6.6-3.8 1.4a13 13 0 0 0-5.2 0C8.2 2.9 6.8 2.4 5.6 2.5c-.5 1-.5 2.3-.2 3.4C4.5 6.9 4 8.2 4 9.7c0 2.5 1 4.1 4.2 4.6.6.6.8 1.2.8 2.2V21" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  moon: <path d="M20 15a9 9 0 0 1-11-11A9 9 0 1 0 20 15Z" />,
  download: <><path d="M12 3v12m-4-4 4 4 4-4" /><path d="M4 15v5h16v-5" /></>,
  book: <><path d="M12 6v15M12 6C9 3 5 3 3 4v15c3-1 6 0 9 2 3-2 6-3 9-2V4c-2-1-6-1-9 2Z" /><path d="M6 8h3m6 0h3" /></>,
  profiles: <><circle cx="9" cy="7" r="3" /><path d="M3 20v-3c0-3 3-5 6-5s6 2 6 5v3H3Zm14-15a3 3 0 0 1 0 6m1 3c2 1 3 2 3 5v1" /></>,
  order: <><path d="M10 5h11M10 12h11M10 19h11M3 4h2v3M3 11h3v1l-3 2h3M3 18h3v3H3" /></>,
  file: <><path d="M5 2h9l5 5v15H5V2Zm9 0v6h5M8 12h8m-8 4h6" /></>,
};

export function Icon({ name, size = "standard" }: IconProps): ReactElement {
  const className = size === "heading" ? "size-6 shrink-0" : "size-5 shrink-0";
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
