
import { Type, Hash, Palette, Lightbulb, Wand2, BarChart3 } from 'lucide-react';

export const useIndexNavigation = (setActiveSection: (section: string) => void) => {
  const navItems = [
    {
      id: 'ai',
      label: 'AI Generator',
      icon: Wand2,
      onClick: () => setActiveSection('ai')
    },
    {
      id: 'analyzer',
      label: 'Bio Analyzer',
      icon: BarChart3,
      onClick: () => setActiveSection('analyzer')
    },
    {
      id: 'templates',
      label: 'Templates',
      icon: Lightbulb,
      onClick: () => setActiveSection('templates')
    },
    {
      id: 'fonts',
      label: 'Fonts',
      icon: Type,
      onClick: () => setActiveSection('fonts')
    },
    {
      id: 'symbols',
      label: 'Symbols',
      icon: Hash,
      onClick: () => setActiveSection('symbols')    
    },
    {
      id: 'preview',
      label: 'Preview',
      icon: Palette,
      onClick: () => setActiveSection('preview')
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNavClick = (itemId: string) => {
    setActiveSection(itemId);
    scrollToSection(itemId);
  };

  return { navItems, handleNavClick };
};
