
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wand2, RefreshCw, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AIBioGeneratorProps {
  onBioGenerated: (bio: string) => void;
}

const toneOptions = [
  'Professional', 'Casual', 'Funny', 'Inspirational', 
  'Minimalist', 'Creative', 'Bold', 'Aesthetic'
];

const styleOptions = [
  'With Emojis', 'Clean Text', 'Symbol Heavy', 
  'Line Breaks', 'Hashtag Style', 'Quote Style'
];

export const AIBioGenerator: React.FC<AIBioGeneratorProps> = ({ onBioGenerated }) => {
  const [interests, setInterests] = useState('');
  const [profession, setProfession] = useState('');
  const [personality, setPersonality] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBios, setGeneratedBios] = useState<string[]>([]);
  const { toast } = useToast();

  const generateBio = async () => {
    if (!interests.trim() && !profession.trim()) {
      toast({
        title: "More Information Needed",
        description: "Please provide at least your interests or profession.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      console.log('Calling generate-bio function...');
      
      const { data, error } = await supabase.functions.invoke('generate-bio', {
        body: {
          interests: interests.trim(),
          profession: profession.trim(),
          personality: personality.trim(),
          tone: selectedTone,
          style: selectedStyle
        }
      });

      if (error) {
        console.error('Function invocation error:', error);
        throw new Error(error.message || 'Failed to generate bio');
      }

      if (data?.bios && Array.isArray(data.bios)) {
        setGeneratedBios(data.bios);
        toast({
          title: "Bios Generated! ✨",
          description: `Created ${data.bios.length} unique bio variations for you.`,
        });
      } else {
        throw new Error('Invalid response format from API');
      }
    } catch (error) {
      console.error('Error generating bio:', error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate bio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const selectBio = (bio: string) => {
    onBioGenerated(bio);
    toast({
      title: "Bio Selected! 🎉",
      description: "Your AI-generated bio has been added to the editor.",
    });
  };

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
      <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
            <Wand2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Bio Generator
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              Generate personalized Instagram bios with AI
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        {/* Input Section */}
        <div className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Interests & Hobbies
              </label>
              <Input
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="Photography, travel, coffee..."
                className="border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Profession
              </label>
              <Input
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                placeholder="Content creator, designer..."
                className="border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Personality (Optional)
            </label>
            <Textarea
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              placeholder="Describe yourself in a few words..."
              className="min-h-20 resize-none border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
              maxLength={100}
            />
          </div>
        </div>

        {/* Style Selection */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Tone
            </label>
            <div className="grid grid-cols-2 gap-2">
              {toneOptions.map((tone) => (
                <Button
                  key={tone}
                  variant={selectedTone === tone ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTone(selectedTone === tone ? '' : tone)}
                  className={`h-9 text-xs transition-all ${
                    selectedTone === tone 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" 
                      : "hover:bg-purple-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600"
                  }`}
                >
                  {tone}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Style
            </label>
            <div className="grid grid-cols-2 gap-2">
              {styleOptions.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStyle(selectedStyle === style ? '' : style)}
                  className={`h-9 text-xs transition-all ${
                    selectedStyle === style 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" 
                      : "hover:bg-purple-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600"
                  }`}
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <Button 
          onClick={generateBio}
          disabled={isGenerating}
          className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Generating Amazing Bios...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-2" />
              Generate AI Bio
            </>
          )}
        </Button>

        {/* Generated Bios */}
        {generatedBios.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Generated Bios</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  {generatedBios.length} variations
                </Badge>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={generateBio}
                disabled={isGenerating}
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-gray-700"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Regenerate
              </Button>
            </div>
            
            <div className="grid gap-3">
              {generatedBios.map((bio, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed whitespace-pre-line text-gray-800 dark:text-gray-200 mb-3">
                        {bio}
                      </p>
                      <Button
                        size="sm"
                        onClick={() => selectBio(bio)}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-sm"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Use This Bio
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
