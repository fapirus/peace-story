export const SUPPORTED_LOCALES = [
	{ code: "ko", label: "한국어" },
	{ code: "en", label: "English" },
] as const;

export type LocaleCode = (typeof SUPPORTED_LOCALES)[number]["code"];
export type LanguageOption = {
	code: LocaleCode;
	label: string;
	href: string;
};

export const DEFAULT_LOCALE: LocaleCode = "ko";

export const isLocale = (value: string | undefined): value is LocaleCode =>
	SUPPORTED_LOCALES.some((locale) => locale.code === value);

export const resolveLocale = (value: string | undefined): LocaleCode =>
	isLocale(value) ? value : DEFAULT_LOCALE;

export const LOCALE_LABEL_MAP: Record<LocaleCode, string> =
	Object.fromEntries(
		SUPPORTED_LOCALES.map(({ code, label }) => [code, label]),
	) as Record<LocaleCode, string>;
