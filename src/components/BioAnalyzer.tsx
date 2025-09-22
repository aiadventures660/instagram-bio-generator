import React, { useState } from 'react';
import { Zap, CheckCircle, XCircle, AlertTriangle, Target, BarChart3, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface AnalysisResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  categoryMatch: string;
  engagementPotential: 'Low' | 'Medium' | 'High' | 'Excellent';
}

export const BioAnalyzer: React.FC = () => {
  const [bioText, setBioText] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeBio = () => {
    if (!bioText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const analysis = performBioAnalysis(bioText);
      setAnalysis(analysis);
      setIsAnalyzing(false);
    }, 1500);
  };

  const performBioAnalysis = (bio: string): AnalysisResult => {
    let score = 0;
    const strengths: string[] = [];
    const weaknesses: string[] = [];
    const suggestions: string[] = [];

    // Length analysis
    if (bio.length >= 50 && bio.length <= 150) {
      score += 20;
      strengths.push('Optimal bio length (50-150 characters)');
    } else if (bio.length < 50) {
      weaknesses.push('Bio is too short - missing valuable information');
      suggestions.push('Add more details about what you do or your interests');
    } else {
      weaknesses.push('Bio exceeds Instagram\'s 150 character limit');
      suggestions.push('Shorten your bio to fit within Instagram\'s character limit');
    }

    // Emoji usage
    const emojiCount = (bio.match(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}]/gu) || []).length;
    if (emojiCount >= 1 && emojiCount <= 4) {
      score += 15;
      strengths.push('Good emoji usage enhances visual appeal');
    } else if (emojiCount === 0) {
      suggestions.push('Add 1-2 relevant emojis to make your bio more engaging');
    } else {
      weaknesses.push('Too many emojis may reduce readability');
      suggestions.push('Reduce emoji count to 2-4 for better balance');
    }

    // Call-to-action detection
    const ctaKeywords = ['link', 'click', 'follow', 'dm', 'email', 'contact', 'visit', 'shop', 'buy', 'download', 'subscribe'];
    const hasCTA = ctaKeywords.some(keyword => bio.toLowerCase().includes(keyword));
    if (hasCTA) {
      score += 15;
      strengths.push('Contains call-to-action to drive engagement');
    } else {
      suggestions.push('Add a clear call-to-action (e.g., "DM for collabs", "Shop below")');
    }

    // Value proposition check
    const valueWords = ['help', 'teach', 'create', 'share', 'inspire', 'transform', 'coach', 'expert', 'professional'];
    const hasValue = valueWords.some(word => bio.toLowerCase().includes(word));
    if (hasValue) {
      score += 15;
      strengths.push('Clearly communicates value to followers');
    } else {
      suggestions.push('Include what value you provide to your audience');
    }

    // Personality detection
    const personalityWords = ['love', 'passionate', 'obsessed', 'coffee', 'dog', 'cat', 'travel', 'foodie', 'bookworm'];
    const hasPersonality = personalityWords.some(word => bio.toLowerCase().includes(word));
    if (hasPersonality) {
      score += 10;
      strengths.push('Shows personality and human connection');
    } else {
      suggestions.push('Add personal interests to connect with your audience');
    }

    // Specificity check
    const numbers = bio.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      score += 10;
      strengths.push('Uses specific numbers for credibility');
    } else {
      suggestions.push('Include specific achievements or numbers for social proof');
    }

    // Line breaks for readability
    const lineBreaks = bio.split('\n').length;
    if (lineBreaks >= 2 && lineBreaks <= 4) {
      score += 10;
      strengths.push('Good formatting with appropriate line breaks');
    } else if (lineBreaks === 1) {
      suggestions.push('Use line breaks to improve readability');
    }

    // Contact information
    const hasContact = bio.includes('@') || bio.includes('.com') || bio.includes('email');
    if (hasContact) {
      score += 5;
      strengths.push('Includes contact information');
    }

    // Determine category and engagement potential
    let categoryMatch = 'General/Personal';
    if (bio.toLowerCase().includes('business') || bio.toLowerCase().includes('ceo') || bio.toLowerCase().includes('founder')) {
      categoryMatch = 'Business/Entrepreneur';
    } else if (bio.toLowerCase().includes('art') || bio.toLowerCase().includes('design') || bio.toLowerCase().includes('photo')) {
      categoryMatch = 'Creative/Artist';
    } else if (bio.toLowerCase().includes('fitness') || bio.toLowerCase().includes('health') || bio.toLowerCase().includes('coach')) {
      categoryMatch = 'Health/Fitness';
    }

    let engagementPotential: 'Low' | 'Medium' | 'High' | 'Excellent';
    if (score >= 80) engagementPotential = 'Excellent';
    else if (score >= 60) engagementPotential = 'High';
    else if (score >= 40) engagementPotential = 'Medium';
    else engagementPotential = 'Low';

    return {
      score,
      strengths,
      weaknesses,
      suggestions,
      categoryMatch,
      engagementPotential
    };
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEngagementColor = (potential: string) => {
    switch (potential) {
      case 'Excellent': return 'text-green-600 bg-green-50';
      case 'High': return 'text-blue-600 bg-blue-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-red-600 bg-red-50';
    }
  };

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-700/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Zap className="h-6 w-6 text-purple-600" />
          Bio Performance Analyzer
        </CardTitle>
        <p className="text-gray-600 dark:text-gray-300">
          Get detailed insights into your Instagram bio's effectiveness with our AI-powered analyzer. 
          Discover what works, what doesn't, and how to optimize for maximum engagement.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Paste your current Instagram bio:
          </label>
          <Textarea
            placeholder="Enter your Instagram bio here..."
            value={bioText}
            onChange={(e) => setBioText(e.target.value)}
            className="min-h-[100px] resize-none"
            maxLength={160}
          />
          <div className="text-xs text-gray-500 mt-1">
            {bioText.length}/150 characters
          </div>
        </div>

        <Button 
          onClick={analyzeBio}
          disabled={!bioText.trim() || isAnalyzing}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
              Analyzing Bio...
            </>
          ) : (
            <>
              <BarChart3 className="h-4 w-4 mr-2" />
              Analyze My Bio
            </>
          )}
        </Button>

        {analysis && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(analysis.score)}`}>
                    {analysis.score}/100
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Overall Score</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getEngagementColor(analysis.engagementPotential)}`}>
                    {analysis.engagementPotential}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Engagement Potential</div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-1 col-span-2">
                <CardContent className="p-4 text-center">
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    {analysis.categoryMatch}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Best Category Match</div>
                </CardContent>
              </Card>
            </div>

            {analysis.strengths.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {analysis.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {analysis.weaknesses.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-5 w-5" />
                    Areas to Improve
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {analysis.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {analysis.suggestions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Target className="h-5 w-5" />
                    Optimization Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {analysis.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">
                Ready to Optimize Your Bio?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use our AI generator to create a bio that incorporates all these optimization strategies automatically.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Generate Optimized Bio
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};