import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="mx-auto max-w-xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-ink-soft">{t("body")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex font-semibold text-verified underline decoration-signal decoration-2 underline-offset-4"
      >
        {t("back")}
      </Link>
    </div>
  );
}
