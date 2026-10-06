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
Help and download prose use Astro's build-time Markdown renderer.
Astro Expressive Code renders fenced code with syntax highlighting and copy
buttons. Reading and selection still work without JavaScript.

The published project path is `/website/`. Build it with Astro's supported CLI:

```sh
pnpm exec astro build --base /website/
```

For a root-path local build, use `pnpm build` without the base option.

Serve a base-path build at that prefix and a root-path build at `/`.
Shared links and public assets use Astro's
`import.meta.env.BASE_URL`. Unknown routes need the static host to serve
`404.html` with a 404 status. The website does not supply a public server.

Publish only `dist/` to a static host. The public site does not need Node,
an application engine, or a database. `pnpm preview` is a local check, not a
production server.

Keep route wrappers in `src/pages/`, React components in `src/components/`,
Markdown help prose in `src/content/help/`, document wrappers in `src/layouts/`,
and the Tailwind import in `src/styles/global.css`. Use Tailwind utilities for
styles.

## GitHub Pages and PR checks

The deployment target is the public `ModConductor/website` repository and
<https://modconductor.github.io/website/>, with no custom domain.

Set the repository Pages source to **GitHub Actions** before deployment.
`.github/workflows/pages.yml` builds on pushes to `main`, uploads only `dist/`,
and deploys that artifact in a separate job through the `github-pages`
environment. It does not publish application packages or GitHub releases.

`.github/workflows/review.yml` runs lint and type checks in separate jobs for
pull requests targeting `main`. Each job installs with the frozen lockfile.
Ordinary branch pushes do not run these review checks; main pushes run the
static deployment workflow. Both workflows use Node 24.21.0, pnpm 12.9.1,
and current major action tags. No browser or performance harness runs in CI.

## License

The website source code and help content are licensed under the GNU General
Public License, version 3 or (at your option) any later version
(`GPL-3.0-or-later`). See [LICENSE](LICENSE) for the full license text.
