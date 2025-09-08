import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../../hooks/useTheme';
import { 
  LayoutDashboard, 
  GitBranch, 
  Play, 
  Server, 
  Users, 
  Settings,
  Zap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Test Cases', href: '/flows', icon: GitBranch },
  { name: 'Executions', href: '/executions', icon: Play },
  { name: 'Applications', href: '/applications', icon: Server },
  { name: 'Users', href: '/users', icon: Users },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out flex flex-col bg-[var(--color-bg-elevated)] border-r border-[var(--color-border-secondary)]`}>
      <div className="flex items-center h-16 px-4 border-b border-[var(--color-border-secondary)]">
        <Zap className="h-8 w-8 text-[var(--color-primary)] glow-icon" />
        {isOpen && (
          <span className="ml-3 text-xl font-bold text-[var(--color-text-primary)]">
            Orkestra
          </span>
        )}
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group nav-item ${
              pathname === item.href
                ? 'active'
                : ''
            }`}
          >
            <item.icon className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'} transition-transform group-hover:scale-110`} />
            {isOpen && item.name}
          </Link>
        ))}
      </nav>

      <div className="border-t border-[var(--color-border-secondary)] p-4">
        <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg nav-item">
          <Settings className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`} />
          {isOpen && 'Settings'}
        </button>
      </div>
    </div>
  );
}