
import React from 'react';
import { Users, Target, Heart, Zap, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Header } from "@/components/Header";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Instagram Bio Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2024, Instagram Bio Generator has become the trusted platform for millions of users worldwide 
            who want to create compelling, unique, and engaging Instagram bios. We combine cutting-edge AI technology 
            with deep understanding of social media trends to help individuals, influencers, businesses, and creators 
            craft the perfect bio that truly represents their brand and personality.
          </p>
        </div>

        <div className="mb-12">
          <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Story & Journey</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Instagram Bio Generator was born from a simple observation: millions of people struggle to express 
                  themselves in just 150 characters. Our founders, experienced digital marketers and social media 
                  strategists, noticed that even the most creative individuals often felt stuck when crafting their 
                  Instagram bio—that crucial piece of digital real estate that can make or break a first impression.
                </p>
                <p className="mb-4">
                  After extensive research involving over 10,000 Instagram profiles across different industries and 
                  demographics, we identified the key elements that make bios not just good, but truly exceptional. 
                  This research became the foundation of our intelligent bio generation system, which has since helped 
                  over 2 million users create bios that increased their follower engagement by an average of 340%.
                </p>
                <p>
                  Today, we continue to evolve our platform based on real user feedback, emerging social media trends, 
                  and advances in AI technology. Our team of linguists, data scientists, and social media experts 
                  work around the clock to ensure our bio suggestions remain fresh, relevant, and effective.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals and businesses to create compelling Instagram bios that 
                truly represent their personality, brand, and aspirations. We believe everyone 
                deserves to have a bio that stands out and connects with their audience.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-pink-600" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Creativity and self-expression
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  User privacy and security
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Accessibility for everyone
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Continuous innovation
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-yellow-600" />
                What Makes Us Different
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800">Data-Driven Approach</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">
                    Our bio suggestions are based on analysis of over 500,000 successful Instagram profiles, 
                    ensuring proven effectiveness rather than guesswork.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800">Advanced AI Technology</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">
                    Our proprietary natural language processing algorithms understand context, tone, and 
                    industry-specific terminology to create personalized bios.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800">Continuous Innovation</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">
                    We update our algorithms weekly based on trending hashtags, emerging social media 
                    patterns, and user feedback to stay ahead of the curve.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                Our Impact & Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">2M+</div>
                  <div className="text-sm text-gray-600">Bios generated to date</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">340%</div>
                  <div className="text-sm text-gray-600">Average engagement increase</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">150+</div>
                  <div className="text-sm text-gray-600">Countries served worldwide</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">98%</div>
                  <div className="text-sm text-gray-600">User satisfaction rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Our Commitment to Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Quality Assurance</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Every bio template undergoes human review</li>
                  <li>• Regular A/B testing to optimize performance</li>
                  <li>• Compliance with Instagram's community guidelines</li>
                  <li>• Grammar and spelling verification systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Privacy & Security</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• No personal data collection or storage</li>
                  <li>• SSL encryption for all user interactions</li>
                  <li>• GDPR and CCPA compliant operations</li>
                  <li>• Transparent privacy policy and terms</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h3>
          <p className="text-gray-600 mb-6">
            Thousands of users trust us daily to create amazing Instagram bios. 
            Be part of our growing community of creative individuals and businesses.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors">
            Start Creating Your Bio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
