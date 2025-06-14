
import React from 'react';
import { Sparkles, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HomeHeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ darkMode, onToggleDarkMode }) => {
  return (
    <div className="text-center mb-8 lg:mb-12">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
          Instagram Bio Generator
        </h1>
        <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
      </div>
      <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Create stunning Instagram bios with AI generation, fancy fonts, symbols, and perfect formatting. 
        Stand out with a bio that's uniquely you! ✨
      </p>
      
      {/* Dark Mode Toggle */}
      <Button 
        onClick={onToggleDarkMode} 
        variant="outline" 
        size="sm" 
        className="mt-6 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
        {darkMode ? 'Light' : 'Dark'} Mode
      </Button>
    </div>
  );
};
