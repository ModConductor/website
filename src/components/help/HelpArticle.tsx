import type { ReactElement, ReactNode } from "react";
import { TextLink } from "../site/Links";
import { sitePath } from "../site/paths";

type HelpArticleProps = { readonly title: string; readonly children: ReactNode };

export function HelpArticle({ title, children }: HelpArticleProps): ReactElement {
  return (
    <article className="min-w-0">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-zinc-600 dark:text-zinc-400"><TextLink href={sitePath("help/")} icon="book">Help</TextLink><span aria-hidden="true" className="mx-3">/</span>{title}</nav>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {children}
    </article>
  );
}
