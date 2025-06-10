
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from 'lucide-react';

const RelatedBioFeatures: React.FC = () => {
  const relatedFeatures = [
    {
      category: "Advanced Generators",
      searches: [
        "instagram bio generator with name",
        "instagram bio generator attitude",
        "instagram bio generator quotes",
        "instagram bio generator love"
      ]
    },
    {
      category: "Professional Tools",
      searches: [
        "instagram bio generator for business",
        "instagram bio generator professional",
        "instagram bio generator company",
        "instagram bio generator brand"
      ]
    },
    {
      category: "Creative Options",
      searches: [
        "instagram bio generator creative",
        "instagram bio generator unique",
        "instagram bio generator trending",
        "instagram bio generator viral"
      ]
    },
    {
      category: "Custom Features",
      searches: [
        "instagram bio generator custom",
        "instagram bio generator personalized",
        "instagram bio generator maker",
        "instagram bio generator builder"
      ]
    }
  ];

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <span className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Related Bio Generator Features
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {relatedFeatures.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 border-b border-purple-200 dark:border-purple-600 pb-2">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.searches.map((search, searchIndex) => (
                  <Badge 
                    key={searchIndex}
                    variant="outline"
                    className="block text-xs text-gray-600 dark:text-gray-400 border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors cursor-pointer"
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedBioFeatures;
