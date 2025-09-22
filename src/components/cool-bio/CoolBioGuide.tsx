
import React from 'react';
import { Flame, Sparkles, Star, Zap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export const CoolBioGuide: React.FC = () => {
  return (
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

          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-8 mb-4">
            Cool Bio Formula: The Science Behind Viral Profiles
          </h3>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">📊 Research-Based Bio Structure</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold min-w-[40px] text-center">1-2</span>
                <div>
                  <strong>Hook Lines:</strong> Attention-grabbing opener that defines who you are
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Examples: "Turning coffee into code ☕→💻" | "Plant mom raising 47 green babies 🌱"
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold min-w-[40px] text-center">3-4</span>
                <div>
                  <strong>Value Lines:</strong> What you offer or your expertise
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Examples: "Teaching 10k+ people digital marketing" | "Sharing budget travel hacks"
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold min-w-[40px] text-center">5</span>
                <div>
                  <strong>Call-to-Action:</strong> What you want visitors to do next
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Examples: "👇 Free guide below" | "📧 Weekly tips in my newsletter"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-8 mb-4">
            Psychology of Cool: What Makes People Hit Follow
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">🧠 The Curiosity Gap</h4>
              <p className="text-sm mb-2">Create intrigue without revealing everything</p>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                ❌ "I love traveling and food"<br/>
                ✅ "Collecting passport stamps & secret recipes 📍🍜"
              </div>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-3">⚡ The Specificity Principle</h4>
              <p className="text-sm mb-2">Specific details are more memorable than generic statements</p>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                ❌ "Fitness enthusiast"<br/>
                ✅ "5am gym warrior | 2x marathon finisher 🏃‍♂️"
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-8 mb-4">
            Advanced Cool Bio Techniques
          </h3>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🎯 Niche Stacking</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Combine 2-3 specific interests to create a unique positioning that's impossible to replicate.
              </p>
              <div className="text-xs bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                "Vegan bodybuilder teaching meal prep to busy parents 💪🥗👨‍👩‍👧‍👦"
              </div>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📈 Social Proof Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Include credible numbers or achievements that build immediate trust and authority.
              </p>
              <div className="text-xs bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                "Helped 500+ entrepreneurs launch profitable online businesses 🚀"
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🎨 Visual Formatting</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Use strategic spacing, emojis, and symbols to create visual hierarchy and improve readability.
              </p>
              <div className="text-xs bg-green-50 dark:bg-green-900/20 p-3 rounded font-mono">
                "🎨 Digital Artist<br/>
                ✨ Creating magic with pixels<br/>
                🎯 Commissions: OPEN<br/>
                👇 Latest artwork below"
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6 mt-8">
            <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">🔥 Trending Cool Bio Elements (2024 Data)</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>High-Converting Emojis:</strong><br/>
                🔥 (+23% engagement)<br/>
                ✨ (+18% follows)<br/>
                🎯 (+31% link clicks)<br/>
                💫 (+15% DMs)
              </div>
              <div>
                <strong>Power Symbols:</strong><br/>
                → (direction/action)<br/>
                ◦ ▪ (bullet points)<br/>
                | (separators)<br/>
                ↓ ↑ (call-to-action)
              </div>
              <div>
                <strong>Cool Styles 2024:</strong><br/>
                • Minimalist-chic<br/>
                • Retro-aesthetic<br/>
                • Tech-futuristic<br/>
                • Nature-inspired
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-6 mt-6">
            <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-3">🎪 Cool Bio Examples by Industry</h4>
            <div className="space-y-4 text-sm">
              <div>
                <strong className="text-purple-700 dark:text-purple-300">🎨 Creative Professional:</strong><br/>
                <span className="font-mono text-xs bg-white dark:bg-gray-800 p-2 rounded block mt-1">
                  "Pixel perfectionist by day ✨<br/>
                  Coffee-powered designer 🎨☕<br/>
                  Turning brands into visual stories<br/>
                  📧 hello@designer.com"
                </span>
              </div>
              <div>
                <strong className="text-blue-700 dark:text-blue-300">🏋️ Fitness Influencer:</strong><br/>
                <span className="font-mono text-xs bg-white dark:bg-gray-800 p-2 rounded block mt-1">
                  "Transforming bodies & minds 💪<br/>
                  500+ success stories 📈<br/>
                  Plant-based gains only 🌱<br/>
                  Free workout guide ↓"
                </span>
              </div>
              <div>
                <strong className="text-green-700 dark:text-green-300">🌍 Travel Blogger:</strong><br/>
                <span className="font-mono text-xs bg-white dark:bg-gray-800 p-2 rounded block mt-1">
                  "Chasing sunsets in 47 countries 🌅<br/>
                  Budget travel hacks & hidden gems<br/>
                  Next stop: New Zealand 🥝<br/>
                  Blog ↓ | Tips in stories 📖"
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
