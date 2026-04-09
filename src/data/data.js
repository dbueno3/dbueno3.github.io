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
    role: 'Support Engineer (Internal Tools & Automation)',
    period: 'Oct 2024 - Now',
    description: 'Built and deployed a full-stack task management portal with React, Flask, SQL Server, Docker, and Azure, automating internal operations for 100+ monthly IT and Risk tasks',
    colorClass: 'primary',
  },
    {
    company: 'University at Buffalo',
    role: 'B.S. Computer Science',
    period: 'Aug 2020 - May 2024',
    description: 'Bachelor of Science in Computer Science',
    colorClass: 'secondary',
  },
  {
    company: 'Night Ride Transit LLC',
    role: 'Software Engineer (Contract)',
    period: 'Jan 2024 - Apr 2024',
    description: 'Built and shipped responsive React features for a production transit web app, translating Figma designs into reusable UI components',
    colorClass: 'tertiary',
  },
  {
    company: 'University at Buffalo',
    role: 'Undergraduate Teaching Assistant',
    period: 'Jan 2024 - May 2024',
    description: 'Created tutorials on JavaScript, React, and async programming for 30+ students, supporting teams with Git workflows and project architecture',
    colorClass: 'secondary',
  },
  {
    company: 'UBA America',
    role: 'Information Technology Intern',
    period: 'Jun 2023 - Aug 2023',
    description: 'Developed Python scripts and SQL queries to automate internal reporting workflows, partnering with risk and data teams to streamline pipelines',
    colorClass: 'primary-light',
  },

];

export const PROJECTS = [
  {
    name: 'Task Management Portal',
    description:
      'Full-stack internal web app replacing manual SharePoint/email tracking, enabling 100+ monthly tasks to be assigned, tracked, and audited with RBAC and audit logging.',
    tags: ['React', 'Flask', 'SQL Server', 'Docker', 'Azure'],
    link: 'Confidential - contact for details',
  },
  {
    name: 'HCI Social Platform',
    description:
      'Backend services for a social platform used by 60+ students, supporting real-time messaging via Socket.IO, user profiles, and content feeds.',
    tags: ['TypeScript', 'Node.js', 'MySQL', 'Prisma', 'Socket.IO'],
    link: 'https://webdev.cse.buffalo.edu/hci/api/swagger/',
  },
];

export const SOCIALS = {
  github: { icon: GitHubIcon, url: 'https://github.com/dbueno3', label: 'GitHub' },
  linkedin: { icon: LinkedInIcon, url: 'https://linkedin.com/in/dbueno3', label: 'LinkedIn' },
  instagram: { icon: InstagramIcon, url: 'https://instagram.com/daniel', label: 'Instagram' },
  spotify: { icon: SpotifyIcon, url: 'https://spotify.com', label: 'Spotify' },
  email: { icon: MailIcon, url: 'mailto:dbueno.nyc@gmail.com', label: 'Email' },
};

export const CONTACT_LINKS = [
  { icon: MailIcon, label: 'Email', value: 'dbueno.nyc@gmail.com', url: 'mailto:dbueno.nyc@gmail.com' },
  { icon: InstagramIcon, label: 'Instagram', value: '@daniel', url: 'https://instagram.com/daniel' },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'in/dbueno3', url: 'https://linkedin.com/in/dbueno3' },
  { icon: GitHubIcon, label: 'GitHub', value: 'dbueno3', url: 'https://github.com/dbueno3' },
];