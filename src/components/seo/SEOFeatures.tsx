
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Type, Smile, Heart } from 'lucide-react';

const SEOFeatures: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Generation",
      description: "Advanced Instagram bio generator AI creates perfect bios in seconds with smart algorithms",
      keywords: "instagram bio generator ai, ai bio generator"
    },
    {
      icon: Type,
      title: "Font & Style Options",
      description: "Stylish font generator for Instagram bio with fancy text and cool design options",
      keywords: "instagram bio generator font, font generator instagram bio"
    },
    {
      icon: Smile,
      title: "Emoji Integration",
      description: "Instagram bio generator with emoji copy and paste features for expressive profiles",
      keywords: "instagram bio generator with emoji, emoji copy paste"
    },
    {
      icon: Heart,
      title: "100% Free Tool",
      description: "Complete Instagram bio generator free access with no hidden costs or subscriptions",
      keywords: "instagram bio generator free, free bio generator"
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Why Choose Our Instagram Bio Generator?
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card 
            key={index}
            className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-700/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <feature.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
              {feature.description}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-500 italic">
              {feature.keywords}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SEOFeatures;
