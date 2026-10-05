import type { MarkdownHeading } from "astro";
import type { ReactElement } from "react";

type ArticleContentsProps = { readonly headings: ReadonlyArray<MarkdownHeading> };

export function ArticleContents({ headings }: ArticleContentsProps): ReactElement {
  return (
    <nav aria-label="On this page" className="mt-5 border-y border-zinc-200 py-3 dark:border-zinc-800">
      <p className="text-sm font-semibold">On this page</p>
      <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
        {headings.filter(({ depth }) => depth === 2).map(({ slug, text }) => (
          <li key={slug}><a href={`#${slug}`} className="inline-flex min-h-11 items-center rounded-sm text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:text-zinc-400 dark:decoration-zinc-700 dark:focus-visible:outline-violet-300">{text}</a></li>
        ))}
      </ul>
    </nav>
  );
}
