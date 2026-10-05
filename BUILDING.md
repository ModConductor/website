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

The current routes are `/`, `/download/`, `/help/`, and the ten help topics
listed in `src/components/help/topics.ts`, plus the static `404.html`.
They use shared React components that render at build time.
Reading, navigation, and automatic light/dark themes do not need JavaScript.
Help prose and fenced code use Astro's build-time Markdown renderer. A native
clipboard enhancement adds copy buttons to fenced code without a browser React
runtime. Reading and selection still work without JavaScript.

For a project base path, use Astro's supported `base` setting or build with:

```sh
pnpm build --base /project/
```

Serve `dist/` at that prefix. Shared links and public assets use Astro's
`import.meta.env.BASE_URL`. Unknown routes need the static host to serve
`404.html` with a 404 status. The website does not supply a public server.

Publish only `dist/` to a static host. The public site does not need Node,
an application engine, or a database. `pnpm preview` is a local check, not a
production server.

Keep route wrappers in `src/pages/`, React components in `src/components/`,
Markdown help prose in `src/content/help/`, document wrappers in `src/layouts/`,
and the Tailwind import in `src/styles/global.css`. Use Tailwind utilities for
styles.

## License

The website source code and help content are licensed under the GNU General
Public License, version 3 or (at your option) any later version
(`GPL-3.0-or-later`). See [LICENSE](LICENSE) for the full license text.
