
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Instagram, Globe, MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface BioPreviewProps {
  bioText: string;
  selectedFont: string;
}

export const BioPreview: React.FC<BioPreviewProps> = ({ bioText, selectedFont }) => {
  return (
    <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Instagram className="h-5 w-5 text-pink-600" />
          Instagram Preview
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Mock Instagram Profile */}
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          {/* Profile Header */}
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white text-lg font-bold">
                YOU
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <h2 className="text-lg font-semibold">yourusername</h2>
                <Button size="sm" variant="outline" className="text-xs">
                  Edit profile
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="flex gap-6 text-sm">
                <span><strong>1,234</strong> posts</span>
                <span><strong>5,678</strong> followers</span>
                <span><strong>987</strong> following</span>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-2">
            <h3 className="font-semibold">Your Display Name</h3>
            <div className="text-sm whitespace-pre-line text-gray-800 dark:text-gray-200 leading-relaxed">
              {bioText || "Your bio will appear here... ✨\nStart typing to see the preview!"}
            </div>
            <div className="flex items-center gap-1 text-blue-600 text-sm">
              <Globe className="h-3 w-3" />
              <span>yourwebsite.com</span>
            </div>
          </div>

          {/* Highlight Stories */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600">✨</span>
                </div>
                <span className="text-xs text-gray-600">Story {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Character Count */}
        <div className="mt-3 text-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            This is how your bio will look on Instagram
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
