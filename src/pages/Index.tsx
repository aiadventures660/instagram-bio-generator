import React, { useState, useEffect } from 'react';
import { Copy, Sparkles, Heart, Star, Moon, Sun, Type, Hash, Palette, Lightbulb, Wand2, Edit3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FontSelector } from "@/components/FontSelector";
import { SymbolPicker } from "@/components/SymbolPicker";
import { TemplateSelector } from "@/components/TemplateSelector";
import { BioPreview } from "@/components/BioPreview";
import { AIBioGenerator } from "@/components/AIBioGenerator";
import { TubelightNavbar } from "@/components/TubelightNavbar";
import SEOBlog from "@/components/SEOBlog";
import Footer from "@/components/ui/footer";
const Index = () => {
  const [bioText, setBioText] = useState('');
  const [selectedFont, setSelectedFont] = useState('normal');
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('ai');
  const {
    toast
  } = useToast();
  const characterLimit = 150;
  const charactersLeft = characterLimit - bioText.length;
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const navItems = [{
    id: 'ai',
    label: 'AI Generator',
    icon: Wand2,
    onClick: () => setActiveSection('ai')
  }, {
    id: 'templates',
    label: 'Templates',
    icon: Lightbulb,
    onClick: () => setActiveSection('templates')
  }, {
    id: 'fonts',
    label: 'Fonts',
    icon: Type,
    onClick: () => setActiveSection('fonts')
  }, {
    id: 'symbols',
    label: 'Symbols',
    icon: Hash,
    onClick: () => setActiveSection('symbols')
  }, {
    id: 'preview',
    label: 'Preview',
    icon: Palette,
    onClick: () => setActiveSection('preview')
  }];
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bioText);
      toast({
        title: "Bio Copied! ✨",
        description: "Your aesthetic bio is ready to paste on Instagram!"
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the text manually.",
        variant: "destructive"
      });
    }
  };
  const insertSymbol = (symbol: string) => {
    setBioText(prev => prev + symbol);
  };
  const insertTemplate = (template: string) => {
    setBioText(template);
  };
  const handleAIBioGenerated = (generatedBio: string) => {
    setBioText(generatedBio);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handleNavClick = (itemId: string) => {
    setActiveSection(itemId);
    scrollToSection(itemId);
  };
  return <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30'}`}>
      <div className="container mx-auto px-4 py-6 lg:py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Instagram Bio Generator
            </h1>
            <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Create stunning Instagram bios with AI generation, fancy fonts, symbols, and perfect formatting. 
            Stand out with a bio that's uniquely you! ✨
          </p>
          
          {/* Dark Mode Toggle */}
          <Button onClick={() => setDarkMode(!darkMode)} variant="outline" size="sm" className="mt-6 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
            {darkMode ? 'Light' : 'Dark'} Mode
          </Button>
        </div>

        {/* Navigation */}
        <TubelightNavbar items={navItems} activeItem={activeSection} onItemClick={handleNavClick} />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - AI Generator, Templates, Font Selector */}
          <div className="space-y-6">
            {/* AI Bio Generator */}
            <div id="ai">
              <AIBioGenerator onBioGenerated={handleAIBioGenerated} />
            </div>
            
            {/* Template Selector */}
            <div id="templates">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-indigo-50/20 to-blue-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
                <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                        Bio Templates
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                        Quick start with pre-made templates
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <TemplateSelector onSelectTemplate={insertTemplate} />
                </CardContent>
              </Card>
            </div>

            {/* Font Selector */}
            <div id="fonts">
              <FontSelector selectedFont={selectedFont} onFontChange={setSelectedFont} bioText={bioText} setBioText={setBioText} />
            </div>
          </div>

          {/* Right Column - Preview, Copy Button, Bio Input, Symbols, Tips */}
          <div className="space-y-6">
            {/* Bio Preview */}
            <div id="preview">
              <BioPreview bioText={bioText} selectedFont={selectedFont} />
            </div>
            
            {/* Copy Button - Moved below Instagram Preview */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-orange-50/20 to-red-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
              <CardContent className="pt-6 py-[13px]">
                <Button onClick={copyToClipboard} className="w-full h-14 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-200" disabled={!bioText.trim()}>
                  <Copy className="h-5 w-5 mr-3" />
                  Copy Bio to Clipboard
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
                  Copy and paste directly into your Instagram bio!
                </p>
              </CardContent>
            </Card>
            
            {/* Text Input - Enhanced with highlighting */}
            <Card className="shadow-lg border-2 border-green-200 dark:border-green-600 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm relative overflow-hidden">
              {/* Pulsing highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-green-400/10 animate-pulse"></div>
              
              {/* Spotlight indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400 animate-pulse">
                  Customize Here!
                </span>
              </div>
              
              <CardHeader className="pb-4 border-b border-green-100 dark:border-green-700 relative z-10">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                      <Edit3 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent flex items-center gap-2">
                        Write Your Bio
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 animate-bounce">
                          Start Here!
                        </span>
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                        Craft your perfect Instagram bio • Customize any template
                      </p>
                    </div>
                  </div>
                  <Badge variant={charactersLeft < 0 ? "destructive" : charactersLeft < 20 ? "secondary" : "default"} className="text-sm px-3 py-1">
                    {charactersLeft} chars left
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 relative z-10">
                <div className="relative">
                  <Textarea value={bioText} onChange={e => setBioText(e.target.value)} placeholder="✨ Type your bio here, or use AI generation and templates above to get started! ✨

Use line breaks and emojis to make it pop! 
Try: Your Name | Your Passion | Your Goal" className="min-h-32 resize-none border-green-200 dark:border-green-600 focus:border-green-500 dark:focus:border-green-400 text-base leading-relaxed bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm" maxLength={characterLimit + 50} />
                  {/* Floating helper text */}
                  {!bioText && <div className="absolute top-2 right-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded-lg animate-pulse">
                      👆 Click to customize!
                    </div>}
                </div>
              </CardContent>
            </Card>

            {/* Symbol Picker */}
            <div id="symbols">
              <SymbolPicker onSymbolSelect={insertSymbol} />
            </div>

            {/* Tips Card */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-yellow-50/20 to-amber-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
              <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                      Pro Tips
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                      Make your bio stand out
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p>Use AI generation for personalized bio ideas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p>Click "New Templates" to refresh bio template options</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p>Use symbols to create visual breaks between sections</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p>Keep it concise but memorable - first impressions matter!</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p>Include a call-to-action or link to your content</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p>Test how your bio looks on mobile devices</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* SEO Blog Section */}
      <SEOBlog />
      
      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;