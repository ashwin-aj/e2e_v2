import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import SquashConnectionStatus from '../SquashConnectionStatus/SquashConnectionStatus';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { theme } = useTheme();
  const currentUser = {
    name: 'John Doe',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  };

  return (
    <header className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border-secondary)] px-6 py-4 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search flows, executions..."
              className="pl-10 pr-4 py-2 w-80 bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20 focus:border-[var(--color-primary)] transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <SquashConnectionStatus />
          
          <button className="relative p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-[var(--color-primary)] rounded-full animate-pulse"></span>
          </button>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium text-[var(--color-text-primary)]">
                {currentUser.name}
              </div>
              <div className="text-xs capitalize text-[var(--color-text-secondary)]">
                {currentUser.role}
              </div>
            </div>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="h-8 w-8 rounded-full ring-2 ring-[var(--color-primary)]/50"
              />
            ) : (
              <div className="h-8 w-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}