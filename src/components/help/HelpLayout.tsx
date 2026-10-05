import type { ReactElement, ReactNode } from "react";
import { HelpNavigation } from "./HelpNavigation";
import type { HelpTopic } from "./topics";

type HelpLayoutProps = { readonly currentTopic: HelpTopic; readonly children: ReactNode };

export function HelpLayout({ currentTopic, children }: HelpLayoutProps): ReactElement {
  return (
    <div className="flex flex-col items-start gap-7 px-4 pt-7 sm:px-8 lg:flex-row">
      <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-56 xl:w-64"><HelpNavigation currentTopic={currentTopic} /></div>
      <div className="w-full min-w-0 flex-1">{children}</div>
    </div>
  );
}
