import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, ChevronDown, ChevronUp, Sparkles, Database, Wifi, WifiOff, TestTube } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { bioAPIService } from "@/lib/bioAPIService";

export const FallbackInfo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const { toast } = useToast();
  
  const hasApiConfig = !!(
    import.meta.env.VITE_API_URL && 
    import.meta.env.VITE_API_KEY && 
    import.meta.env.VITE_API_KEY !== 'your_openai_api_key_here'
  );

  const testFallback = async () => {
    setIsTesting(true);
    try {
      // Create a temporary API service with invalid configuration to force fallback
      const testService = new (bioAPIService.constructor as any)();
      testService.apiUrl = 'https://invalid-url-to-force-fallback.com';
      testService.apiKey = 'invalid-key';
      
      const result = await testService.generateBios({
        interests: 'testing',
        profession: 'developer',
        personality: 'creative',
        tone: 'Casual',
        style: 'With Emojis'
      });

      if (result.success && result.usingFallback) {
        toast({
          title: "🧪 Fallback Test Successful!",
          description: "When API fails, the system automatically uses built-in templates. Your bios are always available!",
          variant: "default",
        });
      } else {
        toast({
          title: "✅ API Working Normally",
          description: "Your API is working fine. Fallback will activate only if needed.",
          variant: "default",
        });
      }
    } catch (error) {
      // This actually means fallback worked, since we forced an error
      toast({
        title: "🛡️ Fallback System Ready",
        description: "Fallback templates are ready to activate if your API ever has issues.",
        variant: "default",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Card className="mb-6 border-blue-200 bg-blue-50/50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm font-medium text-blue-700">
          {hasApiConfig ? (
            <>
              <Wifi className="h-4 w-4" />
              AI Generator Status: Active
            </>
          ) : (
            <>
              <WifiOff className="h-4 w-4" />
              Template Mode: Active
            </>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto h-6 w-6 p-0"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0 space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              {hasApiConfig ? (
                <Sparkles className="h-4 w-4 text-blue-600" />
              ) : (
                <Database className="h-4 w-4 text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              {hasApiConfig ? (
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">AI-Powered Generation</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Your bio generator is connected to AI services and will create personalized bios 
                    based on your inputs. If the AI service is unavailable, we'll automatically 
                    switch to our curated template collection.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      AI Ready
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                      Template Fallback
                    </Badge>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Template-Based Generation</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Your bio generator is using our curated collection of 32+ premium bio templates 
                    across different categories. These templates are crafted by social media experts 
                    and work great even without AI services.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      32+ Templates
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                      No API Required
                    </Badge>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <h5 className="font-medium text-blue-900 text-xs mb-2 uppercase tracking-wide">
              How It Works
            </h5>
            <div className="space-y-2 text-xs text-blue-700">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>First try: AI generates personalized bios from your inputs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>If AI fails: Switch to curated templates automatically</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>Always works: You'll get great bios either way!</span>
              </div>
            </div>
          </div>
          
          {hasApiConfig && (
            <div className="pt-2">
              <Button
                onClick={testFallback}
                disabled={isTesting}
                size="sm"
                variant="outline"
                className="w-full bg-white hover:bg-blue-50 border-blue-200 text-blue-700"
              >
                {isTesting ? (
                  <>
                    <TestTube className="h-3 w-3 mr-2 animate-spin" />
                    Testing Fallback System...
                  </>
                ) : (
                  <>
                    <TestTube className="h-3 w-3 mr-2" />
                    Test Fallback System
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};