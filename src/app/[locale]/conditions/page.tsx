import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalProse } from "@/components/LegalProse";
import { resolveLocale } from "@/i18n/locale";
import type { LocaleParams } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/conditions", t("termsTitle"), t("termsDescription"));
}

export default async function TermsPage({ params }: LocaleParams) {
  resolveLocale((await params).locale);
  const t = await getTranslations("terms");

  return (
    <LegalProse
      updated={t("updated")}
      title={t("title")}
      emphasisId="liability"
      sections={[
        {
          id: "channel",
          title: t("channelTitle"),
          paragraphs: [t("channel1"), t("channel2")],
        },
        {
          id: "minutes",
          title: t("minutesTitle"),
          paragraphs: [t("minutes1"), t("minutes2")],
        },
        {
          id: "mechanic",
          title: t("mechanicTitle"),
          paragraphs: [t("mechanic1"), t("mechanic2")],
        },
        {
          id: "liability",
          title: t("liabilityTitle"),
          paragraphs: [t("liability1"), t("liability2")],
        },
        { id: "client", title: t("clientTitle"), paragraphs: [t("client1")] },
        { id: "contact", title: t("contactTitle"), paragraphs: [t("contact1")] },
      ]}
    />
  );
}
