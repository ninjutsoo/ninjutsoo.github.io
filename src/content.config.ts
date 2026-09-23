import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    status: z.string(),
    doi: z.string().optional(),
    publisher: z.string().url().optional(),
    arxiv: z.string().url().optional(),
    pubmed: z.string().url().optional(),
    pmc: z.string().url().optional(),
    dblp: z.string().url().optional(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    project: z.string().optional(),
    abstract: z.string().optional(),
    bibtex: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    status: z.string(),
    institution: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    publications: z.array(z.string()).default([]),
    repositories: z.array(linkSchema).default([]),
    externalLinks: z.array(linkSchema).default([]),
    images: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/updates" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tag: z.string().optional(),
    image: z.string().optional(),
    externalLink: z.string().url().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    eventType: z.string(),
    organization: z.string().optional(),
    date: z.string().optional(),
    location: z.string().optional(),
    role: z.string().optional(),
    description: z.string(),
    relatedProject: z.string().optional(),
    relatedPublication: z.string().optional(),
    externalLink: z.string().url().optional(),
    images: z.array(z.string()).default([]),
    confidence: z.enum(["Confirmed", "Strongly supported", "Uncertain", "Unknown"]),
  }),
});

export const collections = { publications, projects, events, updates };
