
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-indigo-600" />
          Bio Templates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {templates.map((template, index) => {
            const IconComponent = template.icon;
            return (
              <Button
                key={index}
                variant="outline"
                onClick={() => onSelectTemplate(template.template)}
                className="h-auto p-4 flex flex-col items-start text-left hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4 text-indigo-600" />
                    <span className="font-medium text-sm">{template.category}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {template.badge}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-line group-hover:text-gray-800 dark:group-hover:text-gray-100">
                  {template.template}
                </p>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
