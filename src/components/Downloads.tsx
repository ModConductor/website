import type { ReactElement } from "react";
import { TextLink } from "./site/Links";
import { sitePath } from "./site/paths";

export function Downloads(): ReactElement {
  return (
    <article className="mx-auto max-w-5xl px-6 pt-12 sm:px-8">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Downloads</h1>
      <p className="mt-5 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">Package availability is not verified on this page. There are no direct download links yet.</p>
      <p className="mt-6"><TextLink href={`${sitePath("help/install/")}#release-files`}>Read the installation notes →</TextLink></p>
    </article>
  );
}
