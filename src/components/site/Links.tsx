import type { ReactElement, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type LinkProps = { readonly href: string; readonly children: ReactNode; readonly icon?: IconName };

export function ActionLink({ href, children, icon }: LinkProps): ReactElement {
  return <a href={href} className="motion-safe:transition-colors motion-safe:duration-150 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-900 bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 focus-visible:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white dark:focus-visible:bg-white dark:focus-visible:outline-violet-300">{icon === undefined ? null : <Icon name={icon} />}{children}</a>;
}

export function SecondaryLink({ href, children, icon }: LinkProps): ReactElement {
  return <a href={href} className="motion-safe:transition-colors motion-safe:duration-150 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium hover:bg-zinc-50 focus-visible:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 dark:focus-visible:outline-violet-300">{icon === undefined ? null : <Icon name={icon} />}{children}</a>;
}

export function TextLink({ href, children, icon }: LinkProps): ReactElement {
  return <a href={href} className="motion-safe:transition-colors motion-safe:duration-150 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 hover:decoration-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-white dark:hover:decoration-zinc-300 dark:focus-visible:outline-violet-300">{icon === undefined ? null : <Icon name={icon} />}{children}</a>;
}
