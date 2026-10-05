import type { ReactElement } from "react";
import { sitePath } from "../site/paths";

export type HelpTopic = "index" | "installation";
type HelpNavigationProps = { readonly currentTopic: HelpTopic };
const topics = [
  { topic: "index", path: "help/", label: "All help topics" },
  { topic: "installation", path: "help/install/", label: "Installation" },
] as const;

type TopicLinkProps = HelpNavigationProps & (typeof topics)[number];

function TopicLink({ currentTopic, topic, path, label }: TopicLinkProps): ReactElement {
  const appearance = currentTopic === topic
    ? "border-violet-600 bg-violet-100 font-semibold text-violet-950 dark:border-violet-300 dark:bg-violet-300/10 dark:text-violet-200"
    : "border-transparent font-medium text-zinc-600 hover:bg-violet-100/70 hover:text-violet-900 dark:text-zinc-400 dark:hover:bg-violet-400/10 dark:hover:text-violet-200";
  return (
    <a href={sitePath(path)} aria-current={currentTopic === topic ? "page" : undefined} className={`flex min-h-11 items-center rounded-lg border-l-2 px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:focus-visible:outline-violet-300 ${appearance}`}>
      {label}
    </a>
  );
}

function HelpTopicLinks({ currentTopic }: HelpNavigationProps): ReactElement {
  return (
    <nav aria-label="Help topics">
      <ul className="space-y-2">
        {topics.map((topic) => <li key={topic.topic}><TopicLink currentTopic={currentTopic} {...topic} /></li>)}
      </ul>
    </nav>
  );
}

export function HelpNavigation({ currentTopic }: HelpNavigationProps): ReactElement {
  return (
    <aside className="rounded-2xl border border-violet-200/60 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900/80">
      <details className="lg:hidden">
        <summary className="min-h-11 cursor-pointer rounded-lg py-3 text-sm font-semibold text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:text-zinc-300 dark:focus-visible:outline-violet-300">Help topics</summary>
        <div className="mt-4"><HelpTopicLinks currentTopic={currentTopic} /></div>
      </details>
      <div className="hidden lg:block"><HelpTopicLinks currentTopic={currentTopic} /></div>
    </aside>
  );
}
