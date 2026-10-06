import type { ReactElement } from "react";
import { TextLink } from "../site/Links";
import { sitePath } from "../site/paths";
import { helpTopics } from "./topics";

export function HelpOverview(): ReactElement {
  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight">Help topics</h1>
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
