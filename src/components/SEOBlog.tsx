
import React from 'react';
import { Sparkles, TrendingUp, Users, Zap, Star, Heart, Type, Copy, Target } from 'lucide-react';
import SEOHeader from './seo/SEOHeader';
import TrendingKeywords from './seo/TrendingKeywords';
import PopularSearches from './seo/PopularSearches';
import KeywordSection from './seo/KeywordSection';
import SEOFeatures from './seo/SEOFeatures';
import SEOCallToAction from './seo/SEOCallToAction';

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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <SEOHeader />
        <TrendingKeywords />
        <PopularSearches />

        {/* SEO Content Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {keywordSections.map((section, index) => (
            <KeywordSection
              key={index}
              title={section.title}
              icon={section.icon}
              gradient={section.gradient}
              content={section.content}
              keywords={section.keywords}
            />
          ))}
        </div>

        <SEOFeatures />
        <SEOCallToAction />
      </div>
    </section>
  );
};

export default SEOBlog;
