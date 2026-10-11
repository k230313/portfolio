import HomeSection from '../components/HomeSection';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../content/siteContent';

export default function Contact() {
  const linkedIn = profile.socialLinks.find(link => link.label === 'LinkedIn')?.href;
  const github = profile.socialLinks.find(link => link.label === 'GitHub')?.href;

  return (
    <HomeSection id="contact">
      <SectionHeading title="Contact" />
      <p className="text-muted-foreground mb-5 max-w-xl">
        Email me if you want to talk about a role, or if you&apos;d like a copy of my resume.
      </p>
      <p className="text-sm">
        <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
          Email
        </a>
        {linkedIn ? (
          <>
            {' · '}
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              LinkedIn
            </a>
          </>
        ) : null}
        {github ? (
          <>
            {' · '}
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub
            </a>
          </>
        ) : null}
      </p>
    </HomeSection>
  );
}
