import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/Logo";
import { Link } from "@/i18n/navigation";
import { displayPhone, telHref } from "@/lib/contact";

export async function Footer() {
  const t = await getTranslations("nav");
  const footer = await getTranslations("footer");

  return (
    <footer className="bg-ink pb-24 text-paper lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={t("home")} className="inline-flex">
            <Logo alt="" onDark className="h-40 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-base text-paper/75">{footer("tagline")}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-signal">
            {t("main")}
          </p>
          <ul className="mt-3 space-y-2 text-base">
            <li>
              <Link href="/couverture" className="hover:text-signal">
                {t("coverage")}
              </Link>
            </li>
            <li>
              <Link href="/engagement" className="hover:text-signal">
                {t("engagement")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-signal">
            {footer("legal")}
          </p>
          <ul className="mt-3 space-y-2 text-base">
            <li>
              <Link href="/confidentialite" className="hover:text-signal">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/conditions" className="hover:text-signal">
                {t("terms")}
              </Link>
            </li>
            <li>
              <a href={telHref()} className="hover:text-signal">
                {displayPhone()}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
