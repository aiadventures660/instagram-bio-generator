
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from 'lucide-react';

const TrendingKeywords: React.FC = () => {
  const trendingKeywords = [
    "Instagram Bio Generator", "AI Instagram Bio Generator", "Free Instagram Bio Generator", "IG Bio Generator", 
    "Insta Bio Generator", "Instagram Bio Maker", "Create Instagram Bio", "Instagram Bio Creator Online",
    "Best Instagram Bio Generator", "Aesthetic Instagram Bio Generator", "Generate Instagram Bio Free",
    "Custom Instagram Bio Tool", "One-Click Instagram Bio Generator", "Professional Instagram Bio Creator",
    "Instagram Bio Generator Font", "Instagram Font Generator", "Stylish Font Generator for Instagram Bio", 
    "Instagram Bio Generator AI", "Funny Instagram Bio Generator", "Motivational Instagram Bio Tool",
    "Instagram Bio Generator Copy and Paste", "Instagram Bio Generator with Emoji", "Emoji Instagram Bio Generator",
    "Free Instagram Bio Generator with Emojis", "Instagram Bio Generator with Symbols", "Copy and Paste Instagram Bios",
    "Cool Instagram Bios", "Creative Instagram Bios", "Aesthetic Instagram Bios", "Professional Instagram Bios",
    "Short Instagram Bios", "Witty Instagram Bios", "Cute Instagram Bios", "Classy Instagram Bios",
    "Instagram Bio for Girls", "Instagram Bio for Boys", "Instagram Bio for Business", "Instagram Bio for Artists",
    "Instagram Bio for Influencers", "Instagram Bio for Photographers", "Instagram Bio for Entrepreneurs",
    "Bio Ideas for Instagram Business Page", "Cute Instagram Bio Generator", "Influencer Instagram Bio Creator",
    "Instagram Bio Character Counter", "Instagram Bio with Fonts", "Instagram Bio with Links Generator",
    "Instagram Profile Generator", "Personal Branding", "Social Media Marketing", "Username Ideas"
  ];

  return (
    <Card className="mb-12 shadow-lg border-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <span className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Trending Instagram Bio Generator Keywords
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3 justify-center">
          {trendingKeywords.map((keyword, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 hover:from-blue-200 hover:to-indigo-200 dark:hover:from-blue-800 dark:hover:to-indigo-800 transition-all duration-200 cursor-pointer"
            >
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingKeywords;
