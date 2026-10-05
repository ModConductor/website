import type { ReactElement, ReactNode } from "react";
import { HelpNavigation, type HelpTopic } from "./HelpNavigation";

type HelpLayoutProps = { readonly currentTopic: HelpTopic; readonly children: ReactNode };

export function HelpLayout({ currentTopic, children }: HelpLayoutProps): ReactElement {
  return (
    <div className="mx-auto grid max-w-7xl items-start gap-6 px-6 pt-8 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-12">
      <div className="lg:col-span-3"><HelpNavigation currentTopic={currentTopic} /></div>
      <div className="min-w-0 lg:col-span-9">{children}</div>
    </div>
  );
}
