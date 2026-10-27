import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { resolveLocale } from "@/i18n/locale";
import type { LocaleParams } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/engagement", t("engagementTitle"), t("engagementDescription"));
}

export default async function EngagementPage({ params }: LocaleParams) {
  resolveLocale((await params).locale);
  const t = await getTranslations("engagement");
  const locale = await getLocale();
  const termsHref = `${getPathname({ locale, href: "/conditions" })}#liability`;

  return (
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-verified">
        {t("kicker")}
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{t("intro")}</p>

      <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
        <section className="bg-paper-deep px-6 py-8">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight">
            {t("includeTitle")}
          </h2>
          <ul className="mt-5 space-y-3 text-lg leading-relaxed">
            <li>{t("include1")}</li>
            <li>{t("include2")}</li>
            <li>{t("include3")}</li>
          </ul>
        </section>
        <section className="bg-paper px-6 py-8">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight">
            {t("excludeTitle")}
          </h2>
          <ul className="mt-5 space-y-3 text-lg leading-relaxed text-ink-soft">
            <li>{t("exclude1")}</li>
            <li>{t("exclude2")}</li>
          </ul>
          <a
            href={termsHref}
            className="mt-5 inline-flex font-semibold text-verified underline decoration-signal decoration-2 underline-offset-4"
          >
            {t("termsLink")}
          </a>
        </section>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight">
            {t("qualTitle")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t("qual1")}</p>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">{t("qual2")}</p>
        </section>
        <section>
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight">
            {t("priceTitle")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t("price1")}</p>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">{t("price2")}</p>
        </section>
      </div>
    </article>
  );
}
