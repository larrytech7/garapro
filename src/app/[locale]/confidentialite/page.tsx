import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalProse } from "@/components/LegalProse";
import { resolveLocale } from "@/i18n/locale";
import type { LocaleParams } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(
    locale,
    "/confidentialite",
    t("privacyTitle"),
    t("privacyDescription"),
  );
}

export default async function PrivacyPage({ params }: LocaleParams) {
  resolveLocale((await params).locale);
  const t = await getTranslations("privacy");

  return (
    <LegalProse
      updated={t("updated")}
      title={t("title")}
      sections={[
        { id: "who", title: t("whoTitle"), paragraphs: [t("who1")] },
        { id: "site", title: t("siteTitle"), paragraphs: [t("site1"), t("site2")] },
        {
          id: "channel",
          title: t("channelTitle"),
          paragraphs: [t("channel1"), t("channel2")],
        },
        { id: "third", title: t("thirdTitle"), paragraphs: [t("third1")] },
        {
          id: "rights",
          title: t("rightsTitle"),
          paragraphs: [t("rights1"), t("rights2")],
        },
      ]}
    />
  );
}
