import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ActionLinks } from "@/components/ActionLinks";
import { Coverage } from "@/components/Coverage";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { Values } from "@/components/Values";
import { resolveLocale } from "@/i18n/locale";
import type { LocaleParams } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/", t("homeTitle"), t("homeDescription"), true);
}

export default async function HomePage({ params }: LocaleParams) {
  resolveLocale((await params).locale);
  const t = await getTranslations("close");

  return (
    <>
      <Hero />
      <Steps />
      <Services />
      <Values />
      <Coverage showLink />
      <Faq />
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/80">{t("body")}</p>
          <div className="mt-8">
            <ActionLinks variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
