type Section = {
  id: string;
  title: string;
  paragraphs: string[];
};

export function LegalProse({
  updated,
  title,
  sections,
  emphasisId,
}: {
  updated: string;
  title: string;
  sections: Section[];
  emphasisId?: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-verified">{updated}</p>
      <h1 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl">
        {title}
      </h1>
      <div className="mt-12 space-y-10">
        {sections.map((section) => {
          const emphasized = section.id === emphasisId;
          return (
            <section
              key={section.id}
              id={section.id}
              className={
                emphasized
                  ? "scroll-mt-24 border-l-4 border-signal bg-paper-deep px-5 py-5"
                  : "scroll-mt-24"
              }
            >
              <h2 className="font-display text-3xl font-semibold uppercase tracking-tight">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    emphasized && index === 0
                      ? "mt-3 text-xl font-semibold leading-relaxed"
                      : "mt-3 text-lg leading-relaxed text-ink-soft"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </section>
          );
        })}
      </div>
    </article>
  );
}
