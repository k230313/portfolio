import { motion } from 'motion/react';
import { Link } from 'react-router';
import PageHeader from '../components/PageHeader';
import { getWriteupsByCategory } from '../content/siteContent';

export default function WriteupsPage() {
  const groups = getWriteupsByCategory();
  let itemIndex = 0;

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title="Labs"
          lede="Step-by-step notes from the home lab — virtualization, Windows Server, Active Directory, and Splunk."
        />

        <div className="space-y-10">
          {groups.map((group, groupIndex) => (
            <motion.section
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 + groupIndex * 0.06 }}
            >
              <h2 className="page-title text-lg mb-3 pb-2 border-b border-border">{group.title}</h2>
              <ul className="space-y-2">
                {group.posts.map(post => {
                  const delay = 0.12 + itemIndex * 0.04;
                  itemIndex += 1;
                  return (
                    <motion.li
                      key={post.slug}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay }}
                    >
                      <Link
                        to={`/labs/${post.slug}`}
                        className="group flex items-baseline justify-between gap-4"
                      >
                        <span className="text-primary group-hover:underline">{post.title}</span>
                        <time
                          dateTime={post.date}
                          className="shrink-0 text-sm text-muted-foreground"
                        >
                          {post.displayDate}
                        </time>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
