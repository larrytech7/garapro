import { ActionLinks } from "@/components/ActionLinks";
import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="grid lg:min-h-[calc(100svh-11rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div className="flex flex-col justify-center px-5 pt-8 pb-6 sm:px-8 sm:py-14 lg:py-20 lg:pr-16 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-verified">
          {t("kicker")}
        </p>
        <h1 className="mt-4 max-w-xl font-display text-6xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-7xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{t("promise")}</p>
        <div className="mt-8">
          <ActionLinks variant="light" />
        </div>
      </div>
      <div className="road-panel flex flex-col justify-center bg-ink px-5 pt-8 pb-28 text-paper sm:px-8 lg:px-12 lg:py-12">
        <p className="font-display text-[6.25rem] leading-[0.8] font-semibold tracking-tight text-signal tabular-nums sm:text-[9rem] lg:text-[11rem]">
          {t("figureValue")}
          <span className="ml-2 align-baseline text-3xl font-medium tracking-normal text-paper sm:text-4xl">
            {t("figureUnit")}
          </span>
        </p>
        <div className="arrive-rule mt-5 h-1 w-28 bg-signal" />
        <p className="mt-4 max-w-xs text-lg leading-snug text-paper/80">{t("figureCaption")}</p>
      </div>
    </section>
  );
}
