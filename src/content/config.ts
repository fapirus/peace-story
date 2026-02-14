import { defineCollection, z } from "astro:content";
import { SUPPORTED_LOCALES, type LocaleCode } from "@/i18n/config";

const localeCodes = SUPPORTED_LOCALES.map((locale) => locale.code) as [
	LocaleCode,
	...LocaleCode[],
];

const postsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			coverImage: z.union([image(), z.string().url()]),
		tags: z.array(z.string()),
		author: z.string(),
		avatar: image(),
		excerpt: z.string().optional(),
			locale: z.enum(localeCodes),
			translationKey: z.string(),
			slugSegment: z.string(),
		publishedDate: z.date().transform((date) =>
			date.toLocaleDateString(undefined, {
				year: "numeric",
					month: "short",
					day: "numeric",
				}),
			),
		}),
});

export const collections = {
	blogs: postsCollection,
};
