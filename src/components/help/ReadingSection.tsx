import type { ReactElement, ReactNode } from "react";

type ReadingSectionProps = { readonly id: string; readonly title: string; readonly children: ReactNode };

export function ReadingSection({ id, title, children }: ReadingSectionProps): ReactElement {
  return (
    <section id={id} className="mt-9 scroll-mt-36 border-t border-violet-100 pt-8 dark:border-white/10">
      <h2 className="mb-5 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="space-y-4 leading-7 text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}
