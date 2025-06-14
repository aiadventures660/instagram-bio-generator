import React, { useState } from 'react';
import { Flame, Sparkles, Star, Zap, Moon, Sun, ArrowLeft, Lightbulb, Copy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { GenerateNewBios } from "@/components/GenerateNewBios";

const CoolBioIdeas = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async (bioText: string) => {
    try {
      await navigator.clipboard.writeText(bioText);
      toast({
        title: "Bio Copied! ✨",
        description: "Bio copied to clipboard - ready to paste on Instagram!"
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the text manually.",
        variant: "destructive"
      });
    }
  };

  const bioCategories = [
    {
      title: "Trendy One-Liners",
      ideas: [
        "Living my best life, one coffee at a time ☕",
        "Collecting moments, not things 📸",
        "Born to express, not to impress ✨",
        "Creating my own sunshine 🌞",
        "Spreading good vibes only 🌈"
      ],
      icon: Flame,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Creative & Artistic",
      ideas: [
        "Painting my world with colors of joy 🎨",
        "Music is my language, melodies are my words 🎵",
        "Capturing life through my lens 📷",
        "Words are my paint, stories are my canvas ✍️",
        "Dancing through life with passion 💃"
      ],
      icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Motivational & Inspiring",
      ideas: [
        "Dream big, work hard, stay humble 💪",
        "Turning dreams into plans 📝",
        "Making every day count 🌟",
        "Chasing goals, not people 🏃‍♀️",
        "Building my empire one step at a time 👑"
      ],
      icon: Star,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Lifestyle & Travel",
      ideas: [
        "Wanderlust and city dust 🌍",
        "Passport full of stamps, heart full of memories ✈️",
        "Exploring the world, one city at a time 🗺️",
        "Adventure awaits, go find it 🏔️",
        "Living life in full bloom 🌺"
      ],
      icon: Zap,
      color: "from-green-500 to-teal-500"
    }
  ];

  const longTailKeywords = [
    "cool Instagram bio ideas for girls",
    "unique Instagram bio ideas 2024",
    "creative Instagram bio ideas for boys",
    "short Instagram bio ideas with emojis",
    "Instagram bio ideas for business owners",
    "aesthetic Instagram bio ideas with quotes",
    "funny Instagram bio ideas that get followers",
    "Instagram bio ideas for photographers",
    "cool Instagram bio ideas for students",
    "Instagram bio ideas for influencers"
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/30'}`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Generator
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Cool Instagram Bio Ideas
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the coolest Instagram bio ideas that will make your profile stand out from the crowd. 
              Get inspired with creative, unique, and trendy bio concepts for every personality and style.
            </p>
          </div>

          <Button 
            onClick={() => setDarkMode(!darkMode)} 
            variant="outline" 
            size="sm" 
            className="mt-6 mx-auto block"
          >
            {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
            {darkMode ? 'Light' : 'Dark'} Mode
          </Button>
        </div>

        {/* Generate New Bios Component */}
        <GenerateNewBios 
          bioType="cool"
          gradientColors="from-white via-orange-50/30 to-red-50/30 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50"
          accentColor="from-orange-500 to-red-500"
        />

        {/* Bio Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bioCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/30 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                      {category.ideas.length} cool bio ideas
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.ideas.map((idea, ideaIndex) => (
                  <div key={ideaIndex} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Badge variant="outline" className="text-xs">
                      {ideaIndex + 1}
                    </Badge>
                    <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                      {idea}
                    </p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(idea)}
                      className="h-8 w-8 p-0 hover:bg-orange-100 dark:hover:bg-orange-900/20"
                      title="Copy bio to clipboard"
                    >
                      <Copy className="h-3 w-3 text-orange-600" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Long-tail Keywords Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 mb-12">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Star className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Popular Bio Search Terms
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                  Trending Instagram bio ideas people are searching for
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {longTailKeywords.map((keyword, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <Sparkles className="h-4 w-4 text-purple-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{keyword}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SEO Blog Content */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-orange-50/20 to-red-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              The Ultimate Guide to Cool Instagram Bio Ideas
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                Your Instagram bio is your digital first impression. With over 2 billion monthly active users, 
                standing out requires creativity, authenticity, and strategic thinking. Cool Instagram bio ideas 
                help you express your personality while attracting the right audience to your profile.
              </p>

              <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-8 mb-4">
                What Makes an Instagram Bio "Cool"?
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span><strong>Authenticity:</strong> Cool bios reflect genuine personality and interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                  <span><strong>Creativity:</strong> Unique formatting, clever wordplay, and original content</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>Memorability:</strong> Something that sticks in people's minds</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Relevance:</strong> Current trends, relatable content, and timely references</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-8 mb-4">
                Cool Bio Ideas by Personality Type
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">The Adventurer</h4>
                  <p className="text-sm">Travel-focused, outdoorsy, always seeking new experiences</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">The Creative</h4>
                  <p className="text-sm">Artistic, expressive, showcasing talents and passion projects</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">The Minimalist</h4>
                  <p className="text-sm">Clean, simple, focusing on essential information only</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">The Motivator</h4>
                  <p className="text-sm">Inspiring, goal-oriented, sharing positivity and success</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6 mt-8">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">🔥 Trending Bio Elements for 2024</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Emojis:</strong> 🌟 ✨ 🔥 💫 🦋
                  </div>
                  <div>
                    <strong>Symbols:</strong> ◦ ▪ ▫ ◊ ◈
                  </div>
                  <div>
                    <strong>Styles:</strong> Minimalist, Aesthetic, Bold
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoolBioIdeas;
