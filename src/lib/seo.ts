import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function pageMetadata(
  locale: (typeof routing.locales)[number],
  href: AppPathname,
  title: string,
  description: string,
  absolute = false,
): Metadata {
  const languages: Record<string, string> = {};
  for (const entry of routing.locales) {
    languages[entry] = getPathname({ locale: entry, href });
  }
  languages["x-default"] = getPathname({
    locale: routing.defaultLocale,
    href,
  });

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical: getPathname({ locale, href }),
      languages,
    },
  };
}
