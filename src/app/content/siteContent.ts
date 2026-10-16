import blogPosts from './blogPosts.json';

export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  firstName: string;
  tagline: string;
  shortBio: string;
  heroBio: string;
  heroBioSecondary?: string;
  aboutBio: string[];
  email: string;
  heroImage: string;
  aboutImage: string;
  socialLinks: SocialLink[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string[];
  link: string;
  tech: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  highlights?: string[];
  link?: string;
  logo?: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  issuerIcon?: string;
  issuerLogo?: string;
  date: string;
  expiryDate: string | null;
  credentialId: string | null;
  verificationUrl: string | null;
  skills: string[];
  status: 'completed' | 'in-progress';
  progress: number;
  summary: string;
  image: string;
};

export type ProjectScreenshot = {
  id: number;
  title: string;
  description: string;
  src?: string;
  alt?: string;
  placeholder?: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  featuredOnHome: boolean;
  status: 'completed' | 'in-progress' | 'ongoing';
  date: string;
  duration: string;
  readingTime: string;
  tech: string[];
  coverImage?: string;
  coverLabel?: string;
  links: {
    demo: string | null;
    github: string | null;
  };
  summary: {
    problem: string;
    solution: string;
    outcome: string;
  };
  detailBody: string[];
  screenshots: ProjectScreenshot[];
  relatedBlogSlugs?: string[];
  capstone?: boolean;
};

export type BlogPost = {
  slug: string;
  url: string;
  title: string;
  description: string;
  date: string;
  displayDate: string;
  readTime: string;
  author: string;
  series: string;
  tags: string[];
  featuredImage: string;
  contentHtml: string;
};

export const profile: Profile = {
  name: 'Adamson Buliboli',
  firstName: 'Adamson',
  tagline: 'Graduate IT Professional',
  shortBio: 'Graduate IT professional in Newcastle, available for Sydney. Focused on networking and infrastructure.',
  heroBio:
    'I spent years fixing other people’s computers and tickets. Now I’m aiming at networking and infrastructure.',
  heroBioSecondary:
    'A+ and SC-900 are done. The home lab, CCNA, and Security+ are how I’m proving I can work on the systems too.',
  aboutBio: [
    'I came up through customer support and on-site computer work in the Philippines — chat and tickets at TTEC, TDCX, and Continuum, a stretch of hosting support at one.com, and hardware jobs on the side.',
    'I finished a Bachelor of IT at Kent in 2026. CompTIA A+ and Microsoft SC-900 are done. I’m studying CCNA and Security+, and I run a small home lab so the study isn’t only on paper.',
    'That lab hosts this site. I also built a campus event app for my capstone, a client real estate site on the same stack, a finance tracker I actually use, and a local LLM setup for CCNA study.',
  ],
  email: 'adamson.buliboli@gmail.com',
  heroImage: '/images/me-main.jpg',
  aboutImage: '/images/me-main.jpg',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/k230313' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adamsonb/' },
    { label: 'Facebook', href: 'https://www.facebook.com/adamson.794209' },
    { label: 'Instagram', href: 'https://www.instagram.com/a_damn.son/' },
  ],
};

export const stats = [
  { label: 'Years in Support', value: '10+' },
  { label: 'Certifications', value: '5' },
  { label: 'Projects', value: '5' },
];

