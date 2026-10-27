"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitch() {
  const pathname = usePathname();
  const active = useLocale();

  return (
    <div className="flex items-center gap-2 text-sm font-semibold tracking-wide">
      {routing.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 ? (
            <span aria-hidden="true" className="text-ink/30">
              /
            </span>
          ) : null}
          <Link
            href={pathname}
            locale={locale}
            hrefLang={locale}
            aria-current={locale === active ? "page" : undefined}
              className={
              locale === active ? "text-ink" : "text-ink-soft hover:text-ink"
            }
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
