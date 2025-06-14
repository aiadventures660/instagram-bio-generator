
import React from 'react';
import { ArrowLeft, Lightbulb, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface CoolBioHeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const CoolBioHeader: React.FC<CoolBioHeaderProps> = ({ darkMode, onToggleDarkMode }) => {
  return (
    <div className="mb-8">
      <Link to="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Generator
      </Link>
      
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
            <Lightbulb className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Cool Instagram Bio Ideas
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the coolest Instagram bio ideas that will make your profile stand out from the crowd. 
          Get inspired with creative, unique, and trendy bio concepts for every personality and style.
        </p>
      </div>

      <Button 
        onClick={onToggleDarkMode} 
        variant="outline" 
        size="sm" 
        className="mt-6 mx-auto block"
      >
        {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
        {darkMode ? 'Light' : 'Dark'} Mode
      </Button>
    </div>
  );
};