export const aboutSkillCards = [
  {
    title: 'Technical Support',
    description:
      'Hardware & software troubleshooting, Windows & macOS support, remote desktop tools, ticketing systems (Zendesk)',
  },
  {
    title: 'Networking Fundamentals',
    description:
      'TCP/IP, LAN/WAN, DNS, FTP/SFTP/SSH — building on this through CCNA coursework (in progress)',
  },
  {
    title: 'Identity & Access',
    description:
      'Account and access support, password resets, and troubleshooting — extended into Microsoft Entra ID, MFA, and Conditional Access through SC-900 certification',
  },
  {
    title: 'Security & Compliance',
    description:
      'Foundational knowledge of Microsoft Defender, Microsoft Purview, and data governance concepts through SC-900 certification, alongside CompTIA Security+ (in progress) for broader security fundamentals',
  },
  {
    title: 'Self-Hosting & Labs',
    description:
      'Ubuntu, Apache, Tailscale, Proxmox, Splunk — hands-on homelab infrastructure, hosting, and log monitoring practice',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Self-Employed (Philippines)',
    role: 'IT Support & Computer Technician',
    period: '2014 - 2023',
    description: [
      'Delivered end-to-end IT support for individual and business clients, diagnosing and resolving hardware, software, and operating system issues on-site.',
      'Installed, configured, and repaired desktop and laptop systems, including OS installation, software configuration, and peripheral setup.',
      'Configured and deployed point-to-point wireless network links for clients with limited ISP access, extending reliable internet connectivity in underserved areas.',
      'Maintained service records and communicated directly with clients throughout each job, ensuring clear explanations and full functionality after every repair.',
    ],
    link: '',
    tech: ['Hardware', 'Windows', 'Wireless Networking'],
  },
  {
    company: 'group.one (formerly one.com)',
    role: 'IT Customer Service Representative',
    period: '2023',
    description: [
      'Handled 50–60+ customer emails and tickets daily via Zendesk, resolving hosting, domain, and website builder issues while maintaining response quality — recognized with positive Trustpilot feedback.',
      'Configured FTP/SFTP/SSH access for customers on shared hosting and guided them through basic connectivity and configuration tasks.',
      'Troubleshot DNS propagation and domain configuration issues, guiding customers through record changes to restore website and email functionality.',
    ],
    link: 'https://one.com',
    tech: ['Zendesk', 'DNS', 'FTP/SFTP/SSH', 'Shared Hosting'],
  },
  {
    company: 'Continuum Global Solutions',
    role: 'Customer Care Associate',
    period: '2022 - 2023',
    description: [
      'Diagnosed and resolved plan, device, billing, and account issues for customers via web-based chat, navigating multiple internal systems to identify root causes.',
      'Documented issue resolutions clearly and consistently, maintaining accurate records across a high volume of customer interactions.',
    ],
    link: 'https://www.continuumgbl.com/',
    tech: ['Live Chat', 'Billing Support', 'Account Support'],
  },
  {
    company: 'TDCX',
    role: 'Technical Support Advisor',
    period: '2021 - 2022',
    description: [
      'Handled 3–5 concurrent live chats per shift, resolving technical issues in 10–15 minute average interactions while maintaining a consistent CSAT score of 96%+.',
      'Provided consumer-facing technical support on behalf of a major global technology brand, following strict data confidentiality and security protocols.',
      'Adapted quickly to new product releases and system changes while keeping resolution accuracy consistent.',
    ],
    link: 'https://www.tdcx.com/',
    tech: ['Live Chat', 'Technical Support', 'CSAT'],
  },
  {
    company: 'Teletech',
    role: 'Technical Support Representative',
    period: '2019 - 2021',
    description: [
      'Diagnosed and resolved technical issues via chat, using remote access tools to fix problems directly on customer systems.',
      'Provided consumer-facing support on behalf of a large US-based retail client, following strict data security and privacy standards across all interactions.',
    ],
    link: 'https://ttec.com',
    tech: ['Remote Desktop', 'Technical Support'],
  },
  {
    company: 'iPloy Inc.',
    role: 'Customer Service Representative',
    period: '2017 - 2019',
    description: [
      'Managed high-volume customer interactions and data entry, handling patient data in compliance with HIPAA and healthcare data protection standards.',
      'Coordinated with external parties to secure documentation and manage appointment scheduling.',
    ],
    link: 'https://iploystaffing.com/',
    tech: ['HIPAA', 'Data Entry', 'Customer Service'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Information Technology',
    institution: 'Kent Institute Australia, Sydney',
    period: '2023 - 2026',
    link: 'https://kent.edu.au',
    logo: '/images/kentlogo.png',
  },
  {
    degree: 'Diploma of Information Technology (Cyber Security)',
    institution: 'Kent Institute Australia, Sydney',
    period: '2023 - 2026',
    link: 'https://kent.edu.au',
    logo: '/images/kentlogo.png',
  },
];

export const certifications: CertificationItem[] = [
  {
    name: 'Microsoft SC-900',
    issuer: 'Microsoft',
    issuerIcon: 'Microsoft',
    issuerLogo: '/images/microsoft-logo.svg',
    date: 'September 8, 2026',
    expiryDate: 'Non-expiring',
    credentialId: null,
    verificationUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/Adamson-4133/124A3F08B50C3421?sharingId',
    skills: ['Entra ID', 'MFA', 'Conditional Access', 'Microsoft Defender', 'Microsoft Purview'],
    status: 'completed',
    progress: 100,
    summary:
      'Microsoft Security, Compliance, and Identity Fundamentals — identity, access, threat protection, and data governance concepts across Microsoft cloud services.',
    image: '/images/microsoft-logo.svg',
  },
  {
    name: 'Cisco CCNA',
    issuer: 'Cisco',
    issuerIcon: 'Cisco',
    issuerLogo: '/images/CCNAlogo.png',
    date: 'In Progress (~60%)',
    expiryDate: null,
    credentialId: null,
    verificationUrl: null,
    skills: ['Routing & Switching', 'Subnetting', 'Network Fundamentals'],
    status: 'in-progress',
    progress: 60,
    summary:
      'Progressing through CCNA certification with hands-on practice in routing, switching, subnetting, and network fundamentals.',
    image: '/images/cisco.png',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    issuerIcon: 'CompTIA',
    issuerLogo: '/images/A+logo.jpg',
    date: 'In Progress',
    expiryDate: null,
    credentialId: null,
    verificationUrl: null,
    skills: ['Security Fundamentals', 'Threats & Vulnerabilities', 'Architecture'],
    status: 'in-progress',
    progress: 25,
    summary: 'Working toward CompTIA Security+ to strengthen cybersecurity fundamentals alongside networking study.',
    image: '/images/A+.png',
  },
  {
    name: 'CompTIA A+',
    issuer: 'CompTIA',
    issuerIcon: 'CompTIA',
    issuerLogo: '/images/A+logo.jpg',
    date: 'March 09, 2026',
    expiryDate: 'March 09, 2029',
    credentialId: null,
    verificationUrl: 'https://www.credly.com/badges/aaa1b9c7-4d9a-45d9-a190-003e0c1328fe',
    skills: ['Hardware', 'Operating Systems', 'Networking', 'Troubleshooting'],
    status: 'completed',
    progress: 100,
    summary:
      'Demonstrated industry-standard IT support skills, including hardware configuration, operating systems, networking, security, and systematic troubleshooting.',
    image: '/images/A+.png',
  },
  {
    name: 'CompTIA ITF+',
    issuer: 'CompTIA',
    issuerIcon: 'CompTIA',
    issuerLogo: '/images/ITF+logo.png',
    date: 'Completed',
    expiryDate: null,
    credentialId: null,
    verificationUrl: 'https://cp.certmetrics.com/comptia/en/public/verify/credential/TDSN6MHYPBEEQSGH',
    skills: ['IT Concepts', 'Hardware', 'Software', 'Security'],
    status: 'completed',
    progress: 100,
    summary: 'Foundational knowledge in IT concepts, hardware, software, and security.',
    image: '/images/itf.png',
  },
  {
    name: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    issuerIcon: 'Google',
    issuerLogo: '/images/google logo.webp',
    date: 'October 10, 2022',
    expiryDate: 'Non-expiring',
    credentialId: null,
    verificationUrl: 'https://coursera.org/share/4aac2c5aa35b995c11b433cb29b6b7de',
    skills: ['IT Support', 'Troubleshooting', 'Systems'],
    status: 'completed',
    progress: 100,
    summary: 'Completed the program by solving real-world IT problems with practical support workflows.',
    image: '/images/google.png',
  },
  {
    name: 'Zendesk Customer Service Professional Certificate',
    issuer: 'Zendesk',
    issuerIcon: 'Zendesk',
    issuerLogo: '/images/zendesk-logo.svg',
    date: 'Completed',
    expiryDate: null,
    credentialId: null,
    verificationUrl:
      'https://www.linkedin.com/learning/certificates/f4e54cadaf1fd3f849bd6543aad59698d00de900c1b23d1e4fb01af3f549f947?u=76085122',
    skills: ['Customer Service', 'Ticketing', 'Support Operations'],
    status: 'completed',
    progress: 100,
    summary: 'Professional certificate covering Zendesk customer service workflows and support best practices.',
    image: '/images/zendesk-logo.svg',
  },
];

export const projects: ProjectItem[] = [
  {
    slug: 'home-lab',
    title: 'Self-Hosted Home Server',
    subtitle: 'Ubuntu/Apache multi-site hosting with Splunk monitoring and secure remote access',
    description:
      'Self-hosted Ubuntu/Apache server managing multiple live domains — portfolio, real estate, and capstone app — with Splunk collecting Apache logs from the web host, administered remotely over Tailscale SSH.',
    featured: true,
    featuredOnHome: true,
    status: 'ongoing',
    date: '2025',
    duration: '2025 - Present',
    readingTime: '5 min read',
    tech: [
      'Ubuntu',
      'Apache',
      'Splunk',
      'Tailscale',
      'SSH',
      'DNS',
      'Proxmox',
      'VirtualBox',
      'Windows Server',
      'Active Directory',
    ],
    coverImage: '/images/g3.jpg',
    links: {
      demo: 'https://adamsonb.com',
      github: null,
    },
    summary: {
      problem:
        'I needed real-world deployment practice and a cheaper way to host multiple sites without relying only on shared hosting — plus a way to practice log monitoring on traffic I actually control.',
      solution:
        'Built a self-hosted Ubuntu/Apache environment that serves live domains over Tailscale SSH, alongside Windows Server labs and a Splunk VM that receives Apache logs from the web server via Universal Forwarder.',
      outcome:
        'Hosts my portfolio, a real estate site, and ceda.online, while doubling as a learning platform for infrastructure, support skills, and SIEM-style log search.',
    },
    detailBody: [
      'This project is my long-running infrastructure practice environment. It combines production-style hosting with lab work so I can learn by deploying and maintaining real services.',
      'Live sites on the server include my portfolio, a client real estate site, and my capstone campus event app at ceda.online.',
      'A separate Splunk VM on the same LAN receives Apache access logs from ambwebserver (adamsonb.com) through Splunk Universal Forwarder — so site traffic is searchable as part of the same homelab, not only sample data.',
      'The attached lab series documents Windows Server, Active Directory, Splunk stages, and related milestones so each step can be reproduced later.',
    ],
    screenshots: [
      {
        id: 1,
        title: 'Homelab Host',
        description: 'HP EliteDesk Mini G3 800 used as the physical base of the lab.',
        src: '/images/g32.jpeg',
        alt: 'HP EliteDesk Mini G3 800',
      },
      {
        id: 2,
        title: 'Proxmox Web Interface',
        description: 'Remote management interface for the virtualization layer.',
        src: '/images/prxmx_web.png',
        alt: 'Proxmox Web Interface',
      },
      {
        id: 3,
        title: 'Windows Server Base VM',
        description: 'Server Manager after the Windows Server lab build was completed.',
        src: '/images/Windows_Server/13.png',
        alt: 'Windows Server Server Manager',
      },
      {
        id: 4,
        title: 'Active Directory Setup',
        description: 'AD DS installed and ready for domain administration work.',
        src: '/images/AD-DS/17.png',
        alt: 'Active Directory installed',
      },
      {
        id: 5,
        title: 'Splunk Apache Log Search',
        description: 'adamsonb.com access events forwarded from the web server into Splunk.',
        src: '/images/Splunk/Stage02/09-search-results.png',
        alt: 'Splunk search results for adamsonb Apache access logs',
      },
    ],
    relatedBlogSlugs: [
      'homelab-setup',
      'winserver',
      'win10',
      'ad_ds',
      'manage_users',
      'splunk-stage-01',
      'splunk-stage-02',
      'splunk-commands',
    ],
  },
  {
    slug: 'campus-event-discovery-app',
    title: 'Campus Event Discovery App',
    subtitle: 'Capstone project for discovering and managing campus events',
    description:
      'A web application for discovering and managing campus events, built as a capstone project and hosted at ceda.online.',
    featured: true,
    featuredOnHome: true,
    status: 'completed',
    date: '2025',
    duration: '2025',
    readingTime: '4 min read',
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'shadcn/ui',
      'MUI',
      'React Router v7',
      'Node.js',
      'Express.js v5',
      'MySQL 8.0',
      'JWT',
      'PM2',
      'Nginx',
      'Cloudflare Tunnel',
    ],
    coverLabel: 'Capstone Project',
    coverImage: '/images/ceda.png',
    links: {
      demo: 'https://ceda.online',
      github: 'https://github.com/k230313/Campus-Event-Discovery-App',
    },
    summary: {
      problem:
        'Students needed a clearer way to discover, browse, and keep track of campus events across the university.',
      solution:
        'Built a full-stack campus event discovery application with event browsing, management, authentication, and transactional email workflows.',
      outcome:
        'Delivered a polished capstone project with a live deployment at ceda.online and an extensible event management backend.',
    },
    detailBody: [
      'This capstone project enables students to discover campus events, manage registrations, and access event details in a modern web interface.',
      'Live URL: https://ceda.online',
      'GitHub: https://github.com/k230313/Campus-Event-Discovery-App',
    ],
    screenshots: [
      {
        id: 1,
        title: 'Ceda App Screenshot',
        description: 'Campus event discovery dashboard and event detail view.',
        placeholder: 'Ceda screenshot',
      },
    ],
    capstone: true,
  },
  {
    slug: 'personal-finance-app',
    title: 'Personal Finance Web App',
    subtitle: 'Auth-backed tracker I use instead of a subscription app',
    description:
      'Personal finance web app with authentication and a Supabase backend — built to replace paid tools that didn’t fit how I budget.',
    featured: true,
    featuredOnHome: true,
    status: 'ongoing',
    date: '2025',
    duration: '2025 - Present',
    readingTime: '3 min read',
    tech: ['React', 'Supabase', 'Authentication'],
    coverLabel: 'Personal Tool',
    links: {
      demo: null,
      github: null,
    },
    summary: {
      problem:
        'Existing finance apps lacked the features I needed and came with ongoing subscription costs.',
      solution:
        'Designed the features I actually wanted and built an authenticated web app on a Supabase backend.',
      outcome:
        'A finance tracker I use myself — and a running project I keep extending.',
    },
    detailBody: [
      'This started as a practical gap: I wanted finance tracking without paying for a tool that did not match how I work.',
      'I keep adding to it, which is the point — it is a live personal tool, not a one-week demo.',
    ],
    screenshots: [],
  },
  {
    slug: 'local-llm-study-environment',
    title: 'Local LLM Study Environment',
    subtitle: 'Private CCNA study assistant with Ollama and Open WebUI',
    description:
      'Local LLM setup using Ollama and Open WebUI as a private, offline CCNA study assistant.',
    featured: true,
    featuredOnHome: true,
    status: 'ongoing',
    date: '2025',
    duration: '2025 - Present',
    readingTime: '2 min read',
    tech: ['Ollama', 'Open WebUI', 'Local LLMs', 'Ubuntu'],
    coverLabel: 'Study Lab',
    links: {
      demo: null,
      github: null,
    },
    summary: {
      problem:
        'Cloud AI study tools raise privacy, offline-access, and cost concerns while I prepare for CCNA.',
      solution:
        'Set up a local LLM environment with Ollama and Open WebUI to keep study assistance private and available offline.',
      outcome:
        'A personal study assistant that also teaches me how inference tooling fits a self-hosted stack.',
    },
    detailBody: [
      'This lab is about privacy, offline access, and not paying for a study chatbot.',
      'Running models locally also means I have to keep the host healthy — same skill as the rest of the home lab.',
    ],
    screenshots: [],
  },
  {
    slug: 'evans-real-estate-website',
    title: 'Evans Real Estate Website',
    subtitle: 'Professional real estate website for a client',
    description:
      'A professional real estate website built and self-hosted for a client on the same Ubuntu/Apache stack.',
    featured: false,
    featuredOnHome: true,
    status: 'completed',
    date: '2025',
    duration: '2025',
    readingTime: '3 min read',
    tech: ['Apache', 'Ubuntu', 'Tailscale', 'Vite', 'React'],
    coverLabel: 'Client Build',
    coverImage: '/images/evans.png',
    links: {
      demo: 'https://evansrealestate.com',
      github: null,
    },
    summary: {
      problem:
        'The client needed a professional website for real estate listings and business information with reliable self-managed hosting.',
      solution:
        'Built and deployed the site on a self-hosted Ubuntu/Apache stack with Tailscale for management access.',
      outcome:
        'Delivered a live client website hosted alongside my other domains on the home server.',
    },
    detailBody: [
      'This client project focused on delivering a professional real estate website with self-managed hosting and straightforward deployment.',
      'It runs on the same self-hosted infrastructure used for my portfolio and capstone app.',
    ],
    screenshots: [
      {
        id: 1,
        title: 'Project Screenshot',
        description: 'Evans Real Estate site',
        src: '/images/evans.png',
        alt: 'Evans Real Estate website',
      },
    ],
  },
];

