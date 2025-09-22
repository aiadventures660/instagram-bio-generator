import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateClientSideBios, generateCustomBio } from "@/lib/bioTemplates";

const BioGeneratorTest: React.FC = () => {
  const [testResults, setTestResults] = useState<string[]>([]);

  const testGenerator = () => {
    console.log('Testing bio generation...');
    
    // Test different bio types
    const aestheticBios = generateClientSideBios('aesthetic', 2);
    const funnyBios = generateClientSideBios('funny', 2);
    const businessBios = generateClientSideBios('business', 2);
    const coolBios = generateClientSideBios('cool', 2);
    
    // Test custom bio generation
    const customBio = generateCustomBio(
      ['travel', 'photography'],
      'Content Creator',
      'aesthetic',
      ['creative', 'inspiring']
    );

    const allBios = [
      '--- Aesthetic Bios ---',
      ...aestheticBios,
      '--- Funny Bios ---',
      ...funnyBios,
      '--- Business Bios ---',
      ...businessBios,
      '--- Cool Bios ---',
      ...coolBios,
      '--- Custom Bio ---',
      customBio
    ];

    setTestResults(allBios);
    console.log('Generated bios:', allBios);
  };

  return (
    <Card className="max-w-2xl mx-auto m-4">
      <CardHeader>
        <CardTitle>Bio Generator Test</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={testGenerator} className="mb-4">
          Test Bio Generation
        </Button>
        
        {testResults.length > 0 && (
          <div className="space-y-2">
            {testResults.map((bio, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  bio.startsWith('---') 
                    ? 'bg-blue-100 font-bold text-blue-800' 
                    : 'bg-gray-50 border'
                }`}
              >
                <pre className="whitespace-pre-wrap text-sm">{bio}</pre>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BioGeneratorTest;