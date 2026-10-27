import { getTranslations } from "next-intl/server";

const steps = ["one", "two", "three"] as const;

export async function Steps() {
  const t = await getTranslations("steps");

  return (
    <section id="etapes" className="scroll-mt-24 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-verified">
          {t("kicker")}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl">
          {t("title")}
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step}>
              <p className="font-display text-5xl font-semibold text-signal tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight">
                {t(`${step}Title`)}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-ink-soft">{t(`${step}Body`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
