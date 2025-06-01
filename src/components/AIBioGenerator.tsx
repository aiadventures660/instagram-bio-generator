
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wand2, RefreshCw, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

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
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();

  const generateBio = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key to generate AI bios.",
        variant: "destructive",
      });
      return;
    }

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
      const prompt = `Create 3 Instagram bio variations for someone with these details:
      
Interests: ${interests || 'Not specified'}
Profession: ${profession || 'Not specified'}
Personality: ${personality || 'Not specified'}
Tone: ${selectedTone || 'Casual'}
Style: ${selectedStyle || 'With Emojis'}

Requirements:
- Keep each bio under 150 characters
- Make them unique and engaging
- ${selectedStyle.includes('Emojis') ? 'Include relevant emojis' : 'Minimal or no emojis'}
- ${selectedStyle.includes('Line Breaks') ? 'Use line breaks for visual appeal' : 'Keep compact'}
- Each bio should feel authentic and personal
- Return only the 3 bios, separated by "---"

Example format:
Bio 1 text here
---
Bio 2 text here  
---
Bio 3 text here`;

      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.8,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate bio');
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (generatedText) {
        const bios = generatedText.split('---').map((bio: string) => bio.trim()).filter((bio: string) => bio.length > 0);
        setGeneratedBios(bios);
        
        toast({
          title: "Bios Generated! ✨",
          description: `Created ${bios.length} unique bio variations for you.`,
        });
      } else {
        throw new Error('No content generated');
      }
    } catch (error) {
      console.error('Error generating bio:', error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate bio. Please check your API key and try again.",
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
    <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-purple-600" />
          AI Bio Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* API Key Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Gemini API Key</label>
          <Input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Gemini API key..."
            className="text-xs"
          />
          <p className="text-xs text-gray-500">
            Get your free API key from{' '}
            <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Google AI Studio
            </a>
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Interests & Hobbies</label>
            <Input
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="Photography, travel, coffee, fitness..."
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Profession</label>
            <Input
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="Content creator, designer, entrepreneur..."
              className="mt-1"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium">Personality (Optional)</label>
            <Textarea
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              placeholder="Describe yourself in a few words..."
              className="mt-1 min-h-16 resize-none"
              maxLength={100}
            />
          </div>
        </div>

        {/* Tone Selection */}
        <div>
          <label className="text-sm font-medium mb-2 block">Tone</label>
          <div className="flex flex-wrap gap-2">
            {toneOptions.map((tone) => (
              <Button
                key={tone}
                variant={selectedTone === tone ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTone(selectedTone === tone ? '' : tone)}
                className={selectedTone === tone ? "bg-purple-600 text-white" : ""}
              >
                {tone}
              </Button>
            ))}
          </div>
        </div>

        {/* Style Selection */}
        <div>
          <label className="text-sm font-medium mb-2 block">Style</label>
          <div className="flex flex-wrap gap-2">
            {styleOptions.map((style) => (
              <Button
                key={style}
                variant={selectedStyle === style ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStyle(selectedStyle === style ? '' : style)}
                className={selectedStyle === style ? "bg-purple-600 text-white" : ""}
              >
                {style}
              </Button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <Button 
          onClick={generateBio}
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Generate AI Bio
            </>
          )}
        </Button>

        {/* Generated Bios */}
        {generatedBios.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="font-medium text-sm">Generated Bios</span>
              <Badge variant="secondary" className="text-xs">
                {generatedBios.length} variations
              </Badge>
            </div>
            
            {generatedBios.map((bio, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600"
              >
                <p className="text-sm whitespace-pre-line mb-3 leading-relaxed">
                  {bio}
                </p>
                <Button
                  size="sm"
                  onClick={() => selectBio(bio)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Use This Bio
                </Button>
              </div>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={generateBio}
              disabled={isGenerating}
              className="w-full"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate New Variations
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
