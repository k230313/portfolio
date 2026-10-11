import type { ReactNode } from 'react';

type HomeSectionProps = {
  id?: string;
  children: ReactNode;
};

export default function HomeSection({ id, children }: HomeSectionProps) {
  return (
    <section id={id} className="py-12 sm:py-14 border-t border-border">
      {children}
    </section>
  );
}
