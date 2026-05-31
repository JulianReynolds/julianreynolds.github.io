import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
