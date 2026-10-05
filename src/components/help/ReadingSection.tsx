import type { ReactElement, ReactNode } from "react";

type ReadingSectionProps = { readonly id: string; readonly title: string; readonly children: ReactNode };

export function ReadingSection({ id, title, children }: ReadingSectionProps): ReactElement {
  return (
    <section id={id} className="mt-7 scroll-mt-28 border-t border-zinc-200 pt-5 dark:border-zinc-800">
      <h2 className="mb-3 text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4 leading-7 text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}
