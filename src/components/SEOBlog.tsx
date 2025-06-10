
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users, Zap, Star, Heart, Search, Target } from 'lucide-react';

const SEOBlog: React.FC = () => {
  const keywordSections = [
    {
      title: "Free Instagram Bio Generator - Create Perfect Bios in Seconds",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      content: [
        "Transform your Instagram profile with our free AI-powered bio generator. Create engaging, unique, and professional Instagram bios that capture your personality and attract followers.",
        "Our Instagram bio maker uses advanced artificial intelligence to generate creative bio ideas tailored to your interests, profession, and style preferences."
      ],
      keywords: ["free instagram bio generator", "ai bio generator", "instagram bio maker", "bio creator"]
    },
    {
      title: "AI-Powered Bio Creation for Maximum Engagement",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      content: [
        "Leverage cutting-edge AI technology to craft Instagram bios that stand out. Our intelligent bio generator analyzes trending patterns and user preferences to create compelling profile descriptions.",
        "Generate multiple bio variations instantly and choose the perfect one that represents your brand, personality, or business goals."
      ],
      keywords: ["ai instagram bio", "smart bio generator", "automated bio creation", "intelligent profile maker"]
    },
    {
      title: "Professional Instagram Bio Templates & Ideas",
      icon: Target,
      gradient: "from-green-500 to-emerald-500",
      content: [
        "Access hundreds of professional Instagram bio templates designed for influencers, businesses, creators, and personal brands. Find the perfect bio format for your niche.",
        "From minimalist designs to emoji-rich creative bios, discover templates that convert visitors into followers and boost your Instagram presence."
      ],
      keywords: ["instagram bio templates", "professional bio ideas", "business instagram bio", "influencer bio generator"]
    },
    {
      title: "Stylish Fonts & Symbols for Unique Instagram Profiles",
      icon: Star,
      gradient: "from-orange-500 to-red-500",
      content: [
        "Make your Instagram bio stand out with stylish fonts, special characters, and eye-catching symbols. Our font generator offers dozens of aesthetic text styles.",
        "Copy and paste unique fonts directly into your Instagram bio. Add line breaks, emojis, and special symbols to create visually appealing profile descriptions."
      ],
      keywords: ["instagram fonts", "aesthetic bio fonts", "instagram symbols", "stylish text generator"]
    },
    {
      title: "Boost Your Instagram Growth with Optimized Bios",
      icon: TrendingUp,
      gradient: "from-pink-500 to-rose-500",
      content: [
        "Optimize your Instagram bio for maximum discoverability and engagement. Learn how to write bios that convert, attract your target audience, and grow your follower count.",
        "Our bio optimization tips help you create compelling calls-to-action, use relevant keywords, and structure your bio for better Instagram algorithm performance."
      ],
      keywords: ["instagram growth", "bio optimization", "instagram marketing", "profile optimization"]
    },
    {
      title: "Creative Bio Ideas for Every Instagram User",
      icon: Heart,
      gradient: "from-violet-500 to-purple-500",
      content: [
        "Whether you're a content creator, business owner, artist, or student, find creative bio ideas that perfectly represent your unique identity and goals.",
        "Explore trending bio formats, popular phrases, and creative writing techniques that make Instagram profiles memorable and engaging."
      ],
      keywords: ["creative instagram bios", "unique bio ideas", "personal branding", "instagram profile tips"]
    }
  ];

  const trendingKeywords = [
    "Free Instagram Bio Generator", "AI Bio Creator", "Instagram Bio Maker", "Bio Generator Online",
    "Instagram Profile Generator", "Social Media Bio Tool", "Aesthetic Bio Generator", "Professional Instagram Bio",
    "Creative Bio Ideas", "Instagram Bio Templates", "Bio Writing Tool", "Instant Bio Creator",
    "Stylish Instagram Fonts", "Bio Optimization Tool", "Instagram Marketing Tool", "Personal Branding Bio"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Ultimate Instagram Bio Generator Guide
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover everything you need to know about creating perfect Instagram bios with our free AI-powered tool. 
            From creative ideas to professional templates, we've got you covered.
          </p>
        </div>

        {/* Trending Keywords */}
        <Card className="mb-12 shadow-lg border-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <span className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Trending Instagram Bio Keywords
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {trendingKeywords.map((keyword, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 hover:from-blue-200 hover:to-indigo-200 dark:hover:from-blue-800 dark:hover:to-indigo-800 transition-all duration-200 cursor-pointer"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SEO Content Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {keywordSections.map((section, index) => (
            <Card 
              key={index}
              className="group shadow-lg border-0 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${section.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent mb-2`}>
                      {section.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {section.keywords.map((keyword, kidx) => (
                        <Badge 
                          key={kidx}
                          variant="outline"
                          className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-6 space-y-4">
                {section.content.map((paragraph, pidx) => (
                  <p 
                    key={pidx}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm"
                  >
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Features Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Our Instagram Bio Generator?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Instant Generation",
                description: "Create perfect Instagram bios in seconds with our AI-powered generator",
                keywords: "instant bio generator, quick bio maker"
              },
              {
                icon: Star,
                title: "Professional Quality",
                description: "Get high-quality, engaging bios that boost your Instagram presence",
                keywords: "professional instagram bios, quality bio generator"
              },
              {
                icon: Users,
                title: "For Everyone",
                description: "Perfect for influencers, businesses, creators, and personal accounts",
                keywords: "universal bio generator, instagram bio for all"
              },
              {
                icon: Heart,
                title: "100% Free",
                description: "No hidden costs, no subscriptions - completely free Instagram bio tool",
                keywords: "free bio generator, no cost instagram tool"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                  {feature.keywords}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="inline-block shadow-2xl border-0 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Create Your Perfect Instagram Bio?
              </h3>
              <p className="text-lg mb-6 text-purple-100">
                Join thousands of users who've boosted their Instagram presence with our free AI bio generator
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #InstagramBioGenerator
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #AIBioMaker
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #FreeInstagramTool
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #SocialMediaOptimization
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SEOBlog;
