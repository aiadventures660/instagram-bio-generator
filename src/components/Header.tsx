
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Info, Shield, FileText, Instagram } from 'lucide-react';

export const Header: React.FC = () => {
  const navItems = [{
    path: '/',
    label: 'Home',
    icon: Home
  }, {
    path: '/contact-us',
    label: 'Contact',
    icon: Mail
  }, {
    path: '/about-us',
    label: 'About',
    icon: Info
  }, {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    icon: Shield
  }, {
    path: '/disclaimer',
    label: 'Disclaimer',
    icon: FileText
  }];
  
  return <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
              <Instagram className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Bio Generator
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => {
            const IconComponent = item.icon;
            return <Link key={item.path} to={item.path} className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 text-sm font-medium">
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>;
          })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>;
};
