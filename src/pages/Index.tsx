
import React, { useState, useEffect } from 'react';
import { Type, Hash, Palette, Lightbulb, Wand2, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontSelector } from "@/components/FontSelector";
import { SymbolPicker } from "@/components/SymbolPicker";
import { TemplateSelector } from "@/components/TemplateSelector";
import { BioPreview } from "@/components/BioPreview";
import { AIBioGenerator } from "@/components/AIBioGenerator";
import { TubelightNavbar } from "@/components/TubelightNavbar";
import { Header } from "@/components/Header";
import SEOBlog from "@/components/SEOBlog";
import Footer from "@/components/ui/footer";

// New components
import { HomeHeader } from "@/components/home/HomeHeader";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { ProTipsCard } from "@/components/home/ProTipsCard";
import { BioInputSection } from "@/components/home/BioInputSection";
import { CopyBioButton } from "@/components/home/CopyBioButton";

const Index = () => {
  const [bioText, setBioText] = useState('');
  const [selectedFont, setSelectedFont] = useState('normal');
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('ai');
  const { toast } = useToast();
  const characterLimit = 150;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    {
      id: 'ai',
      label: 'AI Generator',
      icon: Wand2,
      onClick: () => setActiveSection('ai')
    },
    {
      id: 'templates',
      label: 'Templates',
      icon: Lightbulb,
      onClick: () => setActiveSection('templates')
    },
    {
      id: 'fonts',
      label: 'Fonts',
      icon: Type,
      onClick: () => setActiveSection('fonts')
    },
    {
      id: 'symbols',
      label: 'Symbols',
      icon: Hash,
      onClick: () => setActiveSection('symbols')    
    },
    {
      id: 'preview',
      label: 'Preview',
      icon: Palette,
      onClick: () => setActiveSection('preview')
    }
  ];

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

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30'}`}>
      {/* Header */}
      <Header />
      
      <div className="container mx-auto px-3 lg:px-4 py-4 lg:py-8 max-w-7xl">
        {/* Header */}
        <HomeHeader darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

        {/* Quick Links Section */}
        <QuickLinksSection />

        {/* Navigation */}
        <TubelightNavbar 
          items={navItems} 
          activeItem={activeSection} 
          onItemClick={handleNavClick} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Left Column - AI Generator, Templates, Font Selector */}
          <div className="space-y-4 lg:space-y-6">
            {/* AI Bio Generator */}
            <div id="ai">
              <AIBioGenerator onBioGenerated={handleAIBioGenerated} />
            </div>
            
            {/* Template Selector */}
            <div id="templates">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-indigo-50/20 to-blue-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
                <CardHeader className="pb-3 lg:pb-4 border-b border-gray-100 dark:border-gray-700">
                  <CardTitle className="flex items-center gap-2 lg:gap-3">
                    <div className="p-1.5 lg:p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500">
                      <Star className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                        Bio Templates
                      </h3>
                      <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-normal">
                        Quick start with pre-made templates
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 lg:pt-6">
                  <TemplateSelector onSelectTemplate={insertTemplate} />
                </CardContent>
              </Card>
            </div>

            {/* Font Selector */}
            <div id="fonts">
              <FontSelector 
                selectedFont={selectedFont} 
                onFontChange={setSelectedFont} 
                bioText={bioText} 
                setBioText={setBioText} 
              />
            </div>
          </div>

          {/* Right Column - Preview, Copy Button, Bio Input, Symbols, Tips */}
          <div className="space-y-4 lg:space-y-6">
            {/* Bio Preview */}
            <div id="preview">
              <BioPreview bioText={bioText} selectedFont={selectedFont} />
            </div>
            
            {/* Copy Button */}
            <CopyBioButton bioText={bioText} onCopy={copyToClipboard} />
            
            {/* Text Input */}
            <BioInputSection 
              bioText={bioText} 
              setBioText={setBioText} 
              characterLimit={characterLimit}
            />

            {/* Symbol Picker */}
            <div id="symbols">
              <SymbolPicker onSymbolSelect={insertSymbol} />
            </div>

            {/* Tips Card */}
            <ProTipsCard />
          </div>
        </div>
      </div>
      
      {/* SEO Blog Section */}
      <SEOBlog />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
