import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Settings, Check, AlertCircle, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export const APIConfigHelper: React.FC = () => {
  const [isConfigured, setIsConfigured] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    
    if (apiUrl && apiKey && apiKey !== 'your_openai_api_key_here' && apiKey !== 'your_groq_api_key_here' && apiKey !== 'your_anthropic_api_key_here') {
      setIsConfigured(true);
      if (apiUrl.includes('groq.com')) setSelectedProvider('Groq');
      else if (apiUrl.includes('openai.com')) setSelectedProvider('OpenAI');
      else if (apiUrl.includes('anthropic.com')) setSelectedProvider('Anthropic');
      else setSelectedProvider('Custom API');
    }
  }, []);

  const providers = [
    {
      name: 'Groq',
      description: 'FREE & Fast AI API',
      recommended: true,
      badge: 'Free',
      badgeColor: 'bg-green-100 text-green-700',
      url: 'https://console.groq.com/keys',
      setup: 'Get your free API key at console.groq.com/keys'
    },
    {
      name: 'OpenAI',
      description: 'GPT-3.5 & GPT-4 Models', 
      recommended: false,
      badge: 'Paid',
      badgeColor: 'bg-blue-100 text-blue-700',
      url: 'https://platform.openai.com/api-keys',
      setup: 'Get your API key at platform.openai.com/api-keys'
    },
    {
      name: 'Anthropic',
      description: 'Claude AI Models',
      recommended: false,
      badge: 'Paid', 
      badgeColor: 'bg-purple-100 text-purple-700',
      url: 'https://console.anthropic.com/',
      setup: 'Get your API key at console.anthropic.com'
    }
  ];

  const testAPI = () => {
    toast({
      title: "Testing API Connection...",
      description: "Try generating a bio to test your API setup!",
    });
  };

  if (isConfigured) {
    return (
      <Card className="border-green-200 bg-green-50/50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-green-800">API Configured</h4>
              <p className="text-sm text-green-600">
                Using {selectedProvider} API for bio generation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-orange-200 bg-orange-50/50 mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Settings className="h-5 w-5 text-orange-600" />
          <span className="text-orange-800">API Setup Required</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-orange-100 rounded-lg">
            <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-orange-800 mb-2">
                <strong>Setup Required:</strong> To use AI-generated bios, you need to configure an API key. 
                Without this, the app will use built-in templates only.
              </p>
              <p className="text-xs text-orange-700">
                Don't worry - Groq offers a completely free API that works great!
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {providers.map((provider) => (
              <div key={provider.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold">{provider.name}</h4>
                    <Badge className={provider.badgeColor}>
                      {provider.badge}
                    </Badge>
                    {provider.recommended && (
                      <Badge className="bg-yellow-100 text-yellow-700">
                        Recommended
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(provider.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Get API Key
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mb-2">{provider.description}</p>
                <p className="text-xs text-gray-500">{provider.setup}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Quick Setup Instructions:</h4>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Click "Get API Key" for your preferred provider (Groq is free!)</li>
              <li>2. Copy your API key</li>
              <li>3. Open the <code className="bg-gray-200 px-1 rounded">.env</code> file in your project</li>
              <li>4. Uncomment and paste your API key into the appropriate lines</li>
              <li>5. Save the file and refresh this page</li>
            </ol>
          </div>

          <Button onClick={testAPI} className="w-full">
            I'll Set This Up Later - Use Templates Only
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};