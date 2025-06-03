
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { interests, profession, personality, tone, style } = await req.json();

    const apiKey = Deno.env.get('GEMINI_API_KEY');
    if (!apiKey) {
      throw new Error('Gemini API key not configured');
    }

    const prompt = `Create 3 Instagram bio variations for someone with these details:
      
Interests: ${interests || 'Not specified'}
Profession: ${profession || 'Not specified'}
Personality: ${personality || 'Not specified'}
Tone: ${tone || 'Casual'}
Style: ${style || 'With Emojis'}

Requirements:
- Keep each bio under 150 characters
- Make them unique and engaging
- ${style && style.includes('Emojis') ? 'Include relevant emojis' : 'Minimal or no emojis'}
- ${style && style.includes('Line Breaks') ? 'Use line breaks for visual appeal' : 'Keep compact'}
- Each bio should feel authentic and personal
- Return only the 3 bios, separated by "---"

Example format:
Bio 1 text here
---
Bio 2 text here  
---
Bio 3 text here`;

    console.log('Sending request to Gemini API with model: gemini-1.5-flash');

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!generatedText) {
      throw new Error('No content generated from Gemini API');
    }

    const bios = generatedText.split('---').map((bio: string) => bio.trim()).filter((bio: string) => bio.length > 0);
    
    console.log('Successfully generated bios:', bios.length);

    return new Response(JSON.stringify({ bios }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-bio function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
