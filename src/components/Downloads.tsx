import type { ReactElement, ReactNode } from "react";
import { MarkdownContent } from "./help/MarkdownContent";

type DownloadsProps = { readonly children: ReactNode };

export function Downloads({ children }: DownloadsProps): ReactElement {
  return (
    <article className="px-4 pt-7 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Downloads</h1>
      <MarkdownContent>{children}</MarkdownContent>
    </article>
  );
}
