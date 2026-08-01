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
  resumePath: string;
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
  tagline: 'I live in the digital world',
  shortBio: '',
  heroBio:
    'Focused on networking, infrastructure, and cybersecurity, I enjoy creating practical projects that combine learning with real-world technology. From self-hosted systems to AI-powered applications, I like understanding how things work from the ground up.',
  heroBioSecondary:
    'Currently completing my Bachelor of IT while studying CCNA and building modern applications with AI tools.',
  aboutBio: [
    'I’m a Bachelor of IT student who enjoys learning through building and experimentation. Most of my time is spent working on homelabs, self-hosted services, virtual machines, and personal infrastructure projects that help me better understand how real-world systems operate.',
    'I’m especially interested in how different technologies connect together behind the scenes — from networking and Linux servers to DNS, virtualization, web hosting, and Active Directory environments. I enjoy troubleshooting, documenting what I learn, and gradually improving my technical skills through hands-on practice rather than only theory.',
    'Outside of infrastructure and networking, I’ve also been exploring AI-assisted development and modern web technologies to build practical applications and tools while completing my degree.',
  ],
  email: 'adamsonb.au@gmail.com',
  heroImage: '/images/me1.jpg',
  aboutImage: '/images/me.jpg',
  resumePath: '/resume.pdf',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/adamsonb' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adamsonb/' },
    { label: 'Facebook', href: 'https://www.facebook.com/adamson.794209' },
  ],
};

export const stats = [
  { label: 'Projects', value: '4' },
  { label: 'Certifications', value: '5' },
  { label: 'Blog Posts', value: '5' },
];

export const aboutSkillCards = [
  {
    title: 'Networking Fundamentals',
    description: 'Cisco Packet Tracer, Routing & Switching, Subnetting & IP Addressing',
  },
  {
    title: 'Windows & Identity',
    description: 'Active Directory, Windows Server labs, user and domain administration',
  },
  {
    title: 'Self-Hosting',
    description: 'Apache, Ubuntu, Tailscale, personal infrastructure and web hosting',
  },
  {
    title: 'Hands-On Learning',
    description: 'CLI workflows, documentation, lab writeups, and iterative troubleshooting',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Self Employed',
    role: 'Computer Technician',
    period: '2014 - 2023',
    description: [
      'Installed and configured computers and peripheral equipment such as printers and scanners for individual customers and local computer shops.',
      'Set up hardware, software, and drivers on operating systems and troubleshot issues on PCs and laptops.',
      'Worked directly with customers to understand problems, recommend proper use and maintenance, and verify performance after each repair.',
    ],
    link: '',
    tech: [],
  },
  {
    company: 'Group.One',
    role: 'IT Customer Service Representative',
    period: 'Feb 2023 - June 2023',
    description: [
      'Served as the first point of contact across chat, email, and social channels while owning customer cases with timely follow-ups.',
      'Assisted customers building websites with the Website Builder, configured FTP, SFTP, and SSH, and troubleshot issues using internal and external tools.',
      'Processed forms and requests and guided users through the one.com control panel.',
    ],
    link: 'https://one.com',
    tech: [],
  },
  {
    company: 'Continuum Global Solutions',
    role: 'Customer Care Associate',
    period: '2022 - 2023',
    description: [
      'Delivered customer care for wireless accounts, handling questions about plans, devices, and billing through live web chat.',
      'Quickly navigated multiple applications, interpreted procedures, and researched solutions to resolve issues efficiently.',
      'Communicated clearly, professionally, and courteously with customers throughout each interaction.',
    ],
    link: 'https://www.continuumgbl.com/',
    tech: [],
  },
  {
    company: 'TDCX',
    role: 'Technical Support Advisor',
    period: '2021 - 2022',
    description: [
      'Worked closely with customers to troubleshoot and resolve technical issues with step-by-step guidance.',
      'Recommended products based on compatibility and specifications, scheduled appointments, and kept clear interaction records.',
      'Shared feedback to improve support tools and processes while meeting performance goals and handling information securely.',
    ],
    link: 'https://www.tdcx.com/',
    tech: [],
  },
  {
    company: 'Teletech',
    role: 'Technical Support Representative',
    period: '2019 - 2021',
    description: [
      'Recommended products that fit customer needs and ensured compatibility with existing setups.',
      'Handled inbound requests, scheduled appointments, kept accurate records, and processed payments quickly and accurately.',
      'Remotely accessed clients computers to troubleshoot and resolve issues while protecting company and customer data.',
    ],
    link: 'https://ttec.com',
    tech: [],
  },
  {
    company: 'iPloy Inc.',
    role: 'Customer Service Representative',
    period: '2017 - 2019',
    description: [
      'Helped the team stay on top of high-volume work by prioritizing tasks and carefully checking source data to minimize errors.',
      'Contacted doctors clinics to obtain necessary documents so patients could receive medical supplies and followed up about appointments.',
      'Handled private patient information with care and entered it into the backend system with very high accuracy.',
    ],
    link: 'https://iploystaffing.com/',
    tech: [],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Information Technology',
    institution: 'Kent Institute Australia, Sydney',
    period: '2024 - 2026',
    link: 'https://kent.edu.au',
    logo: '/images/kentlogo.png',
  },
  {
    degree: 'Diploma of Information Technology (Cyber Security)',
    institution: 'Kent Institute Australia, Sydney',
    period: '2023 - 2024',
    link: 'https://kent.edu.au',
    logo: '/images/kentlogo.png',
  },
  {
    degree: 'Bachelor of Science in Information Technology (Year 1)',
    institution: 'Asian College of Technology, Cebu, Philippines',
    period: '2015 - 2016',
    highlights: [
      "Dean's Lister",
      'Year Level Representative for the entire student body',
      'Document Formatting Competition Champion',
    ],
    link: 'https://act.edu.ph',
    logo: '/images/actlogo.png',
  },
  {
    degree: 'High School',
    institution: 'Pardo National Highschool, Cebu, Philippines',
    period: '2011 - 2015',
    highlights: [
      'Class President',
      '2nd Runner Up, Regional Hardware and Software Servicing',
    ],
    logo: '/images/pardologo.png',
  },
];

