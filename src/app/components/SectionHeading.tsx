import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  action?: ReactNode;
};

export default function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-8">
      <h2 className="page-title text-xl sm:text-2xl">{title}</h2>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
