import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Coverage } from "@/components/Coverage";
import { resolveLocale } from "@/i18n/locale";
import type { LocaleParams } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/couverture", t("coverageTitle"), t("coverageDescription"));
}

export default async function CoveragePage({ params }: LocaleParams) {
  resolveLocale((await params).locale);
  return <Coverage heading="h1" />;
}
