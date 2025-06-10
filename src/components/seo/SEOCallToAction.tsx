
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SEOCallToAction: React.FC = () => {
  return (
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
  );
};

export default SEOCallToAction;
