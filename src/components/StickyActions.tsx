import { ActionLinks } from "@/components/ActionLinks";
import { getTranslations } from "next-intl/server";

export async function StickyActions() {
  const t = await getTranslations("actions");

  return (
    <div
      aria-label={t("bar")}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
    >
      <ActionLinks variant="bar" />
    </div>
  );
}
