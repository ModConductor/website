import type { ReactElement, ReactNode } from "react";
type LinkProps = { readonly href: string; readonly children: ReactNode };

export function ActionLink({ href, children }: LinkProps): ReactElement {
  return <a href={href} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-violet-400/40 bg-linear-to-br from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 ring-1 ring-white/20 ring-inset hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:border-violet-200/40 dark:from-violet-300 dark:to-indigo-300 dark:text-zinc-950 dark:shadow-violet-500/10 dark:focus-visible:outline-violet-300">{children}</a>;
}

export function SecondaryLink({ href, children }: LinkProps): ReactElement {
  return <a href={href} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-violet-200 bg-white/80 px-6 py-3 font-semibold text-violet-900 shadow-sm hover:border-violet-400 hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:border-violet-300/30 dark:bg-zinc-900/80 dark:text-violet-200 dark:hover:bg-violet-950/40 dark:focus-visible:outline-violet-300">{children}</a>;
}

export function TextLink({ href, children }: LinkProps): ReactElement {
  return <a href={href} className="rounded-sm font-semibold text-violet-800 underline decoration-violet-300/70 underline-offset-4 hover:decoration-violet-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:text-violet-200 dark:decoration-violet-400/40 dark:hover:decoration-violet-200 dark:focus-visible:outline-violet-300">{children}</a>;
}
