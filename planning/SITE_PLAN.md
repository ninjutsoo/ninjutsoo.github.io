# Site Plan

## First-Stage Objective

Build four homepage design previews using the same verified content system. Do not choose a final design yet.

## Audience

- Researchers and professors
- Collaborators
- Recruiters
- Conference organizers
- Students
- Readers of publications

## Information Architecture

Use a concise academic website structure:

1. Home / design preview
2. Research
3. Publications
4. Projects
5. Activities / Events
6. CV
7. Contact

For the first stage, the four preview routes are:

- `/designs/academic`
- `/designs/modern`
- `/designs/editorial`
- `/designs/experimental`

## Homepage Requirements

The homepage should answer:

- Who: Mohammad Amin Roshani, Computer Science PhD student at Wayne State University.
- Research: health informatics, ML, NLP, trustworthy AI, LLM/VLM safety.
- Current work: LLM-powered COVID-19 risk assessment and model safety research.
- Important projects: COVID-19 risk assessment app, ACMIA, senior capstone teaching, elderly health tracking once confirmed.
- Publications: JMIR AI paper, ECAI 2025 ACMIA paper, arXiv poisoning paper.
- Work links: Google Scholar, GitHub, LinkedIn, Lab, DBLP.
- Contact: Wayne State email and downloadable CV.

## Content Architecture

- `src/content/publications/`: publication records and links.
- `src/content/projects/`: project records.
- `src/content/events/`: event and activity records.
- `src/data/profile.ts`: identity, bio, contact, skills, education, teaching, and profile links.

## Design Directions

### A. Refined Academic

Minimal, publication-oriented, typographic, restrained, with a light scholarly palette.

### B. Modern AI Researcher

Modern CS aesthetic, crisp layout, subtle gradients, clear research hierarchy, not a startup page.

### C. Editorial Research

Magazine-like typography and stronger photo placement, emphasizing research narrative.

### D. Modern Experimental

More distinctive layout and image treatment while staying appropriate for academia.

## Pages Not Yet Finalized

After user selection, production pages should likely include:

- `/`
- `/research`
- `/publications`
- `/projects`
- `/activities`
- `/cv`

Avoid empty standalone pages until enough content exists.
