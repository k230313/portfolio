import HomeSection from '../components/HomeSection';
import SectionHeading from '../components/SectionHeading';
import { education } from '../content/siteContent';

export default function Education() {
  return (
    <HomeSection id="education">
      <SectionHeading title="Education" />
      <ul className="space-y-5">
        {education.map(item => (
          <li key={item.degree} className="flex items-start gap-3">
            {item.logo ? (
              <img
                src={item.logo}
                alt=""
                className="h-8 w-8 mt-0.5 object-contain shrink-0"
              />
            ) : null}
            <div className="min-w-0">
              <h3 className="page-title text-lg">{item.degree}</h3>
              <p className="meta mt-1">
                {item.institution} · {item.period}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
