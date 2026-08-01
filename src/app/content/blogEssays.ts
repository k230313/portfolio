export type BlogEssay = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  readTime: string;
  readLabel: string;
  excerpt: string;
  coverImage: string;
  contentHtml: string;
};

function paragraphs(...blocks: string[]): string {
  return blocks.map(text => `<p>${text}</p>`).join('\n');
}

export const blogEssays: BlogEssay[] = [
  {
    slug: 'sc900-reflection',
    title: 'Studying for SC-900 While Job Hunting: What Surprised Me',
    date: '2026-08-01',
    displayDate: 'Aug 1, 2026',
    readTime: '3 min read',
    readLabel: 'Read · 3 min',
    excerpt:
      'I picked SC-900 because job ads kept mentioning Entra ID, MFA, and Conditional Access. What I learned surprised me.',
    coverImage: '/images/blog-sc900.png',
    contentHtml: paragraphs(
      'I picked SC-900 almost out of necessity. I was deep into job applications, and I kept noticing the same handful of terms showing up again and again in the job ads I was reading — Entra ID, MFA, Conditional Access, identity and access management. I\'d heard of most of these, in the loose way you hear about things adjacent to your field, but I couldn\'t have explained any of them properly if asked. So I decided to actually learn them properly instead of hoping nobody would ask.',
      'What surprised me first was how much of security is really about identity, not just "firewalls and antivirus," which is the mental image I had going in. A huge amount of what SC-900 covers is about proving who someone is and what they\'re allowed to touch — MFA, Conditional Access policies, identity governance — rather than the more dramatic "hacker vs. firewall" picture most people (including past me) associate with cybersecurity. It\'s less cinematic than I expected, and more foundational than I expected.',
      'The second surprise was how directly it connected to things I\'d already done without realizing it. I\'d been building a Windows Server home lab around the same time, working with Active Directory — creating users, managing groups, promoting a domain controller. Studying SC-900 alongside that made me understand <em>why</em> modern identity systems like Entra ID exist in the first place: as an evolution of exactly the kind of on-prem AD environment I was building by hand, extended to work across cloud services instead of just one internal network. Seeing both sides side by side — the traditional, hands-on version and the modern cloud-based version — made both make more sense than either would have on its own.',
      'The last thing that struck me was more personal than technical. Studying this while actively job hunting meant I wasn\'t studying in the abstract — every concept had an immediate, practical reason to exist, because I could see exactly which job ad was asking about it. That made it easier to stay motivated than studying purely for its own sake ever has been for me. It\'s a small thing, but it\'s changed how I plan to study going forward: pairing whatever I\'m learning with something concrete I\'m actually trying to get, rather than studying material in isolation and hoping it becomes useful someday.',
    ),
  },
  {
    slug: 'career-pivot',
    title: 'From Customer Support to Infrastructure: My Career Pivot',
    date: '2026-07-10',
    displayDate: 'Jul 10, 2026',
    readTime: '4 min read',
    readLabel: 'Read · 4 min',
    excerpt:
      'Nearly a decade in support roles taught me how to explain hard things simply. Now I\'m pivoting toward infrastructure — and building the proof myself.',
    coverImage: '/images/blog-customer-support.png',
    contentHtml: paragraphs(
      'For most of my career, my job title has said some version of "customer service" or "technical support." Help desk, technical support representative, customer care associate — different companies, different logos, but a fairly consistent thread running through nearly a decade of work: someone has a problem, and my job is to fix it, quickly and clearly, without making them feel stupid for not understanding it themselves.',
      'I don\'t regret any of it. If anything, it\'s given me something I don\'t think I\'d have gotten from a more technical-only path from the start: a genuine, practiced ability to explain complicated things simply, and a real understanding of what it\'s like to be on the other end of a broken system, frustrated and just wanting it to work again. That\'s not nothing. A lot of technically brilliant people are bad at explaining what they know, and I\'ve had a decade of forced practice at exactly that.',
      'But somewhere along the way, I started wanting to work <em>on</em> the systems, not just help people who were stuck using them. The moment that crystallized it for me was a DNS issue I worked through for a hosting customer — the actual troubleshooting, tracing through records and configurations to find the real cause, was the most engaged I\'d felt at work in a long time. I wanted more of that, and less of the surface-level "have you tried turning it off and on again" work that fills most support queues.',
      'So I went back to study — a Bachelor of IT, alongside a Diploma in Cyber Security — while continuing to work. And rather than waiting for a job to teach me infrastructure and networking skills, I started building things myself: a home lab, a Windows Server environment with Active Directory, CCNA study, and eventually SC-900. Partly because I wanted the knowledge, but partly because I wanted to prove to myself — and eventually to an employer — that the interest wasn\'t abstract. That I\'d actually go build the thing on a weekend because I wanted to understand it, not because someone assigned it to me.',
      'I\'m still early in this pivot. I know a support/BPO background doesn\'t automatically read as "infrastructure-ready" to every hiring manager, and I\'ve had interviews confirm that directly — being told plainly that I don\'t yet have enterprise-scale experience was a useful, if humbling, thing to hear. But I\'d rather know that clearly than find out the hard way after landing somewhere I couldn\'t actually deliver in. For now, my plan is straightforward: keep building the lab, keep stacking certifications that are actually relevant to where I\'m applying, and keep being honest — with employers and with myself — about exactly where I am on that path.',
    ),
  },
  {
    slug: 'leading-ceda',
    title: "Leading My Capstone Team: What I Learned Managing CEDA's Development",
    date: '2026-06-02',
    displayDate: 'Jun 2, 2026',
    readTime: '4 min read',
    readLabel: 'Read · 4 min',
    excerpt:
      'CEDA started as a capstone requirement — a campus event discovery app. It ended up teaching me more about leading people than about writing code.',
    coverImage: '/images/ceda.png',
    contentHtml: paragraphs(
      'CEDA started as a capstone requirement — a campus event discovery app, built by a small team, graded at the end of the term. It ended up teaching me more about leading people than about writing code, which wasn\'t what I expected going in.',
      'I took on the role of leading the team and handling full-stack integration — connecting the React frontend, the Node.js/Express backend, and the MySQL database into something that actually worked as one system, rather than three separate pieces that happened to sit in the same repository. On top of that, I ended up owning the parts nobody else on the team wanted to touch: managing the GitHub repository and branching strategy, setting up the actual production deployment, buying and configuring the domain, wiring up DNS, setting up Nginx and PM2 on the server, and getting HTTPS working properly through Cloudflare Tunnel.',
      'The technical side, honestly, wasn\'t the hardest part — we had AI tools helping speed up a lot of the actual coding, and I was upfront with the team about using them rather than pretending every line was hand-typed. The harder part was everything around the code: keeping a team of people with different skill levels and different levels of investment moving in the same direction, making integration decisions that other people\'s work depended on, and being the one accountable when something broke in production rather than just in a local environment.',
      'I learned that leading a small team is less about being the most technically skilled person in the room and more about being the person willing to make a decision when nobody else will, and then actually following through on the unglamorous parts — the deployment, the DNS, the repo hygiene — that don\'t show up in a demo but that everything else depends on. Nobody looks at CEDA and marvels at the Nginx config, but if I hadn\'t gotten it right, none of the rest of the project would have been visible to anyone outside our team.',
      'If I did it again, I\'d set clearer expectations earlier about who owns what, rather than naturally absorbing the infrastructure work myself because I was comfortable with it and no one else stepped up. It worked out, but it also meant I was busier than I needed to be for stretches of the project. That\'s probably the most useful lesson from the whole thing: taking ownership is good, but it\'s worth checking whether you\'re taking ownership because it\'s genuinely yours to own, or just because it\'s easier than asking someone else to step up.',
    ),
  },
  {
    slug: 'dns-lesson',
    title: 'What a Real DNS Issue Taught Me About Troubleshooting',
    date: '2026-01-22',
    displayDate: 'Jan 22, 2026',
    readTime: '3 min read',
    readLabel: 'Read · 3 min',
    excerpt:
      'A customer\'s website and email went down after domain changes. Jumping to quick fixes almost cost me the real answer.',
    coverImage: '/images/blog-dns.png',
    contentHtml: paragraphs(
      'Early in my time doing hosting support, I got a case that\'s stuck with me since — a customer\'s website had gone down, and their email had stopped receiving messages at the same time, right after they\'d made some changes to their domain settings.',
      'My first instinct, like most people\'s, was to reach for the obvious fixes. Restart the service. Reapply default settings. See if it just needed time to sort itself out. None of that worked, and I understood why pretty quickly: those fixes assume the problem is somewhere in the application layer, but this wasn\'t an application problem. It was a DNS problem, and DNS doesn\'t care how many times you restart a service — if the records are wrong, the records are wrong.',
      'So I slowed down and actually worked through it properly. I checked the A record, the MX records, the TTL settings — methodically, one at a time, rather than guessing at what "felt" like the likely cause. Eventually I found it: a misconfigured record from the changes the customer had made. Once I fixed it, both the website and email came back within the expected propagation window.',
      'The technical fix wasn\'t actually the hard part, looking back. The harder part was explaining it to the customer. DNS isn\'t intuitive if you don\'t already understand it — telling someone "your email doesn\'t work because a record pointing to a mail server is wrong" doesn\'t mean much without context. I had to slow down again, this time not to diagnose the problem, but to explain it clearly enough that a non-technical person could follow what had happened and feel confident it was actually fixed, not just "probably fine now."',
      'That case taught me something I still think about: the instinct to jump to a quick fix is usually a sign you haven\'t actually understood the problem yet. The more experienced I\'ve gotten, the more I\'ve learned to resist that instinct — to trace the actual chain of cause and effect instead of pattern-matching to the nearest familiar symptom. It\'s slower in the moment, but it\'s the only way to fix something properly instead of just making it look fixed for a while.',
    ),
  },
  {
    slug: 'why-home-lab',
    title: 'Why I Built My Own Home Lab Instead of Just Studying for Certs',
    date: '2026-01-15',
    displayDate: 'Jan 15, 2026',
    readTime: '4 min read',
    readLabel: 'Read · 4 min',
    excerpt:
      'Videos and flashcards got me part of the way. Building a real lab turned "I studied this" into "I did this."',
    coverImage: '/images/g3.jpg',
    contentHtml: paragraphs(
      'When I started studying for my CCNA, I did what most people do — videos, practice questions, flashcards. It worked, to a point. I could answer questions correctly, but I noticed I wasn\'t always sure <em>why</em> the answer was correct. I understood the theory, but I hadn\'t actually touched the thing the theory was describing.',
      'That bothered me enough to do something about it.',
      'I ended up buying a small mini PC — nothing fancy, just enough to run Proxmox — and decided I\'d build a proper home lab instead of just reading about one. Part of the motivation was practical: I wanted to stop paying for cloud services and hosting when I could run the same things myself for a fraction of the cost. But honestly, the bigger reason was that I wanted to actually <em>feel</em> what it\'s like to deploy something real — not a sandbox exercise with the answer already provided, but something with a genuine risk of me getting it wrong.',
      'The first few weeks were humbling. Things that seemed simple in a course — setting up a virtual machine, configuring networking between VMs, exposing a service securely — took much longer than expected once I was doing it for real, with no one checking my work as I went. I broke my own network more than once. I locked myself out of a VM because I misconfigured SSH before I properly understood Tailscale. None of that happens when you\'re just answering multiple-choice questions.',
      'But that\'s exactly why it was worth doing. Every mistake taught me something a course wouldn\'t have. I learned Tailscale properly because I needed remote access to my own server without exposing it directly to the internet — not because a slide told me to. I learned Windows Server and Active Directory hands-on, promoting my own domain controller and managing users through ADUC, because I wanted proof — for myself, more than anyone else — that I could actually do the things I was studying, not just describe them.',
      'I\'m still building on it. The lab keeps growing as I learn more, and every new thing I add to it forces me to understand something I would have otherwise just memorized. That\'s the real value of building it myself: it turned "I studied this" into "I did this," which is a very different feeling — and, I think, a very different kind of knowledge.',
    ),
  },
];

export function getBlogEssay(slug: string) {
  return blogEssays.find(post => post.slug === slug);
}
