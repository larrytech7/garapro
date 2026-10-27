import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyActions } from "@/components/StickyActions";
import { getTranslations } from "next-intl/server";

export async function PageShell({ children }: { children: React.ReactNode }) {
  const t = await getTranslations("nav");

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <a href="#contenu" className="skip-link">
        {t("skip")}
      </a>
      <div className="h-1 bg-signal" />
      <Header />
      <main id="contenu" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
