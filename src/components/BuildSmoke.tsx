import type { ReactElement } from "react";

type BuildSmokeProps = {
  readonly title: string;
};

export function BuildSmoke({ title }: BuildSmokeProps): ReactElement {
  return (
    <main className="p-8 text-slate-900">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-4">This React component is rendered to static HTML at build time.</p>
    </main>
  );
}
