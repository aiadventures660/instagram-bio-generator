
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Camera, Palette, Coffee, Gamepad2, BookOpen } from 'lucide-react';

interface TemplateSelectorProps {
  onSelectTemplate: (template: string) => void;
}

const templates = [
  {
    icon: Camera,
    category: "Influencer",
    template: `✨ Content Creator & Dreamer\n📸 Capturing life's beautiful moments\n💌 Collab: youremail@gmail.com`,
    badge: "Popular"
  },
  {
    icon: Briefcase,
    category: "Business",
    template: `🏢 CEO & Entrepreneur\n💼 Building the future, one step at a time\n🌐 www.yourwebsite.com`,
    badge: "Professional"
  },
  {
    icon: Palette,
    category: "Artist",
    template: `🎨 Digital Artist & Creative\n✨ Turning imagination into reality\n🖼️ Commissions: Open`,
    badge: "Creative"
  },
  {
    icon: Coffee,
    category: "Lifestyle",
    template: `☕ Coffee lover & Life enthusiast\n🌸 Living my best life daily\n📍 Currently in: Your City`,
    badge: "Cozy"
  },
  {
    icon: Gamepad2,
    category: "Gamer",
    template: `🎮 Pro Gamer & Streamer\n🏆 Leveling up every day\n📺 Twitch: YourUsername`,
    badge: "Gaming"
  },
  {
    icon: BookOpen,
    category: "Minimal",
    template: `less is more\nsimple thoughts\nquiet moments`,
    badge: "Clean"
  }
];

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {templates.map((template, index) => {
        const IconComponent = template.icon;
        return (
          <Button
            key={index}
            variant="outline"
            onClick={() => onSelectTemplate(template.template)}
            className="h-auto p-4 flex flex-col items-start text-left hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200 group border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-md"
          >
            <div className="flex items-center justify-between w-full mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-200">
                  <IconComponent className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">{template.category}</span>
              </div>
              <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                {template.badge}
              </Badge>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-line group-hover:text-gray-800 dark:group-hover:text-gray-200 leading-relaxed">
              {template.template}
            </p>
          </Button>
        );
      })}
    </div>
  );
};
