import {
  ChartColumn, ShieldCheck, Gem, Database, Layers, BrainCircuit, Cloud, Users, Building2,
  Layers3, BriefcaseBusiness, FileBadge, UserCheck, CodeXml, LayoutGrid, Settings, Server,
  Lightbulb, MessagesSquare, Target, Workflow,
} from 'lucide-react';

export const programCategories = ['All Programs', 'Technology', 'Data & Analytics', 'Microsoft', 'Business', 'Custom Programs'] as const;
export type ProgramCategory = (typeof programCategories)[number];

type Icon = typeof ChartColumn;

export interface Program {
  id: number; title: string; desc: string; mode: string; duration: string;
  Icon: Icon; color: string; image: string;
  categories: ProgramCategory[];
  features: { Icon: Icon; label: string }[];
}

export const programs: Program[] = [
  {
    id: 1,
    title: 'Power BI for Business Users',
    desc: 'Turn data into insights with hands-on Power BI training for professionals and teams.',
    mode: 'Online / Onsite',
    duration: '2 - 8 Weeks',
    Icon: ChartColumn,
    color: '#E8A317',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    categories: ['Data & Analytics', 'Microsoft'],
    features: [
      { Icon: Layers3, label: 'Hands-on Projects' },
      { Icon: BriefcaseBusiness, label: 'Real Business Use Cases' },
      { Icon: FileBadge, label: 'Certification Support' },
    ],
  },
  {
    id: 2,
    title: 'Cybersecurity Awareness & Fundamentals',
    desc: 'Learn to protect systems, data and networks with industry best practices and real-world scenarios.',
    mode: 'Online / Hybrid',
    duration: '3 - 12 Weeks',
    Icon: ShieldCheck,
    color: '#1E88E5',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    categories: ['Technology'],
    features: [
      { Icon: ShieldCheck, label: 'Industry Focused' },
      { Icon: UserCheck, label: 'Expert Trainers' },
      { Icon: FileBadge, label: 'Certification Support' },
    ],
  },
  {
    id: 3,
    title: 'Power Apps App Development',
    desc: 'Build custom business applications with Microsoft Power Apps, a no/low code platform.',
    mode: 'Online / Onsite',
    duration: '3 - 10 Weeks',
    Icon: Gem,
    color: '#8B3FD9',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    categories: ['Technology', 'Microsoft'],
    features: [
      { Icon: CodeXml, label: 'Practical Projects' },
      { Icon: LayoutGrid, label: 'Real Business Solutions' },
      { Icon: FileBadge, label: 'Certification Support' },
    ],
  },
  {
    id: 4,
    title: 'Data Engineering',
    desc: 'Learn to design, build and manage modern data pipelines for scalable business solutions.',
    mode: 'Online / Onsite',
    duration: '4 - 12 Weeks',
    Icon: Database,
    color: '#E31B23',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    categories: ['Data & Analytics', 'Technology'],
    features: [
      { Icon: Settings, label: 'Real-world Projects' },
      { Icon: Server, label: 'Industry Tools' },
      { Icon: FileBadge, label: 'Certification Support' },
    ],
  },
  {
    id: 5,
    title: 'Microsoft Fabric Modern Data Analytics',
    desc: 'Unify data engineering, analytics and reporting on Microsoft Fabric with guided labs.',
    mode: 'Online / Onsite',
    duration: '3 - 8 Weeks',
    Icon: Layers,
    color: '#0FB58C',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    categories: ['Data & Analytics', 'Microsoft'],
    features: [
      { Icon: Layers3, label: 'Hands-on Labs' },
      { Icon: Workflow, label: 'End-to-end Pipelines' },
      { Icon: FileBadge, label: 'Certification Support' },
    ],
  },
  {
    id: 6,
    title: 'AI & Generative AI for Teams',
    desc: 'Apply AI and generative AI tools to everyday work, responsibly and productively.',
    mode: 'Online / Hybrid',
    duration: '2 - 6 Weeks',
    Icon: BrainCircuit,
    color: '#2F6FE4',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    categories: ['Technology'],
    features: [
      { Icon: Lightbulb, label: 'Practical Use Cases' },
      { Icon: UserCheck, label: 'Expert Trainers' },
      { Icon: Layers3, label: 'Hands-on Projects' },
    ],
  },
  {
    id: 7,
    title: 'Cloud Computing Essentials',
    desc: 'Understand cloud platforms, services and architecture to support modernization.',
    mode: 'Online / Onsite',
    duration: '3 - 8 Weeks',
    Icon: Cloud,
    color: '#1E88E5',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    categories: ['Technology'],
    features: [
      { Icon: Layers3, label: 'Guided Labs' },
      { Icon: Server, label: 'Industry Tools' },
      { Icon: FileBadge, label: 'Certification Support' },
    ],
  },
  {
    id: 8,
    title: 'Leadership & Communication',
    desc: 'Build confident leaders and communicators who drive teams through change.',
    mode: 'Onsite / Hybrid',
    duration: '2 - 6 Weeks',
    Icon: Users,
    color: '#E31B23',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    categories: ['Business'],
    features: [
      { Icon: MessagesSquare, label: 'Interactive Workshops' },
      { Icon: Target, label: 'Business Focused' },
      { Icon: UserCheck, label: 'Expert Coaches' },
    ],
  },
  {
    id: 9,
    title: 'Customized Enterprise Programs',
    desc: 'Programs designed around your skill gaps, technology stack and business outcomes.',
    mode: 'Online / Onsite',
    duration: 'Flexible',
    Icon: Building2,
    color: '#0F1B2D',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    categories: ['Custom Programs', 'Business'],
    features: [
      { Icon: Target, label: 'Role-based Paths' },
      { Icon: BriefcaseBusiness, label: 'Your Use Cases' },
      { Icon: FileBadge, label: 'Progress Reporting' },
    ],
  },
];
