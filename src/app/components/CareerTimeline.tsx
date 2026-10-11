import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { education, experience } from '../content/siteContent';

export type TimelineItem = {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  bullets: string[];
  sortYear: number;
};

function parseEndYear(period: string) {
  const years = period.match(/\d{4}/g);
  if (!years?.length) return 0;
  return Number(years[years.length - 1]);
}

export function getCareerTimeline(): TimelineItem[] {
  return [
    ...experience.map(item => ({
      type: 'work' as const,
      title: item.role,
      organization: item.company,
      period: item.period,
      bullets: item.description,
      sortYear: parseEndYear(item.period),
    })),
    ...education.map(item => ({
      type: 'education' as const,
      title: item.degree,
      organization: item.institution,
      period: item.period,
      bullets: item.highlights ?? [],
      sortYear: parseEndYear(item.period),
    })),
  ].sort((a, b) => b.sortYear - a.sortYear);
}

export default function CareerTimeline() {
  const timeline = getCareerTimeline();

  return (
    <ul className="w-full divide-y divide-border border-y border-border">
      {timeline.map((item, index) => (
        <li key={`${item.type}-${item.title}-${index}`} className="py-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card">
              {item.type === 'work' ? (
                <Briefcase className="h-4 w-4 text-primary" />
              ) : (
                <GraduationCap className="h-4 w-4 text-accent" />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <h3 className="page-title text-base sm:text-lg">{item.title}</h3>
                <span
                  className={`meta self-start px-2 py-0.5 rounded shrink-0 ${
                    item.type === 'work'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-accent/10 text-accent'
                  }`}
                >
                  {item.type === 'work' ? 'Work' : 'Education'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.organization}</p>
              <p className="meta mt-1 inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {item.period}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
