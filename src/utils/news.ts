import type { CollectionEntry } from "astro:content";
import { sitePath } from "@/utils/paths";

export type UpdateEntry = CollectionEntry<"updates">;

export const formatPostDate = (isoDate: string) =>
  new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const plainText = (markdown: string) =>
  markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_[\]`>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const postExcerpt = (entry: UpdateEntry, maxLength = 150) => {
  if (entry.data.summary) return entry.data.summary;
  const text = plainText(entry.body ?? "");
  if (!text) return "";
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
};

export const postTitle = (entry: UpdateEntry) =>
  entry.data.title ?? (postExcerpt(entry, 72) || "Update");

export const postHref = (entry: UpdateEntry) => sitePath(`/news/${entry.id}/`);
