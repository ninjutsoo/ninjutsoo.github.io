# Mohammad Amin Roshani Academic Website

Astro + Tailwind CSS personal academic website for a Computer Science PhD student. The current implementation contains four design preview routes that share the same content records.

## Development

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Architecture

- `src/content/publications/` contains publication records.
- `src/content/projects/` contains research and teaching project records.
- `src/content/events/` contains event, award, and activity records.
- `src/data/profile.ts` contains stable profile, contact, education, teaching, and link data.
- `src/components/DesignHome.astro` renders the four homepage concepts from shared content.
- `public/assets/documents/` contains the public CV copy.
- `public/assets/images/` contains optimized web copies of source images.

Original source files in the repository root and `project-images/` should remain unchanged.

## Preview Routes

- `/designs/academic`
- `/designs/modern`
- `/designs/editorial`
- `/designs/experimental`

## Adding A Publication

Create a Markdown file in `src/content/publications/` with fields for title, authors, venue, year, status, and any verified links. Only add DOI, publisher, arXiv, PubMed, PMC, DBLP, PDF, code, or project links after verification.

## Adding A Project

Create a Markdown file in `src/content/projects/`. Keep the description factual and connect related publications, repositories, external links, and images only when evidence supports the relationship.

## Adding An Event

Create a Markdown file in `src/content/events/`. Use the `confidence` field to mark whether details are confirmed, strongly supported, uncertain, or unknown.

## Adding Event Photos

Place original images in a source folder such as `project-images/`, then generate optimized web copies into `public/assets/images/`. Use descriptive filenames:

```text
event-name-year-role-01.jpg
event-name-year-role-02.jpg
event-name-year-poster.jpg
```

When useful, keep a small note next to the source images with event name, date, location, role, related publication/project, and whether the images are approved for public use.

## Replacing The CV

Replace the source `resume.pdf`, then copy the public version to:

```text
public/assets/documents/Mohammad-Amin-Roshani-CV.pdf
```

## Updating Links

Edit `src/data/profile.ts` for profile links and `links.md` as the source note. Verify new profiles before publishing them.

## Updating Headshot

Replace `headshot.jpg`, generate a fresh optimized copy at `public/assets/images/headshot.webp`, and confirm the crop in all four design previews.

## GitHub Pages Deployment

The workflow in `.github/workflows/deploy.yml` builds the static Astro site on pushes to `main` and deploys `dist` to GitHub Pages. The configured production URL is:

```text
https://ninjutsoo.github.io/Personal-Website/
```

GitHub Pages root subdomains are tied to the GitHub account or organization name. A cleaner public URL such as `aminroshani.com` can be connected later by adding a custom domain and updating `SITE_URL` / `BASE_PATH` in the workflow.
