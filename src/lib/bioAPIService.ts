// API service for bio generation using direct API calls
interface BioGenerationRequest {
  interests: string;
  profession: string;
  personality: string;
  tone: string;
  style: string;
  bioType?: string;
}

interface BioGenerationResponse {
  bios: string[];
  success: boolean;
  error?: string;
  usingFallback?: boolean;
  fallbackReason?: string;
}

class BioAPIService {
  private apiUrl: string;
  private apiKey: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL || '';
    this.apiKey = import.meta.env.VITE_API_KEY || '';
  }

  async generateBios(request: BioGenerationRequest): Promise<BioGenerationResponse> {
    // If no API configuration, return client-side generated bios
    if (!this.apiUrl || !this.apiKey || this.apiKey === 'your_openai_api_key_here') {
      console.log('No API configuration found, using built-in templates');
      const result = await this.generateClientSideBios(request);
      result.usingFallback = true;
      result.fallbackReason = 'No API configured - using built-in templates';
      return result;
    }

    try {
      const prompt = this.createPrompt(request);
      
      // Determine API type and make appropriate call
      if (this.apiUrl.includes('generativelanguage.googleapis.com')) {
        return await this.callGemini(prompt);
      } else if (this.apiUrl.includes('openai.com')) {
        return await this.callOpenAI(prompt);
      } else if (this.apiUrl.includes('anthropic.com')) {
        return await this.callAnthropic(prompt);
      } else if (this.apiUrl.includes('groq.com')) {
        return await this.callGroq(prompt);
      } else {
        // Generic OpenAI-compatible API
        return await this.callOpenAICompatible(prompt);
      }
    } catch (error) {
      console.error('API call failed, falling back to built-in templates:', error);
      const result = await this.generateClientSideBios(request);
      result.usingFallback = true;
      result.fallbackReason = `API unavailable - using built-in templates (${error instanceof Error ? error.message : 'Network error'})`;
      return result;
    }
  }

  private createPrompt(request: BioGenerationRequest): string {
    const { interests, profession, personality, tone, style, bioType } = request;
    
    return `Create 4 unique Instagram bio variations with these requirements:

PROFILE INFO:
- Interests: ${interests || 'General lifestyle'}
- Profession: ${profession || 'Content creator'}
- Personality: ${personality || 'Authentic and engaging'}
- Tone: ${tone || 'Casual'}
- Style: ${style || 'With Emojis'}
- Category: ${bioType || 'General'}

REQUIREMENTS:
- Each bio must be under 150 characters
- Include relevant emojis (2-4 per bio)
- Use line breaks for readability
- Make each bio unique and engaging
- Reflect the specified tone and personality
- Include a subtle call-to-action when appropriate

FORMATTING:
- Return exactly 4 bios
- Separate each bio with "---"
- No numbering or extra text
- Start each bio immediately

Example format:
✨ Dream chaser & coffee lover
📸 Capturing life's beautiful moments
💫 Making magic happen daily

---

🌟 Turning passion into purpose
💼 Helping others shine bright
☕ Fueled by caffeine & creativity

Generate 4 Instagram bios now:`;
  }

  private async callOpenAI(prompt: string): Promise<BioGenerationResponse> {
    const response = await fetch(`${this.apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 800,
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';
    
    return this.parseBioResponse(content);
  }

  private async callAnthropic(prompt: string): Promise<BioGenerationResponse> {
    const response = await fetch(`${this.apiUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 800,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || '';
    
    return this.parseBioResponse(content);
  }

  private async callGroq(prompt: string): Promise<BioGenerationResponse> {
    const response = await fetch(`${this.apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 800,
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';
    
    return this.parseBioResponse(content);
  }

  private async callGemini(prompt: string): Promise<BioGenerationResponse> {
    const response = await fetch(`${this.apiUrl}/models/gemini-1.5-flash-latest:generateContent?key=${this.apiKey}`, {
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
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from Gemini API');
    }

    const content = data.candidates[0].content.parts[0].text;
    return this.parseBioResponse(content);
  }

  private async callOpenAICompatible(prompt: string): Promise<BioGenerationResponse> {
    const response = await fetch(`${this.apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 800,
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';
    
    return this.parseBioResponse(content);
  }

  private parseBioResponse(content: string): BioGenerationResponse {
    try {
      // Split by "---" and clean up each bio
      const bios = content
        .split('---')
        .map(bio => bio.trim())
        .filter(bio => bio.length > 0 && bio.length <= 200)
        .slice(0, 4); // Take only first 4 bios

      if (bios.length === 0) {
        throw new Error('No valid bios found in API response');
      }

      return {
        bios,
        success: true
      };
    } catch (error) {
      console.error('Error parsing bio response:', error);
      return {
        bios: [],
        success: false,
        error: 'Failed to parse API response'
      };
    }
  }

  private async generateClientSideBios(request: BioGenerationRequest): Promise<BioGenerationResponse> {
    // Import the client-side generation functions
    const { generateClientSideBios, generateCustomBio } = await import('./bioTemplates');
    
    try {
      const bioType = this.determineBioType(request);
      const bios = generateClientSideBios(bioType, 3);
      
      // Add a custom bio if we have user inputs
      if (request.interests || request.profession) {
        const customBio = generateCustomBio(
          request.interests ? request.interests.split(',').map(i => i.trim()) : [],
          request.profession || '',
          bioType,
          [request.personality || request.tone || 'creative']
        );
        bios.push(customBio);
      }

      return {
        bios: bios.slice(0, 4),
        success: true
      };
    } catch (error) {
      console.error('Client-side generation failed, using emergency fallback:', error);
      return {
        bios: [
          "✨ Living my best life daily\n🌟 Creating magic everywhere\n💫 Dream big, shine bright",
          "🎯 Focused on growth & success\n💪 Turning dreams into reality\n🚀 Building something amazing",
          "🌸 Soft soul, strong mind\n☁️ Finding beauty in simplicity\n🤍 Spreading love & light",
          "🌈 Chasing dreams & good vibes\n💝 Spreading positivity daily\n🎊 Making every moment count"
        ],
        success: true
      };
    }
  }

  private determineBioType(request: BioGenerationRequest): string {
    if (request.bioType) return request.bioType;
    
    const { tone, interests, profession } = request;
    
    if (tone === 'Funny' || interests?.includes('funny') || interests?.includes('humor')) {
      return 'funny';
    }
    if (tone === 'Professional' || profession?.includes('business') || profession?.includes('CEO')) {
      return 'business';
    }
    if (tone === 'Bold' || tone === 'Creative' || interests?.includes('cool')) {
      return 'cool';
    }
    
    return 'aesthetic';
  }
}

// Export singleton instance
export const bioAPIService = new BioAPIService();

// Export types
export type { BioGenerationRequest, BioGenerationResponse };