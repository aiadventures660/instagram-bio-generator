
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
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-rose-50/20 to-pink-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
      <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500">
            <Instagram className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Instagram Preview
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              See how your bio will look
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Mock Instagram Profile */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          {/* Profile Header */}
          <div className="flex items-start gap-4 mb-6">
            <Avatar className="h-20 w-20 ring-2 ring-gradient-to-br from-purple-400 to-pink-400">
              <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white text-lg font-bold">
                YOU
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">yourusername</h2>
                <Button size="sm" variant="outline" className="text-xs border-gray-300 dark:border-gray-600">
                  Edit profile
                </Button>
                <Button size="sm" variant="outline" className="p-2 border-gray-300 dark:border-gray-600">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="flex gap-6 text-sm text-gray-700 dark:text-gray-300">
                <span><strong className="text-gray-900 dark:text-gray-100">1,234</strong> posts</span>
                <span><strong className="text-gray-900 dark:text-gray-100">5,678</strong> followers</span>
                <span><strong className="text-gray-900 dark:text-gray-100">987</strong> following</span>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Your Display Name</h3>
            <div className="text-sm whitespace-pre-line text-gray-800 dark:text-gray-200 leading-relaxed">
              {bioText || "Your bio will appear here... ✨\nStart typing to see the preview!"}
            </div>
            <div className="flex items-center gap-2 text-blue-600 text-sm">
              <Globe className="h-3 w-3" />
              <span>yourwebsite.com</span>
            </div>
          </div>

          {/* Highlight Stories */}
          <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600 dark:text-gray-300">✨</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Story {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Character Count */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            This is how your bio will look on Instagram
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
