# Build the website

Enter the pinned development shell:

```sh
nix develop
pnpm install --frozen-lockfile
```

The shell supplies Node 24 LTS and a pnpm launcher. pnpm selects version 12.9.1
from `package.json`. Without Nix, use Node 24.21.0 or a newer Node 24 release
and pnpm 12.9.1.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server at `http://localhost:4321/`. |
| `pnpm check` | Check TypeScript, React components, and Astro route wrappers. |
| `pnpm lint` | Lint TS/TSX source and build configuration with Oxlint. |
| `pnpm build` | Emit static HTML and assets into `dist/`. |
| `pnpm preview` | Serve the built output locally at `http://localhost:4321/`. |

The only current route, `/`, is a build smoke page, not the production design.
Its React component renders at build time, without a client hydration directive.
The page can be read with JavaScript disabled.

Publish only `dist/` to a static host. The public site does not need Node,
an application engine, or a database. `pnpm preview` is a local check, not a
production server.

Keep route wrappers in `src/pages/`, React components in `src/components/`,
and the Tailwind import in `src/styles/global.css`. Use Tailwind utilities for
styles. No public deployment or license is selected yet.
