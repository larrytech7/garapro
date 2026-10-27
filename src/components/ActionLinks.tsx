import { telHref, whatsappHref } from "@/lib/contact";
import { getTranslations } from "next-intl/server";

type Variant = "light" | "dark" | "bar";

const callClass: Record<Variant, string> = {
  light:
    "inline-flex h-14 min-w-36 items-center justify-center bg-ink px-6 text-base font-semibold text-paper hover:bg-ink-soft",
  dark: "inline-flex h-14 min-w-36 items-center justify-center bg-signal px-6 text-base font-semibold text-ink hover:bg-signal-deep",
  bar: "flex h-12 items-center justify-center bg-signal text-base font-semibold text-ink hover:bg-signal-deep",
};

const whatsappClass: Record<Variant, string> = {
  light:
    "inline-flex h-14 min-w-36 items-center justify-center border-2 border-ink px-6 text-base font-semibold text-ink hover:bg-ink hover:text-paper",
  dark: "inline-flex h-14 min-w-36 items-center justify-center border-2 border-paper px-6 text-base font-semibold text-paper hover:bg-paper hover:text-ink",
  bar: "flex h-12 items-center justify-center border border-paper text-base font-semibold text-paper hover:bg-paper hover:text-ink",
};

export async function ActionLinks({ variant }: { variant: Variant }) {
  const t = await getTranslations("actions");
  const wrap =
    variant === "bar" ? "grid grid-cols-2 gap-2" : "flex flex-col gap-3 sm:flex-row";

  return (
    <div className={wrap}>
      <a className={callClass[variant]} href={telHref()} aria-label={t("callLabel")}>
        {t("call")}
      </a>
      <a
        className={whatsappClass[variant]}
        href={whatsappHref(t("whatsappPrefill"))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsappLabel")}
      >
        {t("whatsapp")}
      </a>
    </div>
  );
}
