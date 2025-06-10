
import React from 'react';
import { Search } from 'lucide-react';

const SEOHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
          <Search className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
          Ultimate Instagram Bio Generator Guide
        </h1>
      </div>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Discover the best Instagram bio generator tools with AI, fonts, emojis, and copy-paste features. 
        Create stunning Instagram bios that boost engagement and followers with our comprehensive guide.
      </p>
    </div>
  );
};

export default SEOHeader;
