
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from 'lucide-react';

interface KeywordSectionProps {
  title: string;
  icon: LucideIcon;
  gradient: string;
  content: string[];
  keywords: string[];
}

const KeywordSection: React.FC<KeywordSectionProps> = ({ 
  title, 
  icon: Icon, 
  gradient, 
  content, 
  keywords 
}) => {
  return (
    <Card className="group shadow-lg border-0 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
        <CardTitle className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className={`text-xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
              {title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, kidx) => (
                <Badge 
                  key={kidx}
                  variant="outline"
                  className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-4">
        {content.map((paragraph, pidx) => (
          <p 
            key={pidx}
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm"
          >
            {paragraph}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};

export default KeywordSection;
