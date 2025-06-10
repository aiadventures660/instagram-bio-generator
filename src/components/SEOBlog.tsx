
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users, Zap, Star, Heart, Search, Target, Type, Copy, Smile } from 'lucide-react';

const SEOBlog: React.FC = () => {
  const keywordSections = [
    {
      title: "Free Instagram Bio Generator - Create Perfect Bios in Seconds",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      content: [
        "Transform your Instagram profile with our free Instagram bio generator. Create engaging, unique, and professional Instagram bios that capture your personality and attract followers. Our Instagram bio generator free tool uses advanced artificial intelligence to generate creative bio ideas tailored to your interests, profession, and style preferences.",
        "Whether you're looking for an Instagram bio generator for girls, Instagram bio generator for boy, or Instagram professional bio generator, our AI-powered tool creates personalized content that stands out from the crowd."
      ],
      keywords: ["instagram bio generator", "free instagram bio generator", "instagram bio generator free", "instagram professional bio generator"]
    },
    {
      title: "Instagram Bio Generator Font & Stylish Text Options",
      icon: Type,
      gradient: "from-blue-500 to-cyan-500",
      content: [
        "Enhance your profile with our Instagram bio generator font features. Access stylish font generator for instagram bio options, fancy text generator bio for instagram, and cool text generator for instagram bio styles. Our Instagram font generator online copy and paste bio tool makes it easy to apply beautiful typography.",
        "From Instagram bio generator font stylish options to fancy text generator for instagram bio designs, create eye-catching profiles with our font generator instagram bio capabilities. Make your bio stand out with our stylish instagram bio generator font collection."
      ],
      keywords: ["instagram bio generator font", "font generator instagram bio", "stylish font generator for instagram bio", "instagram font generator"]
    },
    {
      title: "Instagram Bio Generator Copy and Paste with Emojis",
      icon: Copy,
      gradient: "from-green-500 to-emerald-500",
      content: [
        "Get instant results with our Instagram bio generator copy and paste functionality. Our Instagram bio generator with emoji features and Instagram bio generator with emoji copy and paste options make it simple to create engaging profiles. Add personality with our comprehensive emoji collection.",
        "Our Instagram bio generator aesthetic tool combines beautiful fonts with perfect emoji placement, creating Instagram bio generator with emoji designs that capture attention and express your unique style."
      ],
      keywords: ["instagram bio generator copy and paste", "instagram bio generator with emoji", "instagram bio generator with emoji copy and paste", "instagram bio generator aesthetic"]
    },
    {
      title: "AI-Powered Instagram Bio Generator for Maximum Engagement",
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
      content: [
        "Leverage cutting-edge technology with our Instagram bio generator ai features. Our free ai bio generator for instagram analyzes trending patterns and user preferences to create compelling profile descriptions. The Instagram bio generator ai system generates multiple bio variations instantly.",
        "Our AI bio generator Instagram tool understands context, personality, and brand goals to deliver personalized results. Experience the power of artificial intelligence with our advanced Instagram bio generator ai technology."
      ],
      keywords: ["instagram bio generator ai", "ai bio generator instagram", "free ai bio generator for instagram", "instagram ai bio generator"]
    },
    {
      title: "Instagram Bio Generator Symbol & Special Characters",
      icon: Star,
      gradient: "from-pink-500 to-rose-500",
      content: [
        "Make your profile unique with our Instagram bio generator symbol collection. Access hundreds of special characters, decorative symbols, and Instagram bio generator symbol options to create visually appealing profile descriptions.",
        "Our symbol library includes arrows, hearts, stars, and custom Instagram bio generator symbol designs that help organize your bio content and create visual breaks between different sections of your profile."
      ],
      keywords: ["instagram bio generator symbol", "instagram symbols", "bio symbols", "instagram special characters"]
    },
    {
      title: "Specialized Instagram Bio Generators for Every User",
      icon: Target,
      gradient: "from-violet-500 to-purple-500",
      content: [
        "Discover specialized tools including cute instagram bio generator options, Instagram business bio generator features, and Instagram stylish bio generator templates. Our platform offers Instagram space bio generator for creative layouts and center instagram bio generator for perfect alignment.",
        "Whether you need an Instagram business bio generator for professional profiles or a cute instagram bio generator for personal accounts, our comprehensive toolkit has everything you need to create the perfect Instagram presence."
      ],
      keywords: ["cute instagram bio generator", "instagram business bio generator", "instagram stylish bio generator", "center instagram bio generator"]
    },
    {
      title: "Popular Instagram Bio Generator Tools & Alternatives",
      icon: Users,
      gradient: "from-indigo-500 to-blue-500",
      content: [
        "Compare our platform with popular tools like ahrefs instagram bio generator and mention com instagram bio generator. Learn how to create instagram bio generator content that outperforms competitors and attracts more followers.",
        "Our create instagram bio generator features offer more customization options than traditional ahrefs instagram bio generator or mention com instagram bio generator tools, providing unlimited creative possibilities for your Instagram profile."
      ],
      keywords: ["ahrefs instagram bio generator", "mention com instagram bio generator", "create instagram bio generator", "bio generator alternatives"]
    }
  ];

  const trendingKeywords = [
    "Instagram Bio Generator", "Instagram Bio Generator Font", "Instagram Bio Generator AI", "Instagram Bio Generator Copy and Paste",
    "Instagram Bio Generator with Emoji", "Instagram Bio Generator Free", "Font Generator Instagram Bio", "Instagram Font Generator",
    "Stylish Font Generator for Instagram Bio", "Free AI Bio Generator for Instagram", "Instagram Bio Generator Aesthetic", 
    "Instagram Bio Generator for Girls", "Instagram Bio Generator for Boy", "Instagram Business Bio Generator",
    "Fancy Text Generator Bio for Instagram", "Cool Text Generator for Instagram Bio", "Instagram Bio Generator Symbol",
    "Cute Instagram Bio Generator", "Instagram Professional Bio Generator", "Instagram Stylish Bio Generator",
    "Center Instagram Bio Generator", "Instagram Space Bio Generator", "Bio Generator Instagram Online",
    "Instagram Font Generator Online Copy and Paste Bio", "Ahrefs Instagram Bio Generator", "Mention Com Instagram Bio Generator"
  ];

  const popularSearches = [
    {
      category: "Font & Style",
      searches: [
        "instagram bio generator font stylish",
        "font generator bio instagram", 
        "fancy text generator for instagram bio",
        "instagram font generator online copy and paste bio"
      ]
    },
    {
      category: "AI & Free Tools",
      searches: [
        "free ai bio generator for instagram",
        "instagram bio generator free tool",
        "instagram bio generator ai powered"
      ]
    },
    {
      category: "Special Features",
      searches: [
        "instagram bio generator with emoji copy and paste",
        "instagram bio generator aesthetic design",
        "instagram bio generator symbol collection"
      ]
    },
    {
      category: "User Types",
      searches: [
        "instagram bio generator for girls cute",
        "instagram business bio generator professional",
        "instagram bio generator name customization"
      ]
    }
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
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Ultimate Instagram Bio Generator Guide
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the best Instagram bio generator tools with AI, fonts, emojis, and copy-paste features. 
            Create stunning Instagram bios that boost engagement and followers with our comprehensive guide.
          </p>
        </div>

        {/* Trending Keywords */}
        <Card className="mb-12 shadow-lg border-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <span className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Trending Instagram Bio Generator Keywords
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

        {/* Popular Search Categories */}
        <Card className="mb-12 shadow-lg border-0 bg-gradient-to-br from-white via-green-50/20 to-emerald-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3">
              <Heart className="h-6 w-6 text-green-600" />
              <span className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Popular Instagram Bio Generator Searches
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularSearches.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600 pb-2">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.searches.map((search, searchIndex) => (
                      <Badge 
                        key={searchIndex}
                        variant="outline"
                        className="block text-xs text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                      >
                        {search}
                      </Badge>
                    ))}
                  </div>
                </div>
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
                    <h2 className={`text-xl font-semibold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent mb-2`}>
                      {section.title}
                    </h2>
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
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Our Instagram Bio Generator?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "AI-Powered Generation",
                description: "Advanced Instagram bio generator AI creates perfect bios in seconds with smart algorithms",
                keywords: "instagram bio generator ai, ai bio generator"
              },
              {
                icon: Type,
                title: "Font & Style Options",
                description: "Stylish font generator for Instagram bio with fancy text and cool design options",
                keywords: "instagram bio generator font, font generator instagram bio"
              },
              {
                icon: Smile,
                title: "Emoji Integration",
                description: "Instagram bio generator with emoji copy and paste features for expressive profiles",
                keywords: "instagram bio generator with emoji, emoji copy paste"
              },
              {
                icon: Heart,
                title: "100% Free Tool",
                description: "Complete Instagram bio generator free access with no hidden costs or subscriptions",
                keywords: "instagram bio generator free, free bio generator"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="text-center p-6 shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
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
              <h2 className="text-2xl font-bold mb-4">
                Ready to Create Your Perfect Instagram Bio?
              </h2>
              <p className="text-lg mb-6 text-purple-100">
                Join thousands who've boosted their Instagram presence with our free Instagram bio generator AI tool
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #InstagramBioGenerator
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #InstagramBioGeneratorFont
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #InstagramBioGeneratorAI
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  #FreeInstagramBioGenerator
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
