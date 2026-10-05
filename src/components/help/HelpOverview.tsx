import type { ReactElement, ReactNode } from "react";
import { TextLink } from "../site/Links";
import { sitePath } from "../site/paths";
import { helpTopics } from "./topics";

type HelpOverviewProps = { readonly children: ReactNode };

export function HelpOverview({ children }: HelpOverviewProps): ReactElement {
  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight">Help topics</h1>
      <div className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">{children}</div>
      <ul className="mt-5 grid gap-x-8 md:grid-cols-2">
        {helpTopics.map(({ slug, title, description, icon }) => (
          <li key={slug} className="border-t border-zinc-200 py-4 dark:border-zinc-800">
            <TextLink href={sitePath(`help/${slug}/`)} icon={icon}>{title}</TextLink>
            <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
