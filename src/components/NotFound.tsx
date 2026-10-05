import type { ReactElement } from "react";
import { ActionLink, SecondaryLink } from "./site/Links";
import { sitePath } from "./site/paths";

export function NotFound(): ReactElement {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-16 text-center sm:px-8">
      <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">Page not found</h1>
      <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">This address does not match a page. Use the home page or the help index.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4"><ActionLink href={sitePath("")}>Home page</ActionLink><SecondaryLink href={sitePath("help/")} icon="book">Help topics</SecondaryLink></div>
    </section>
  );
}
