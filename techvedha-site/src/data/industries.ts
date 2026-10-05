import { Monitor, Building2, Landmark, UserCheck, Target, BarChart2, ShieldCheck, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const industries: { Icon: LucideIcon; title: string; desc: string; color: string; image: string }[] = [
  { Icon: Monitor,     title: 'IT & Technology Organizations', desc: 'Upskilling tech teams on modern tools and platforms.',        color: '#1E88E5', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80' },
  { Icon: Building2,   title: 'SMEs & Growing Businesses',     desc: 'Practical programs that scale with your growth.',            color: '#E8A317', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&q=80' },
  { Icon: Landmark,    title: 'Enterprise Organizations',      desc: 'Large-scale capability building across departments.',        color: '#1E6FD9', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80' },
  { Icon: UserCheck,   title: 'HR & L&D Teams',                desc: 'Structured learning paths aligned to workforce goals.',      color: '#E31B23', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80' },
  { Icon: Target,      title: 'IT Managers, CIOs & CTOs',      desc: 'Technology strategy, roadmaps and advisory for leaders.',    color: '#0FB58C', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80' },
  { Icon: BarChart2,   title: 'Data & Analytics Teams',        desc: 'Power BI, Fabric and analytics skills for better decisions.', color: '#8B3FD9', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80' },
  { Icon: ShieldCheck, title: 'Cybersecurity Teams',           desc: 'Security awareness and hands-on defensive skills.',          color: '#E31B23', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80' },
  { Icon: Briefcase,   title: 'Business & Operations Teams',   desc: 'Automation and productivity for everyday operations.',       color: '#F05A28', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80' },
];
