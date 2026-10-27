import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/couverture": {
      fr: "/couverture",
      en: "/coverage",
    },
    "/engagement": {
      fr: "/engagement",
      en: "/commitment",
    },
    "/confidentialite": {
      fr: "/confidentialite",
      en: "/privacy",
    },
    "/conditions": {
      fr: "/conditions",
      en: "/terms",
    },
  },
});

export type AppPathname = keyof typeof routing.pathnames;
export type LocaleParams = { params: Promise<{ locale: string }> };
