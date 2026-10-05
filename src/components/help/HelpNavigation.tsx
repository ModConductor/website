import type { ReactElement } from "react";
import { Icon } from "../site/Icon";
import { sitePath } from "../site/paths";

export type HelpTopic = "index" | "installation";
type HelpNavigationProps = { readonly currentTopic: HelpTopic };
const topics = [
  { topic: "index", path: "help/", label: "All help topics", icon: "book" },
  { topic: "installation", path: "help/install/", label: "Installation", icon: "download" },
] as const;

type TopicLinkProps = HelpNavigationProps & (typeof topics)[number];

function TopicLink({ currentTopic, topic, path, label, icon }: TopicLinkProps): ReactElement {
  const appearance = currentTopic === topic
    ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-300"
    : "font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900";
  return (
    <a href={sitePath(path)} aria-current={currentTopic === topic ? "page" : undefined} className={`flex min-h-11 items-center gap-2 rounded-md px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:focus-visible:outline-violet-300 ${appearance}`}>
      <Icon name={icon} />{label}
    </a>
  );
}

function HelpTopicLinks({ currentTopic }: HelpNavigationProps): ReactElement {
  return (
    <nav aria-label="Help topics">
      <ul className="space-y-1">
        {topics.map((topic) => <li key={topic.topic}><TopicLink currentTopic={currentTopic} {...topic} /></li>)}
      </ul>
    </nav>
  );
}

export function HelpNavigation({ currentTopic }: HelpNavigationProps): ReactElement {
  return (
    <aside className="border-b border-zinc-200 pb-3 dark:border-zinc-800 lg:border-r lg:border-b-0 lg:pr-5">
      <details className="lg:hidden">
        <summary className="min-h-11 cursor-pointer rounded-lg py-3 text-sm font-semibold text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:text-zinc-300 dark:focus-visible:outline-violet-300"><span className="inline-flex items-center gap-2"><Icon name="book" />Help topics</span></summary>
        <div className="mt-4"><HelpTopicLinks currentTopic={currentTopic} /></div>
      </details>
      <div className="hidden lg:block"><HelpTopicLinks currentTopic={currentTopic} /></div>
    </aside>
  );
}
