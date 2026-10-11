interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/20 meta text-accent">
      {name}
    </span>
  );
}
