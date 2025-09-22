import React from 'react';
import { ArrowLeft, HelpCircle, Users, Zap, Shield, Star, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Header } from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BioFAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      color: "blue",
      questions: [
        {
          question: "How does the Instagram bio generator work?",
          answer: "Our AI-powered generator analyzes millions of successful Instagram profiles to create personalized bio suggestions. Simply input your interests, profession, or keywords, and our algorithm generates multiple creative bio options tailored to your style and audience."
        },
        {
          question: "Is the Instagram bio generator completely free?",
          answer: "Yes, our basic bio generator is completely free with no hidden costs. You can generate unlimited bios, use all templates, and access most features without any payment. We believe everyone deserves an amazing Instagram bio!"
        },
        {
          question: "Do I need to create an account to use the generator?",
          answer: "No account required! You can start generating bios immediately without signing up, providing email, or creating passwords. Just visit our site and start creating your perfect Instagram bio right away."
        },
        {
          question: "How many bio variations can I generate?",
          answer: "There's no limit! Generate as many bio variations as you want until you find the perfect one. Our AI creates unique combinations each time, so you'll always get fresh, original suggestions."
        }
      ]
    },
    {
      title: "Bio Optimization",
      icon: TrendingUp,
      color: "green",
      questions: [
        {
          question: "What makes an Instagram bio effective?",
          answer: "An effective Instagram bio has 5 key elements: (1) Clear value proposition in the first line, (2) Personality that resonates with your audience, (3) Specific achievements or credentials, (4) Call-to-action that drives engagement, and (5) Strategic use of emojis and formatting for visual appeal."
        },
        {
          question: "How do I optimize my bio for more followers?",
          answer: "Focus on specificity over generic statements. Use numbers and achievements for social proof (e.g., '500+ clients helped'). Include relevant keywords your target audience searches for. Add a clear call-to-action, and use 2-3 strategic emojis. Test different versions to see what resonates best."
        },
        {
          question: "Should I include hashtags in my Instagram bio?",
          answer: "Generally, no. Hashtags in bios aren't clickable and take up valuable character space. Instead, use that space for compelling copy about yourself. Save hashtags for your posts and stories where they're more effective for discovery."
        },
        {
          question: "How often should I update my Instagram bio?",
          answer: "Update your bio whenever you have significant changes: new achievements, services, contact info, or goals. For businesses, monthly reviews are good practice. For personal accounts, every 2-3 months or when your content focus shifts."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: Zap,
      color: "yellow",
      questions: [
        {
          question: "Why can't I use certain characters or emojis?",
          answer: "Instagram has character limitations and doesn't support all Unicode characters. Our generator automatically filters out unsupported characters. If you're having issues, try using standard emojis and avoid special Unicode symbols that might not display properly on all devices."
        },
        {
          question: "How do I add line breaks to my Instagram bio?",
          answer: "You can add line breaks by hitting 'Enter' or 'Return' while typing in Instagram's bio editor, or copy-paste from our generator which preserves formatting. Line breaks help organize information and make your bio more readable."
        },
        {
          question: "What's Instagram's character limit for bios?",
          answer: "Instagram allows 150 characters for bios. Our generator automatically tracks your character count and ensures all suggestions fit within this limit while maximizing impact. We also show you exactly how many characters you're using."
        },
        {
          question: "Can I use the same bio for multiple social platforms?",
          answer: "While you can adapt elements, each platform has different character limits and audiences. Instagram bios are 150 chars, Twitter is 160, and LinkedIn allows much more. We recommend customizing for each platform's unique format and audience expectations."
        }
      ]
    },
    {
      title: "Business & Professional",
      icon: Target,
      color: "purple",
      questions: [
        {
          question: "How do I create a professional business bio?",
          answer: "For business bios: Start with your company's unique value proposition, include your industry and target audience, add social proof (awards, client numbers, years in business), include contact information or website, and end with a clear call-to-action like 'Shop below' or 'DM for quotes'."
        },
        {
          question: "Should I include my website link in my bio?",
          answer: "Absolutely! Instagram only allows one clickable link in your bio, so make it count. Use your main website, landing page, or link-in-bio tool like Linktree. Always include a call-to-action that directs people to click your link."
        },
        {
          question: "How do I write a bio for multiple business services?",
          answer: "Focus on your main service or the common benefit you provide. For example, instead of listing 'web design, SEO, marketing, branding,' use 'Helping small businesses grow online 📈' Then mention you offer multiple services in your posts or link to a services page."
        },
        {
          question: "What contact information should I include?",
          answer: "Include the most appropriate contact method for your audience: email for professional inquiries, phone for local businesses, or 'DM for collabs' for influencers. Avoid cluttering with multiple contact methods - choose the primary one you want people to use."
        }
      ]
    },
    {
      title: "Creative & Personal",
      icon: Star,
      color: "pink",
      questions: [
        {
          question: "How do I show personality in my bio without being unprofessional?",
          answer: "Share specific interests or quirks that make you relatable ('Coffee-powered designer ☕', 'Dog mom to 3 rescue pups 🐕'). Use humor that aligns with your brand. Include personal achievements or hobbies that connect with your audience while maintaining your professional credibility."
        },
        {
          question: "What if I have multiple interests or career paths?",
          answer: "Find the common thread that connects them. For example: 'Teacher by day, photographer by weekend' or 'Helping people grow through fitness & finance 💪💰'. Alternatively, focus on your primary identity and mention the secondary one briefly."
        },
        {
          question: "How do I make my bio stand out from others in my niche?",
          answer: "Use specific numbers and achievements, share your unique story or background, include personal interests that humanize you, use creative formatting with emojis and line breaks, and most importantly, focus on the specific value you provide that others don't."
        },
        {
          question: "Should I use quotes or song lyrics in my bio?",
          answer: "Original content typically performs better than quotes. If you use quotes, ensure they truly represent you and aren't overused. Personal mantras or original thoughts are more memorable and help you stand out. Your bio should sound like you, not someone else."
        }
      ]
    },
    {
      title: "Privacy & Safety",
      icon: Shield,
      color: "red",
      questions: [
        {
          question: "Is my personal information safe when using the generator?",
          answer: "Yes, we don't store any personal information you enter. Our generator works client-side, meaning your input stays on your device. We don't collect, store, or share any bio content, keywords, or personal details you provide."
        },
        {
          question: "Should I include my real name in my bio?",
          answer: "This depends on your goals and privacy preferences. Public figures, businesses, and professionals often benefit from using real names for credibility. For personal accounts, you can use your first name, nickname, or brand name - whatever feels comfortable and aligns with your Instagram goals."
        },
        {
          question: "How do I protect myself from copycats?",
          answer: "Create bios that are specific to your unique story, achievements, and personality. Avoid generic templates that anyone could copy. Include specific details about your business, location, or achievements that are uniquely yours. Regularly update your bio to stay current."
        },
        {
          question: "Can I trademark my Instagram bio?",
          answer: "While you can't trademark a bio itself, you can trademark specific slogans, taglines, or brand names within it. Focus on creating original content that represents your unique brand rather than trying to legally protect generic bio formats."
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600",
      green: "from-green-500 to-green-600 text-green-600", 
      yellow: "from-yellow-500 to-yellow-600 text-yellow-600",
      purple: "from-purple-500 to-purple-600 text-purple-600",
      pink: "from-pink-500 to-pink-600 text-pink-600",
      red: "from-red-500 to-red-600 text-red-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Generator
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Instagram Bio FAQ
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about creating, optimizing, and managing your Instagram bio. 
            Get expert answers to the most commonly asked questions from our community of 2M+ users.
          </p>
        </div>

        <div className="grid gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${getColorClasses(category.color).split(' ').slice(0, 2).join(' ')}`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className={getColorClasses(category.color).split(' ').slice(-1)[0]}>
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left text-gray-800 hover:text-gray-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg mt-12">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive bio guide covers advanced strategies, industry-specific tips, and optimization techniques 
              to help you create the perfect Instagram bio that converts visitors into followers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/instagram-bio-guide" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
              >
                Read Complete Guide
              </Link>
              <Link 
                to="/contact-us" 
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center p-6">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">2M+ Bios Generated</h4>
            <p className="text-sm text-gray-600">Trusted by millions of users worldwide</p>
          </Card>
          
          <Card className="text-center p-6">
            <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">340% Avg. Increase</h4>
            <p className="text-sm text-gray-600">In follower engagement rates</p>
          </Card>
          
          <Card className="text-center p-6">
            <Star className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">4.9/5 Rating</h4>
            <p className="text-sm text-gray-600">From verified user reviews</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BioFAQ;