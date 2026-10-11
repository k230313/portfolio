import { Link } from 'react-router';
import HomeSection from '../components/HomeSection';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../content/siteContent';

const overview = [
  { name: 'CompTIA A+', note: 'Done' },
  { name: 'Microsoft SC-900', note: 'Done' },
  { name: 'Cisco CCNA', note: 'In progress' },
  { name: 'CompTIA Security+', note: 'In progress' },
];

export default function CertificationsOverview() {
  return (
    <HomeSection id="certifications-preview">
      <SectionHeading
        title="Certifications"
        action={
          <Link to="/certifications" className="text-sm text-muted-foreground hover:text-foreground">
            See all
          </Link>
        }
      />
      <ul className="space-y-4">
        {overview.map(item => {
          const cert = certifications.find(entry => entry.name === item.name);
          return (
            <li key={item.name} className="flex items-center gap-3">
              {cert?.issuerLogo ? (
                <img
                  src={cert.issuerLogo}
                  alt=""
                  className="h-7 w-7 object-contain shrink-0"
                />
              ) : null}
              <span className="page-title text-base">{item.name}</span>
              <span className="meta">{item.note}</span>
            </li>
          );
        })}
      </ul>
    </HomeSection>
  );
}