export const allBlogPosts = blogPosts as BlogPost[];

/** Alias — current posts are technical writeups, not blog essays */
export const allWriteups = allBlogPosts;

export type WriteupCategory = {
  title: string;
  slugs: string[];
};

/** Topic groups for the Technical Writeups index (add new slugs here as you publish) */
export const writeupCategories: WriteupCategory[] = [
  {
    title: 'Active Directory',
    slugs: ['ad_ds', 'manage_users'],
  },
  {
    title: 'Homelab',
    slugs: ['homelab-setup'],
  },
  {
    title: 'Splunk',
    slugs: ['splunk-stage-01', 'splunk-stage-02', 'splunk-commands'],
  },
  {
    title: 'Windows Client',
    slugs: ['win10'],
  },
  {
    title: 'Windows Server',
    slugs: ['winserver'],
  },
];

export function getWriteupsByCategory() {
  return writeupCategories
    .map(category => ({
      title: category.title,
      posts: category.slugs
        .map(slug => allWriteups.find(post => post.slug === slug))
        .filter((post): post is BlogPost => Boolean(post)),
    }))
    .filter(group => group.posts.length > 0);
}

export const featuredProjects = projects.filter(project => project.featured);

export const homeProjects = projects.filter(project => project.featuredOnHome);

export const showcaseProjects = [
  projects.find(project => project.slug === 'home-lab'),
  projects.find(project => project.slug === 'campus-event-discovery-app'),
  projects.find(project => project.slug === 'evans-real-estate-website'),
  projects.find(project => project.slug === 'personal-finance-app'),
  projects.find(project => project.slug === 'local-llm-study-environment'),
].filter(Boolean) as ProjectItem[];

const homeCertNames = [
  'Microsoft SC-900',
  'CompTIA A+',
  'Google IT Support Professional Certificate',
];

export const homeCertifications = homeCertNames
  .map(name => certifications.find(cert => cert.name === name))
  .filter(Boolean) as CertificationItem[];

export const inProgressCertifications = certifications.filter(cert => cert.status === 'in-progress');

export const recentCertifications = certifications.slice(0, 3);
