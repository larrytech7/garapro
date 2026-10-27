import { getTranslations } from "next-intl/server";

const items = ["one", "two", "three", "four"] as const;

export async function Faq() {
  const t = await getTranslations("faq");

  return (
    <section className="border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-verified">
          {t("kicker")}
        </p>
        <h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl">
          {t("title")}
        </h2>
        <div className="mt-10 max-w-3xl border-t border-line">
          {items.map((item) => (
            <details key={item} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-2xl font-semibold uppercase tracking-tight marker:content-none [&::-webkit-details-marker]:hidden">
                {t(`${item}Q`)}
                <span aria-hidden="true" className="text-signal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-5 text-lg leading-relaxed text-ink-soft">{t(`${item}A`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