export const certifications: CertificationItem[] = [
  {
    name: 'CompTIA A+ Certification',
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
    summary: 'Completed the program by solving real-world IT problems with optimal solutions.',
    image: '/images/google.png',
  },
  {
    name: 'Cisco CCNA (in progress)',
    issuer: 'Cisco',
    issuerIcon: 'Cisco',
    issuerLogo: '/images/CCNAlogo.png',
    date: '[In Progress]',
    expiryDate: null,
    credentialId: null,
    verificationUrl: null,
    skills: ['Routing & Switching', 'Subnetting', 'Network Fundamentals'],
    status: 'in-progress',
    progress: 40,
    summary:
      'Currently working toward CCNA certification with hands-on practice in routing, switching, subnetting, and network fundamentals.',
    image: '/images/cisco.png',
  },
  {
    name: 'CompTIA ITF+ Certification',
    issuer: 'CompTIA',
    issuerIcon: 'CompTIA',
    issuerLogo: '/images/ITF+logo.png',
    skills: ['IT Concepts', 'Hardware', 'Software', 'Security'],
    status: 'completed',
    progress: 100,
    summary: 'Gained foundational knowledge in IT concepts, hardware, software, and security.',
    image: '/images/itf.png',
    date: '',
    expiryDate: null,
    credentialId: null,
    verificationUrl: null
  },
  {
    name: 'University of Michigan - Programming for Everybody (Python)',
    issuer: 'Coursera',
    issuerIcon: 'Python',
    issuerLogo: '/images/coursera.svg',
    date: '[PLACEHOLDER]',
    expiryDate: null,
    credentialId: null,
    verificationUrl: 'https://coursera.org/share/60b3190c65691b7211ee03be83534ed1',
    skills: ['Python', 'Programming Fundamentals'],
    status: 'completed',
    progress: 100,
    summary: 'Learned the basics of programming using Python, building functional programs from scratch.',
    image: '/images/python.png',
  },
  {
    name: 'Forage - Commonwealth Bank Cybersecurity Job Simulation',
    issuer: 'Forage',
    issuerIcon: 'Forage',
    issuerLogo: '/images/foragelogo.webp',
    date: '[PLACEHOLDER]',
    expiryDate: null,
    credentialId: null,
    verificationUrl: null,
    skills: ['Cybersecurity', 'Problem Solving', 'Banking Environment'],
    status: 'completed',
    progress: 100,
    summary:
      'Completed a practical job simulation focused on cybersecurity fundamentals and problem-solving in a banking environment.',
    image: '/images/commbank.png',
  },
];

