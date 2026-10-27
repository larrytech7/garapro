import { getTranslations } from "next-intl/server";

const services = ["battery", "tire", "fuel", "heat", "mechanical", "tow"] as const;

export async function Services() {
  const t = await getTranslations("services");

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-verified">
          {t("kicker")}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl">
          {t("title")}
        </h2>
        <ul className="mt-12 grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
          {services.map((service) => (
            <li key={service} className="bg-paper px-4 py-6 sm:px-6">
              <p className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                {t(service)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
