import type { ReactElement } from "react";

type GuideCardProps = { readonly href: string; readonly title: string; readonly description: string };

export function GuideCard({ href, title, description }: GuideCardProps): ReactElement {
  return (
    <a href={href} className="group flex min-h-40 flex-col justify-between gap-6 rounded-2xl border border-violet-200/70 bg-linear-to-br from-white to-violet-50 p-6 shadow-sm hover:border-violet-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:border-white/10 dark:from-zinc-900 dark:to-violet-950/30 dark:hover:border-violet-400/50 dark:focus-visible:outline-violet-300">
      <div><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{description}</p></div>
      <span aria-hidden="true" className="self-end rounded-lg bg-violet-100 px-3 py-1 text-xl text-violet-900 group-hover:bg-violet-200 dark:bg-violet-300/10 dark:text-violet-200 dark:group-hover:bg-violet-300/20">→</span>
    </a>
  );
}
