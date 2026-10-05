import type { ReactElement } from "react";
import { Icon } from "./Icon";

export function ThemeToggle(): ReactElement {
  return <button type="button" data-theme-toggle="" role="switch" aria-label="Dark mode" aria-checked="false" className="hidden min-h-11 min-w-11 items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-100 focus-visible:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 motion-safe:transition-colors motion-safe:duration-150 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 dark:focus-visible:outline-violet-300"><span className="dark:hidden"><Icon name="moon" /></span><span className="hidden dark:block"><Icon name="sun" /></span></button>;
}
