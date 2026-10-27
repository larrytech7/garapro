import { getTranslations } from "next-intl/server";

const values = ["speed", "efficiency", "integrity"] as const;

export async function Values() {
  const t = await getTranslations("values");

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">
          {t("kicker")}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl">
          {t("title")}
        </h2>
        <dl className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
          {values.map((value) => (
            <div
              key={value}
              className="md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="font-display text-3xl font-semibold uppercase tracking-tight text-signal">
                {t(`${value}Title`)}
              </dt>
              <dd className="mt-3 text-lg leading-relaxed text-paper/80">
                {t(`${value}Body`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
