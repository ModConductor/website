import type { ReactElement, ReactNode } from "react";
import { Icon } from "../site/Icon";

type MarkdownContentProps = { readonly children: ReactNode };

export function MarkdownContent({ children }: MarkdownContentProps): ReactElement {
  return (
    <div data-markdown className="min-w-0 leading-7 text-zinc-700 dark:text-zinc-300 [&_h2]:mt-8 [&_h2]:scroll-mt-28 [&_h2]:border-t [&_h2]:border-zinc-200 [&_h2]:pt-5 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight dark:[&_h2]:border-zinc-800 [&_h2]:text-zinc-900 dark:[&_h2]:text-zinc-100 [&_h3]:mt-6 [&_h3]:scroll-mt-28 [&_h3]:font-semibold [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-2 [&_a]:break-words [&_a]:rounded-sm [&_a]:text-violet-700 [&_a]:underline [&_a]:underline-offset-4 dark:[&_a]:text-violet-300 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-violet-600 dark:[&_a:focus-visible]:outline-violet-300 [&_code]:rounded [&_code]:bg-zinc-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:break-words dark:[&_code]:bg-zinc-800 [&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-zinc-200 [&_pre]:bg-zinc-50 [&_pre]:p-4 [&_pre]:leading-6 dark:[&_pre]:border-zinc-800 dark:[&_pre]:bg-zinc-900 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:break-normal dark:[&_pre_code]:bg-transparent [&_table]:my-4 [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_table]:text-left [&_table]:text-sm [&_th]:border-b [&_th]:border-zinc-300 [&_th]:px-3 [&_th]:py-3 dark:[&_th]:border-zinc-700 [&_td]:border-b [&_td]:border-zinc-200 [&_td]:px-3 [&_td]:py-3 dark:[&_td]:border-zinc-800 [&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:border-zinc-300 [&_blockquote]:pl-4 dark:[&_blockquote]:border-zinc-700">
      {children}
      <template data-code-controls>
        <div data-code-actions className="flex min-h-11 items-center justify-end gap-3 px-1">
          <output data-copy-feedback aria-live="polite" className="min-w-0 text-sm leading-5 text-zinc-600 dark:text-zinc-400" />
          <button data-copy-code type="button" aria-label="Copy code" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus-visible:outline-violet-300"><Icon name="copy" />Copy</button>
        </div>
      </template>
    </div>
  );
}
