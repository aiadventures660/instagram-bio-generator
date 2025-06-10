
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from 'lucide-react';

const TrendingKeywords: React.FC = () => {
  const trendingKeywords = [
    "Instagram Bio Generator", "Instagram Bio Generator Font", "Instagram Bio Generator AI", "Instagram Bio Generator Copy and Paste",
    "Instagram Bio Generator with Emoji", "Instagram Bio Generator Free", "Font Generator Instagram Bio", "Instagram Font Generator",
    "Stylish Font Generator for Instagram Bio", "Free AI Bio Generator for Instagram", "Instagram Bio Generator Aesthetic", 
    "Instagram Bio Generator for Girls", "Instagram Bio Generator for Boy", "Instagram Business Bio Generator",
    "Fancy Text Generator Bio for Instagram", "Cool Text Generator for Instagram Bio", "Instagram Bio Generator Symbol",
    "Cute Instagram Bio Generator", "Instagram Professional Bio Generator", "Instagram Stylish Bio Generator",
    "Center Instagram Bio Generator", "Instagram Space Bio Generator", "Bio Generator Instagram Online",
    "Instagram Font Generator Online Copy and Paste Bio", "Ahrefs Instagram Bio Generator", "Mention Com Instagram Bio Generator"
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
