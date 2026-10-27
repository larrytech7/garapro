import { getLocale, getTranslations } from "next-intl/server";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { Logo } from "@/components/Logo";
import { Link, getPathname } from "@/i18n/navigation";
import { displayPhone, telHref } from "@/lib/contact";

export async function Header() {
  const t = await getTranslations("nav");
  const locale = await getLocale();
  const home = getPathname({ locale, href: "/" });
  const stepsHref = home === "/" ? "/#etapes" : `${home}#etapes`;

  return (
    <header className="border-b border-line bg-paper lg:sticky lg:top-0 lg:z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" aria-label={t("home")} className="inline-flex shrink-0">
          <Logo priority alt="" className="h-28 w-auto sm:h-36" />
        </Link>
        <nav aria-label={t("main")} className="hidden items-center gap-6 lg:flex">
          <a href={stepsHref} className="text-base font-semibold hover:text-verified">
            {t("how")}
          </a>
          <Link href="/couverture" className="text-base font-semibold hover:text-verified">
            {t("coverage")}
          </Link>
          <Link href="/engagement" className="text-base font-semibold hover:text-verified">
            {t("engagement")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LocaleSwitch />
          <a
            href={telHref()}
            className="hidden text-base font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-verified sm:inline"
          >
            {displayPhone()}
          </a>
        </div>
      </div>
      <nav
        aria-label={t("main")}
        className="flex gap-5 overflow-x-auto border-t border-line px-5 py-2 text-sm font-semibold lg:hidden"
      >
        <a href={stepsHref} className="shrink-0 py-1">
          {t("how")}
        </a>
        <Link href="/couverture" className="shrink-0 py-1">
          {t("coverage")}
        </Link>
        <Link href="/engagement" className="shrink-0 py-1">
          {t("engagement")}
        </Link>
      </nav>
    </header>
  );
}
