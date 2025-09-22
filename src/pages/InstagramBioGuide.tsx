import React from 'react';
import { ArrowLeft, Users, TrendingUp, Target, CheckCircle, AlertCircle, Lightbulb, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Header } from "@/components/Header";

const InstagramBioGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Generator
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            The Complete Instagram Bio Guide 2024
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master the art of Instagram bio writing with our comprehensive guide. Learn proven strategies, 
            avoid common mistakes, and discover the psychology behind effective bios that convert visitors into followers.
          </p>
        </div>

        <Card className="shadow-lg mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Your Instagram Bio Matters More Than Ever</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                In 2024, your Instagram bio has become the most critical component of your social media strategy. 
                With over 2 billion monthly active users and millions of new accounts created daily, you have 
                approximately 3 seconds to capture someone's attention before they decide to follow you or move on.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 my-6">
                <h3 className="font-semibold text-blue-800 mb-3">📊 The Numbers Don't Lie:</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• 73% of users check the bio before following an account</li>
                  <li>• Optimized bios increase follow rates by up to 340%</li>
                  <li>• Accounts with clear value propositions get 5x more engagement</li>
                  <li>• 89% of users visit linked websites when clearly indicated in bio</li>
                </ul>
              </div>
              <p>
                Your bio isn't just a description—it's your elevator pitch, brand statement, and call-to-action 
                rolled into 150 characters. Every word counts, and every element should serve a purpose in 
                converting visitors into engaged followers.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-green-600" />
                Essential Bio Elements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Clear Value Proposition</h4>
                    <p className="text-sm text-gray-600">What unique value do you provide to your audience?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Personality Showcase</h4>
                    <p className="text-sm text-gray-600">Let your authentic personality shine through your words</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Call-to-Action</h4>
                    <p className="text-sm text-gray-600">Direct visitors toward your desired action</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Contact Information</h4>
                    <p className="text-sm text-gray-600">Make it easy for people to reach you</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Being Too Vague</h4>
                    <p className="text-sm text-gray-600">"Living my best life" tells visitors nothing about you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Overusing Emojis</h4>
                    <p className="text-sm text-gray-600">2-4 relevant emojis maximum for readability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">No Clear Purpose</h4>
                    <p className="text-sm text-gray-600">Visitors should immediately understand what you do</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Outdated Information</h4>
                    <p className="text-sm text-gray-600">Regular updates keep your bio fresh and relevant</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              Bio Psychology: What Really Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">The 3-Second Rule</h3>
                <p className="text-gray-700 mb-4">
                  Research shows that users make split-second decisions about whether to follow an account. 
                  Your bio must communicate value immediately. Start with your most compelling attribute or achievement.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-purple-800 font-medium">Example Transformation:</p>
                  <p className="text-gray-600 mb-2">❌ "Photographer | Love coffee | Dog mom | Living life"</p>
                  <p className="text-gray-600">✅ "Award-winning wedding photographer | 500+ couples captured | Coffee-fueled creativity ☕"</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Social Proof & Credibility</h3>
                <p className="text-gray-700">
                  Including specific achievements, numbers, or recognitions builds immediate trust. 
                  Whether it's follower counts, years of experience, or notable accomplishments, 
                  quantifiable social proof converts browsers into followers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">The Power of Specificity</h3>
                <p className="text-gray-700">
                  Generic descriptions blend into the background. Specific details create memorable impressions 
                  and help your ideal audience self-select. Instead of "fitness enthusiast," try 
                  "marathon runner | plant-based nutrition coach."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
              Advanced Bio Strategies by Industry
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🎨 Creative Professionals</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Lead with your specialty/niche</li>
                  <li>• Include notable clients or features</li>
                  <li>• Use creative language that reflects your style</li>
                  <li>• Include portfolio link or latest project</li>
                </ul>

                <h4 className="font-semibold text-gray-800 mb-3">💼 Business Professionals</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• State your role and company</li>
                  <li>• Highlight key achievements or metrics</li>
                  <li>• Include industry keywords</li>
                  <li>• Add contact information or website</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🌟 Influencers & Content Creators</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Define your content niche clearly</li>
                  <li>• Include posting schedule or themes</li>
                  <li>• Add collaboration contact info</li>
                  <li>• Use branded hashtags or catchphrases</li>
                </ul>

                <h4 className="font-semibold text-gray-800 mb-3">🏪 E-commerce & Brands</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Highlight unique selling proposition</li>
                  <li>• Include shipping/return info</li>
                  <li>• Add current promotions or offers</li>
                  <li>• Use branded emojis and hashtags</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Star className="h-6 w-6 text-indigo-600" />
              Bio Optimization Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">Content Review</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Clear value proposition in first line</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Specific achievements or credentials</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Call-to-action included</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Contact information accessible</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">Technical Check</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Under 150 character limit</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>2-4 relevant emojis maximum</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Line breaks for readability</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span>Working link in bio</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Create Your Perfect Bio?</h3>
          <p className="text-gray-600 mb-6">
            Use our AI-powered bio generator to implement these strategies and create a bio that converts. 
            With over 2 million successful bios generated, we know what works.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors">
            Generate My Bio Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstagramBioGuide;