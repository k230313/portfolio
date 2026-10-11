type PageHeaderProps = {
  title: string;
  lede?: string;
};

export default function PageHeader({ title, lede }: PageHeaderProps) {
  return (
    <header className="mb-8 sm:mb-10">
      <h1 className="page-title text-3xl md:text-4xl mb-3">{title}</h1>
      {lede ? <p className="page-lede">{lede}</p> : null}
    </header>
  );
}
