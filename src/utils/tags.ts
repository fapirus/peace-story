export const slugifyTag = (tag: string) => {
	const normalized = tag
		.trim()
		.toLowerCase()
		.normalize("NFKD")
		.replace(/[^\p{Letter}\p{Number}]+/gu, "-")
		.replace(/^-+|-+$/g, "");

	const safe = normalized || tag.trim().toLowerCase();
	return encodeURIComponent(safe);
};
