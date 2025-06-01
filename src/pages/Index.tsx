
import React, { useState, useEffect } from 'react';
import { Copy, Sparkles, Heart, Star, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FontSelector } from "@/components/FontSelector";
import { SymbolPicker } from "@/components/SymbolPicker";
import { TemplateSelector } from "@/components/TemplateSelector";
import { BioPreview } from "@/components/BioPreview";

const Index = () => {
  const [bioText, setBioText] = useState('');
  const [selectedFont, setSelectedFont] = useState('normal');
  const [darkMode, setDarkMode] = useState(false);
  const { toast } = useToast();

  const characterLimit = 150;
  const charactersLeft = characterLimit - bioText.length;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bioText);
      toast({
        title: "Bio Copied! ✨",
        description: "Your aesthetic bio is ready to paste on Instagram!",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the text manually.",
        variant: "destructive",
      });
    }
  };

  const insertSymbol = (symbol: string) => {
    setBioText(prev => prev + symbol);
  };

  const insertTemplate = (template: string) => {
    setBioText(template);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50'}`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Instagram Bio Generator
            </h1>
            <Sparkles className="h-8 w-8 text-pink-600" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create aesthetic Instagram bios with fancy fonts, symbols, and perfect line breaks. 
            Stand out with a bio that's uniquely you! ✨
          </p>
          
          {/* Dark Mode Toggle */}
          <Button
            onClick={() => setDarkMode(!darkMode)}
            variant="outline"
            size="sm"
            className="mt-4"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {darkMode ? 'Light' : 'Dark'} Mode
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Bio Editor */}
          <div className="space-y-6">
            {/* Template Selector */}
            <TemplateSelector onSelectTemplate={insertTemplate} />
            
            {/* Text Input */}
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span>Write Your Bio</span>
                  <Badge 
                    variant={charactersLeft < 0 ? "destructive" : charactersLeft < 20 ? "secondary" : "default"}
                    className="text-xs"
                  >
                    {charactersLeft} chars left
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={bioText}
                  onChange={(e) => setBioText(e.target.value)}
                  placeholder="Type your bio here... Use line breaks and emojis! ✨"
                  className="min-h-32 resize-none border-0 focus:ring-2 focus:ring-purple-500"
                  maxLength={characterLimit + 50} // Allow slight overflow for editing
                />
              </CardContent>
            </Card>

            {/* Font Selector */}
            <FontSelector 
              selectedFont={selectedFont} 
              onFontChange={setSelectedFont}
              bioText={bioText}
              setBioText={setBioText}
            />

            {/* Symbol Picker */}
            <SymbolPicker onSymbolSelect={insertSymbol} />
          </div>

          {/* Right Column - Preview & Actions */}
          <div className="space-y-6">
            {/* Bio Preview */}
            <BioPreview bioText={bioText} selectedFont={selectedFont} />
            
            {/* Copy Button */}
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Button 
                  onClick={copyToClipboard}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3"
                  disabled={!bioText.trim()}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Bio to Clipboard
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                  Copy and paste directly into your Instagram bio!
                </p>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>• Use symbols to create visual breaks between sections</p>
                <p>• Keep it concise but memorable - first impressions matter!</p>
                <p>• Include a call-to-action or link to your content</p>
                <p>• Test how your bio looks on mobile devices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
