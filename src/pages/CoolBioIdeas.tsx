
import React, { useState } from 'react';
import { Flame, Sparkles, Star, Zap } from 'lucide-react';
import { GenerateNewBios } from "@/components/GenerateNewBios";
import { CoolBioHeader } from "@/components/cool-bio/CoolBioHeader";
import { BioCategoryCard } from "@/components/cool-bio/BioCategoryCard";
import { PopularSearchTerms } from "@/components/cool-bio/PopularSearchTerms";
import { CoolBioGuide } from "@/components/cool-bio/CoolBioGuide";

const CoolBioIdeas = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/30'}`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CoolBioHeader darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

        <GenerateNewBios 
          bioType="cool"
          gradientColors="from-white via-orange-50/30 to-red-50/30 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50"
          accentColor="from-orange-500 to-red-500"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bioCategories.map((category, index) => (
            <BioCategoryCard
              key={index}
              title={category.title}
              ideas={category.ideas}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>

        <PopularSearchTerms />

        <CoolBioGuide />
      </div>
    </div>
  );
};

export default CoolBioIdeas;
