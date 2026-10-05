import type { ReactElement, ReactNode } from "react";

type LandingRevealProps = { readonly children: ReactNode };

export function LandingReveal({ children }: LandingRevealProps): ReactElement {
  return <div data-landing-reveal="" className="flow-root"><div>{children}</div></div>;
}
