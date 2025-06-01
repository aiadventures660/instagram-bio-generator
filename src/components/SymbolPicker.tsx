
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Star, Crown, Music } from 'lucide-react';

interface SymbolPickerProps {
  onSymbolSelect: (symbol: string) => void;
}

const symbolCategories = {
  hearts: {
    icon: Heart,
    symbols: ['♡', '♥', '💕', '💖', '💗', '💝', '💘', '💞', '💟', '❤️', '🤍', '🖤', '💜', '💛', '💚', '💙']
  },
  stars: {
    icon: Star,
    symbols: ['✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⭐', '🌟', '💫', '⭐️', '🌠', '✨']
  },
  aesthetic: {
    icon: Sparkles,
    symbols: ['◦', '•', '◌', '○', '●', '◊', '◈', '◆', '❖', '⌬', '⌾', '⚬', '⚪', '⚫', '⬢', '⬡']
  },
  dividers: {
    icon: Crown,
    symbols: ['─', '━', '┄', '┅', '┈', '┉', '╌', '╍', '═', '﹌', '﹍', '﹎', '﹏', '▔', '▬', '―']
  },
  music: {
    icon: Music,
    symbols: ['♪', '♫', '♬', '♭', '♮', '♯', '🎵', '🎶', '🎼', '🎤', '🎧', '🎸', '🎹', '🥁', '🎺', '🎻']
  }
};

const popularEmojis = [
  '✨', '🌙', '☀️', '🌸', '🌺', '🦋', '🌈', '☁️', '💫', '🔮', 
  '👑', '💎', '🌹', '🍃', '🌿', '🌷', '🌻', '🌊', '🍯', '🧚‍♀️'
];

export const SymbolPicker: React.FC<SymbolPickerProps> = ({ onSymbolSelect }) => {
  const [activeCategory, setActiveCategory] = useState('hearts');

  return (
    <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-pink-600" />
          Symbols & Emojis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(symbolCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(key)}
                className={`${
                  activeCategory === key 
                    ? "bg-pink-600 text-white" 
                    : "hover:bg-pink-50 dark:hover:bg-gray-700"
                }`}
              >
                <IconComponent className="h-4 w-4 mr-1" />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Button>
            );
          })}
        </div>

        {/* Symbol Grid */}
        <div className="grid grid-cols-8 gap-2">
          {symbolCategories[activeCategory as keyof typeof symbolCategories].symbols.map((symbol, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => onSymbolSelect(symbol)}
              className="aspect-square p-0 text-lg hover:bg-pink-50 dark:hover:bg-gray-700 hover:scale-110 transition-transform"
            >
              {symbol}
            </Button>
          ))}
        </div>

        {/* Popular Emojis Section */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Badge variant="secondary" className="mb-3">Popular Emojis</Badge>
          <div className="grid grid-cols-10 gap-2">
            {popularEmojis.map((emoji, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => onSymbolSelect(emoji)}
                className="aspect-square p-0 text-lg hover:bg-pink-50 dark:hover:bg-gray-700 hover:scale-110 transition-transform"
              >
                {emoji}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
