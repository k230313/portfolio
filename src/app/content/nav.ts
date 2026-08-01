export const siteNavLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/stack', label: 'Stack' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/writeups', label: 'Technical Writeups' },
  { path: '/blog', label: 'Blog' },
] as const;

export type StackCategory = {
  title: string;
  items: string[];
  note?: string;
};

export const stackCategories: StackCategory[] = [
  {
    title: 'Technical Support & Ticketing',
    items: [
      'Zendesk',
      'Remote Desktop Tools',
      'Windows',
      'macOS',
      'Hardware Troubleshooting',
      'Software Troubleshooting',
    ],
  },
  {
    title: 'Networking',
    items: [
      'TCP/IP',
      'DNS',
      'DHCP',
      'LAN/WAN',
      'FTP/SFTP/SSH',
      'VPN Fundamentals',
      'CCNA (in progress)',
    ],
  },
  {
    title: 'Identity & Security',
    items: [
      'Microsoft Entra ID',
      'MFA',
      'Conditional Access',
      'Microsoft Defender',
      'Microsoft Purview',
      'SC-900',
      'CompTIA Security+ (in progress)',
    ],
  },
  {
    title: 'Infrastructure & Self-Hosting',
    items: [
      'Proxmox',
      'Ubuntu',
      'Apache',
      'Nginx',
      'PM2',
      'Tailscale',
      'Cloudflare Tunnel',
      'Oracle VirtualBox',
    ],
  },
  {
    title: 'Developer & Collaboration Tools',
    items: [
      'GitHub',
      'VS Code',
      'Slack',
      'Discord',
      'Microsoft Teams',
      'Jira',
    ],
  },
  {
    title: 'Web & Application Tools',
    items: [
      'React',
      'Node.js',
      'Express.js',
      'MySQL',
      'Supabase',
      'PostgreSQL',
      'Vercel',
      'Hugo',
    ],
  },
  {
    title: 'AI & Development Tools',
    items: ['Claude', 'Codex', 'Cursor'],
    note: 'Using AI-assisted tools to build, deploy, and iterate on personal projects.',
  },
  {
    title: 'Also Familiar With',
    items: ['Python', 'Java', 'PHP', 'SQL'],
    note: 'Foundational coursework exposure — not primary day-to-day tools.',
  },
];
