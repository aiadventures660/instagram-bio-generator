
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from 'lucide-react';

const PopularSearches: React.FC = () => {
  const popularSearches = [
    {
      category: "Font & Style",
      searches: [
        "instagram bio generator font stylish",
        "font generator bio instagram", 
        "fancy text generator for instagram bio",
        "instagram font generator online copy and paste bio"
      ]
    },
    {
      category: "AI & Free Tools",
      searches: [
        "free ai bio generator for instagram",
        "instagram bio generator free tool",
        "instagram bio generator ai powered"
      ]
    },
    {
      category: "Special Features",
      searches: [
        "instagram bio generator with emoji copy and paste",
        "instagram bio generator aesthetic design",
        "instagram bio generator symbol collection"
      ]
    },
    {
      category: "User Types",
      searches: [
        "instagram bio generator for girls cute",
        "instagram business bio generator professional",
        "instagram bio generator name customization"
      ]
    }
  ];

  return (
    <Card className="mb-12 shadow-lg border-0 bg-gradient-to-br from-white via-green-50/20 to-emerald-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3">
          <Heart className="h-6 w-6 text-green-600" />
          <span className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Popular Instagram Bio Generator Searches
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularSearches.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600 pb-2">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.searches.map((search, searchIndex) => (
                  <Badge 
                    key={searchIndex}
                    variant="outline"
                    className="block text-xs text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
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

export default PopularSearches;
