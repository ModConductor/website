import type { ReactElement, ReactNode } from "react";
import { TextLink } from "../site/Links";
import { sitePath } from "../site/paths";

type HelpArticleProps = { readonly title: string; readonly children: ReactNode };

export function HelpArticle({ title, children }: HelpArticleProps): ReactElement {
  return (
    <article className="min-w-0 rounded-3xl border border-violet-200/60 bg-white p-6 shadow-lg shadow-violet-950/5 sm:p-9 dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-black/10">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-zinc-600 dark:text-zinc-400"><TextLink href={sitePath("help/")}>Help</TextLink><span aria-hidden="true" className="mx-3">/</span>{title}</nav>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{title}</h1>
      {children}
    </article>
  );
}
