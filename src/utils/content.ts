import type { CollectionEntry } from "astro:content";

export const getSlugSegment = (entry: CollectionEntry<"blogs">) => {
	const [, ...rest] = entry.slug.split("/");
	return rest.length > 0 ? rest.join("/") : entry.slug;
};
