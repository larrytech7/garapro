import { getTranslations } from "next-intl/server";
import { cities, type CityId, type RegionId } from "@/data/cities";
import { Link } from "@/i18n/navigation";

export async function Coverage({
  heading = "h2",
  showLink = false,
}: {
  heading?: "h1" | "h2";
  showLink?: boolean;
}) {
  const t = await getTranslations("coverage");
  const cityNames = await getTranslations("cities");
  const regions = await getTranslations("regions");
  const Title = heading;

  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-verified">
          {t("kicker")}
        </p>
        <Title className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl">
          {t("title")}
        </Title>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{t("intro")}</p>
        <ul className="mt-10 grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {cities.map((city) => (
            <li key={city.id} className="bg-paper px-4 py-5">
              <p className="font-display text-2xl font-semibold uppercase tracking-tight">
                {cityNames(city.id as CityId)}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{regions(city.region as RegionId)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-2xl border-l-4 border-signal pl-5">
          <h3 className="font-display text-3xl font-semibold uppercase tracking-tight">
            {t("outTitle")}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">{t("outBody")}</p>
        </div>
        {showLink ? (
          <Link
            href="/couverture"
            className="mt-8 inline-flex font-semibold text-verified underline decoration-signal decoration-2 underline-offset-4"
          >
            {t("more")}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
