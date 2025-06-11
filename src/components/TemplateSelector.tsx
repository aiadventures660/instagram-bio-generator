
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, Camera, Palette, Coffee, Gamepad2, BookOpen, 
  Music, Heart, Star, Zap, Sun, Moon, Sparkles, Crown,
  Target, Rocket, Globe, Mountain, Waves, Flower2
} from 'lucide-react';

interface TemplateSelectorProps {
  onSelectTemplate: (template: string) => void;
}

const templates = [
  // Influencer Templates
  {
    icon: Camera,
    category: "Influencer",
    template: `✨ Content Creator & Dreamer\n📸 Capturing life's beautiful moments\n💌 Collab: youremail@gmail.com`,
    badge: "Popular"
  },
  {
    icon: Sparkles,
    category: "Influencer",
    template: `🌟 Digital Storyteller\n📱 Creating magic one post at a time\n🎯 DM for partnerships`,
    badge: "Trending"
  },
  {
    icon: Crown,
    category: "Influencer",
    template: `👑 Lifestyle Curator\n✨ Inspiring everyday moments\n🔗 Link in bio for collabs`,
    badge: "Elite"
  },

  // Business Templates
  {
    icon: Briefcase,
    category: "Business",
    template: `🏢 CEO & Entrepreneur\n💼 Building the future, one step at a time\n🌐 www.yourwebsite.com`,
    badge: "Professional"
  },
  {
    icon: Target,
    category: "Business",
    template: `🎯 Marketing Strategist\n📈 Turning ideas into results\n💡 Strategy calls: link in bio`,
    badge: "Expert"
  },
  {
    icon: Rocket,
    category: "Business",
    template: `🚀 Startup Founder\n🌟 Disrupting industries daily\n📧 hello@yourstartup.com`,
    badge: "Innovation"
  },

  // Artist Templates
  {
    icon: Palette,
    category: "Artist",
    template: `🎨 Digital Artist & Creative\n✨ Turning imagination into reality\n🖼️ Commissions: Open`,
    badge: "Creative"
  },
  {
    icon: Music,
    category: "Artist",
    template: `🎵 Music Producer & Sound Designer\n🎧 Creating beats that move souls\n🎤 Bookings: youremail@music.com`,
    badge: "Musical"
  },
  {
    icon: Flower2,
    category: "Artist",
    template: `🌸 Photographer & Visual Poet\n📷 Finding beauty in everyday moments\n🖼️ Prints available below`,
    badge: "Aesthetic"
  },

  // Lifestyle Templates
  {
    icon: Coffee,
    category: "Lifestyle",
    template: `☕ Coffee lover & Life enthusiast\n🌸 Living my best life daily\n📍 Currently in: Your City`,
    badge: "Cozy"
  },
  {
    icon: Sun,
    category: "Lifestyle",
    template: `☀️ Sunshine seeker & Adventure lover\n🌺 Spreading positivity everywhere\n✈️ Next destination: Unknown`,
    badge: "Positive"
  },
  {
    icon: Heart,
    category: "Lifestyle",
    template: `💖 Self-love advocate & wellness warrior\n🧘‍♀️ Mind, body, soul alignment\n🌱 Growing every single day`,
    badge: "Wellness"
  },

  // Gamer Templates
  {
    icon: Gamepad2,
    category: "Gamer",
    template: `🎮 Pro Gamer & Streamer\n🏆 Leveling up every day\n📺 Twitch: YourUsername`,
    badge: "Gaming"
  },
  {
    icon: Zap,
    category: "Gamer",
    template: `⚡ Esports Athlete\n🎯 Precision is my superpower\n🏅 Ranked #1 in your heart`,
    badge: "Competitive"
  },
  {
    icon: Star,
    category: "Gamer",
    template: `🌟 Content Creator & Gaming Enthusiast\n🎬 Epic moments, epic fails\n🔴 Live every evening`,
    badge: "Streamer"
  },

  // Minimal Templates
  {
    icon: BookOpen,
    category: "Minimal",
    template: `less is more\nsimple thoughts\nquiet moments`,
    badge: "Clean"
  },
  {
    icon: Moon,
    category: "Minimal",
    template: `🌙 dreamer\n☁️ wanderer\n✨ believer`,
    badge: "Dreamy"
  },
  {
    icon: Waves,
    category: "Minimal",
    template: `like waves\nI come and go\nbut leave traces`,
    badge: "Poetic"
  },

  // Travel Templates
  {
    icon: Globe,
    category: "Travel",
    template: `🌍 World Explorer & Culture Collector\n✈️ 47 countries and counting\n📸 Stories from the road`,
    badge: "Wanderlust"
  },
  {
    icon: Mountain,
    category: "Travel",
    template: `⛰️ Adventure Seeker & Peak Chaser\n🥾 Hiking through life one trail at a time\n🏕️ Currently exploring: Mountains`,
    badge: "Adventure"
  },

  // Fitness Templates
  {
    icon: Zap,
    category: "Fitness",
    template: `💪 Fitness Coach & Transformation Expert\n🔥 Your strongest version awaits\n📱 Workout plans in bio`,
    badge: "Strong"
  },
  {
    icon: Target,
    category: "Fitness",
    template: `🎯 Personal Trainer & Wellness Guide\n🏃‍♀️ Run your own race\n💯 Programs: link below`,
    badge: "Motivated"
  },

  // Food Templates
  {
    icon: Coffee,
    category: "Food",
    template: `👩‍🍳 Home Chef & Recipe Creator\n🍽️ Making everyday meals extraordinary\n📖 New recipes weekly`,
    badge: "Delicious"
  },
  {
    icon: Heart,
    category: "Food",
    template: `🥗 Nutritionist & Healthy Living Advocate\n🌱 Fuel your body, feed your soul\n📋 Meal plans available`,
    badge: "Healthy"
  }
];

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {templates.map((template, index) => {
        const IconComponent = template.icon;
        return (
          <Button
            key={index}
            variant="outline"
            onClick={() => onSelectTemplate(template.template)}
            className="h-auto p-4 flex flex-col items-start text-left hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200 group border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-md"
          >
            <div className="flex items-center justify-between w-full mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-200">
                  <IconComponent className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">{template.category}</span>
              </div>
              <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                {template.badge}
              </Badge>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-line group-hover:text-gray-800 dark:group-hover:text-gray-200 leading-relaxed">
              {template.template}
            </p>
          </Button>
        );
      })}
    </div>
  );
};
