import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  SpotifyIcon,
  MailIcon,
} from './icons';

export const TIMELINE = [
  {
    company: 'UBA America',
    role: 'Internal Tools & Automation Developer (Official Title: IT Help Desk Administrator)',
    period: 'Oct 2024 - Present',
    description: 'Designed and shipped a full-stack compliance portal tracking 195 KRIs across IT and Risk departments. Automated 6+ reporting workflows in Python and Bash, cutting report generation time by 60%. Managed Docker infrastructure and GitHub Actions CI/CD pipelines.',
    colorClass: 'primary',
  },
  {
    company: 'Night Ride Transit LLC',
    role: 'Software Engineer (Contract)',
    period: 'Jan 2024 - Apr 2024',
    description: 'Built and shipped responsive React features for a production transit web app serving riders across multiple service areas. Integrated REST API endpoints and participated in biweekly Agile sprint reviews.',
    colorClass: 'tertiary',
  },
  {
    company: 'University at Buffalo',
    role: 'Undergraduate Teaching Assistant – HCI',
    period: 'Jan 2024 - May 2024',
    description: 'Built the backend for a course social platform used by 60+ students, supporting real-time messaging, user profiles, and content feeds using TypeScript, MySQL, Prisma ORM, and Socket.IO.',
    colorClass: 'secondary',
  },
  {
    company: 'UBA America',
    role: 'Information Technology Intern',
    period: 'Jun 2023 - Aug 2023',
    description: 'Developed Python scripts and SQL queries to automate internal reporting workflows, partnering with risk and data analytics teams to consolidate redundant pipelines.',
    colorClass: 'primary-light',
  },
  {
    company: 'University at Buffalo',
    role: 'B.S. Computer Science',
    period: 'Aug 2020 - May 2024',
    description: 'Bachelor of Science in Computer Science.',
    colorClass: 'secondary',
  },
];

export const PROJECTS = [
  {
    name: 'KRI Compliance Portal',
    description:
      'Full-stack internal compliance portal with Azure SSO (OAuth 2.0), RBAC, and a Maker/Checker approval workflow, tracking 195 KRIs across IT and Risk departments. Normalized SQL Server schema for task lifecycle management and audit trails; deployed on AWS EC2 via Docker and GitHub Actions CI/CD.',
    tags: ['FastAPI', 'React', 'SQL Server', 'Docker', 'Azure SSO', 'AWS EC2'],
    link: null,
  },
  {
    name: 'Peakd',
    description:
      'Full-stack powerlifting meet-prep tracker with JWT authentication, user-scoped training logs, auto-calculated e1RM, macro tracking, weekly weigh-ins, and DOTS score projections. Multi-stage Docker build with Docker Compose; automated deployments to AWS EC2 via GitHub Actions.',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'AWS EC2', 'Anthropic API'],
    link: null,
  },
  {
    name: 'HCI Social Platform',
    description:
      'Backend for a course social platform used by 60+ students, supporting real-time messaging via Socket.IO, user profiles, and content feeds.',
    tags: ['TypeScript', 'Node.js', 'MySQL', 'Prisma', 'Socket.IO'],
    link: 'https://webdev.cse.buffalo.edu/hci/api/swagger/',
  },
];

export const SOCIALS = {
  github: { icon: GitHubIcon, url: 'https://github.com/dbueno3', label: 'GitHub' },
  linkedin: { icon: LinkedInIcon, url: 'https://linkedin.com/in/dbueno3', label: 'LinkedIn' },
  instagram: { icon: InstagramIcon, url: 'https://instagram.com/bueno.methodz', label: 'Instagram' },
  spotify: { icon: SpotifyIcon, url: 'https://spotify.com', label: 'Spotify' },
  email: { icon: MailIcon, url: 'mailto:dbueno.nyc@gmail.com', label: 'Email' },
};

export const SKILLS = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Go'] },
  { category: 'Frameworks', items: ['React', 'FastAPI', 'Express', 'Node.js', 'Tailwind CSS'] },
  { category: 'Cloud & Infra', items: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'UNIX/Bash', 'REST APIs'] },
  { category: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Prisma ORM'] },
];

export const CONTACT_LINKS = [
  { icon: MailIcon, label: 'Email', value: 'dbueno.nyc@gmail.com', url: 'mailto:dbueno.nyc@gmail.com' },
  { icon: InstagramIcon, label: 'Instagram', value: '@bueno.methodz', url: 'https://instagram.com/bueno.methodz' },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'in/dbueno3', url: 'https://linkedin.com/in/dbueno3' },
  { icon: GitHubIcon, label: 'GitHub', value: 'dbueno3', url: 'https://github.com/dbueno3' },
];