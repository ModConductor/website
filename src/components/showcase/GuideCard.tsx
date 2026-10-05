import type { ReactElement } from "react";
import { Icon, type IconName } from "../site/Icon";

type GuideCardProps = { readonly href: string; readonly title: string; readonly description: string; readonly icon: IconName };

export function GuideCard({ href, title, description, icon }: GuideCardProps): ReactElement {
  return <a href={href} className="flex min-h-11 items-start gap-3 border-t border-zinc-200 py-3 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:border-zinc-800 dark:hover:text-violet-200 dark:focus-visible:outline-violet-300"><span className="pt-0.5"><Icon name={icon} /></span><span><strong className="block text-sm font-semibold">{title}</strong><span className="mt-1 block text-sm leading-6 text-zinc-500 dark:text-zinc-400">{description}</span></span></a>;
}
