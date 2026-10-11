import { Link } from 'react-router';
import PageHeader from '../components/PageHeader';
import { getWriteupsByCategory } from '../content/siteContent';

export default function WriteupsPage() {
  const groups = getWriteupsByCategory();

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <PageHeader
        title="Labs"
        lede="Step-by-step notes from the home lab — virtualization, Windows Server, and Active Directory."
      />

      <div className="space-y-10">
        {groups.map(group => (
          <section key={group.title}>
            <h2 className="page-title text-lg mb-3 pb-2 border-b border-border">{group.title}</h2>
            <ul className="space-y-2">
              {group.posts.map(post => (
                <li key={post.slug}>
                  <Link to={`/writeups/${post.slug}`} className="text-primary hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
