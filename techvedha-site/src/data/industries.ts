import { Monitor, Building2, Landmark, UserCheck, Target, BarChart2, ShieldCheck, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const industries: { Icon: LucideIcon; title: string }[] = [
  { Icon: Monitor,    title: 'IT & Technology\nOrganizations' },
  { Icon: Building2,  title: 'SMEs &\nGrowing Businesses' },
  { Icon: Landmark,   title: 'Enterprise\nOrganizations' },
  { Icon: UserCheck,  title: 'HR & L&D\nTeams' },
  { Icon: Target,     title: 'IT Managers\nCIOs & CTOs' },
  { Icon: BarChart2,  title: 'Data & Analytics\nTeams' },
  { Icon: ShieldCheck,title: 'Cybersecurity\nTeams' },
  { Icon: Briefcase,  title: 'Business &\nOperations Teams' },
];