export const projects: ProjectItem[] = [
  {
    slug: 'home-lab',
    title: 'Home Lab',
    subtitle: 'Self-hosted virtualized environment for Windows Server and networking labs',
    description:
      'A self-hosted virtualized environment for learning Windows Server, Active Directory, and networking.',
    featured: true,
    featuredOnHome: true,
    status: 'ongoing',
    date: '2025',
    duration: '2025 - Present',
    readingTime: '5 min read',
    tech: ['VirtualBox', 'Windows Server', 'Windows 10', 'Active Directory', 'Tailscale', 'HP EliteDesk'],
    coverImage: '/images/g3.jpg',
    links: {
      demo: null,
      github: null,
    },
    summary: {
      problem:
        'I needed a safe environment to learn core infrastructure concepts such as virtualization, Windows Server administration, identity, and network services without affecting production systems.',
      solution:
        'Built a self-hosted homelab around an HP EliteDesk mini PC and layered in Windows Server, Windows 10, Active Directory, and remote access workflows.',
      outcome:
        'Documented through 4 detailed lab writeups and expanded into a repeatable learning environment for future systems and networking experiments.',
    },
    detailBody: [
      'This project is my long-running lab environment for learning by building. It combines virtualization, Windows administration, networking, and documentation into one evolving setup.',
      'The lab supports experimentation with domain services, client management, remote access, and future infrastructure services, while keeping the environment isolated and easy to rebuild.',
      'The blog series attached to this project documents the setup and the major milestones in the lab so each stage can be reproduced later.',
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
    ],
    relatedBlogSlugs: ['homelab-setup', 'winserver', 'win10', 'ad_ds', 'manage_users'],
  },
  {
    slug: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    subtitle: 'Self-hosted portfolio and blog',
    description:
      'Self-hosted personal portfolio and blog hosted on a self-managed Ubuntu server with Apache and Tailscale.',
    featured: true,
    featuredOnHome: true,
    status: 'completed',
    date: '2025',
    duration: '2025',
    readingTime: '3 min read',
    tech: ['Apache', 'Ubuntu', 'Tailscale', 'HTML', 'CSS'],
    coverImage: '/images/portpic.png',
    links: {
      demo: 'https://adamsonb.com',
      github: 'https://github.com/adamsonb',
    },
    summary: {
      problem:
        'I needed a portfolio that could present my labs, certifications, and technical background while also giving me hands-on experience running my own site.',
      solution:
        'Built the site and deployed it to a self-managed Ubuntu server behind Apache, then used Tailscale to support secure administration.',
      outcome:
        'Created a live portfolio and blog that doubles as a practical self-hosting project and a place to publish technical writeups.',
    },
    detailBody: [
      'This site started as both a portfolio and a practical infrastructure exercise. I wanted to publish my work while also learning how to manage deployment, hosting, and updates myself.',
      'The project combines static site generation with self-managed hosting so content publishing and systems administration both stay part of the workflow.',
      'GitHub URL: https://github.com/adamsonb',
    ],
    screenshots: [],
  },
  {
    slug: 'campus-event-discovery-app',
    title: 'Campus Event Discovery App',
    subtitle: 'Capstone project for discovering and managing campus events',
    description:
      'A web application for discovering and managing campus events, built as a capstone project.',
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
      'mysql2',
      'JWT',
      'dotenv',
      'CORS',
      'Resend API',
      'PM2',
      'Nginx',
      'Cloudflare Tunnel',
      'VS Code',
      'Postman',
      'Git',
      'GitHub',
      'Figma',
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
        'Delivered a polished capstone project with a live deployment, secure session management, and an extensible event management backend.',
    },
    detailBody: [
      'This Capstone project enables students to discover campus events, manage registrations, and access event details in a modern web interface.',
      'Frontend: React 18, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, MUI, and React Router v7.',
      'Backend: Node.js, Express.js v5, MySQL 8.0 with raw mysql2, JWT-based authentication, dotenv, and CORS.',
      'Live URL: https://ceda.online',
      'GitHub URL: https://github.com/k230313/Campus-Event-Discovery-App',
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
    slug: 'evans-real-estate-website',
    title: 'Evans Real Estate Website',
    subtitle: 'Professional real estate website for a client',
    description:
      'A professional real estate website built and self-hosted for a client.',
    featured: false,
    featuredOnHome: true,
    status: 'completed',
    date: '2025',
    duration: '2025',
    readingTime: '3 min read',
    tech: ['Apache', 'Ubuntu', 'Tailscale'],
    coverLabel: 'Client Build',
    coverImage: '/images/evans.png',
    links: {
      demo: null,
      github: null,
    },
    summary: {
      problem:
        'The client needed a professional website that could present real estate listings and business information with reliable self-managed hosting.',
      solution:
        'Built and deployed the site on a self-hosted stack using Apache, Ubuntu, and Tailscale for management access.',
      outcome:
        'Delivered a live client website and left placeholders for screenshots and the final public URL.',
    },
    detailBody: [
      'This client project focused on delivering a professional real estate website with self-managed hosting and straightforward deployment.',
      'Live URL: [PLACEHOLDER]',
      'Screenshots: [PLACEHOLDER]',
      'GitHub URL: [PLACEHOLDER]',
    ],
    screenshots: [
      {
        id: 1,
        title: 'Project Screenshot',
        description: '[PLACEHOLDER]',
        placeholder: '[PLACEHOLDER]',
      },
    ],
  },
];

export const allBlogPosts = blogPosts as BlogPost[];

export const featuredProjects = projects.filter(project => project.featured);

export const homeProjects = projects.filter(project => project.featuredOnHome).slice(0, 4);

export const recentCertifications = certifications.slice(0, 3);
