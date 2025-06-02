
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Type } from 'lucide-react';

interface FontSelectorProps {
  selectedFont: string;
  onFontChange: (font: string) => void;
  bioText: string;
  setBioText: (text: string) => void;
}

const fontTransforms = {
  normal: (text: string) => text,
  bold: (text: string) => text.replace(/[a-zA-Z0-9]/g, (char) => {
    const boldMap: {[key: string]: string} = {
      'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
      'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
      'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
      'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
      'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
      'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
      '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
    };
    return boldMap[char] || char;
  }),
  italic: (text: string) => text.replace(/[a-zA-Z]/g, (char) => {
    const italicMap: {[key: string]: string} = {
      'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫',
      'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵',
      'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
      'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
      'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
      'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡'
    };
    return italicMap[char] || char;
  }),
  cursive: (text: string) => text.replace(/[a-zA-Z]/g, (char) => {
    const cursiveMap: {[key: string]: string} = {
      'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
      'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
      'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
      'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥',
      'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯',
      'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
    };
    return cursiveMap[char] || char;
  }),
  fancy: (text: string) => text.replace(/[a-zA-Z]/g, (char) => {
    const fancyMap: {[key: string]: string} = {
      'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
      'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'Q', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ',
      'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
      'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
      'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'Q', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ',
      'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
    };
    return fancyMap[char] || char;
  }),
  spaced: (text: string) => text.split('').join(' ')
};

const fontStyles = [
  { key: 'normal', name: 'Normal', preview: 'Hello World' },
  { key: 'bold', name: 'Bold', preview: '𝗛𝗲𝗹𝗹𝗼 𝗪𝗼𝗿𝗹𝗱' },
  { key: 'italic', name: 'Italic', preview: '𝘏𝘦𝘭𝘭𝘰 𝘞𝘰𝘳𝘭𝘥' },
  { key: 'cursive', name: 'Cursive', preview: '𝒽𝑒𝓁𝓁𝑜 𝓌𝑜𝓇𝓁𝒹' },
  { key: 'fancy', name: 'Small Caps', preview: 'ʜᴇʟʟᴏ ᴡᴏʀʟᴅ' },
  { key: 'spaced', name: 'Spaced', preview: 'H e l l o   W o r l d' }
];

export const FontSelector: React.FC<FontSelectorProps> = ({ selectedFont, onFontChange, bioText, setBioText }) => {
  const applyFont = (fontKey: string) => {
    if (bioText) {
      const transformer = fontTransforms[fontKey as keyof typeof fontTransforms];
      setBioText(transformer(bioText));
    }
    onFontChange(fontKey);
  };

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
      <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
            <Type className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Font Styles
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              Transform your text with unique fonts
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-3">
          {fontStyles.map((style) => (
            <Button
              key={style.key}
              variant={selectedFont === style.key ? "default" : "outline"}
              onClick={() => applyFont(style.key)}
              className={`h-auto p-4 flex flex-col items-start text-left transition-all duration-200 ${
                selectedFont === style.key 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" 
                  : "hover:bg-blue-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
              }`}
            >
              <span className="font-semibold text-sm mb-2">{style.name}</span>
              <span className="text-xs opacity-90 leading-relaxed">{style.preview}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
