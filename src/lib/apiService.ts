// API service for generating bios using various providers
export interface BioGenerationRequest {
  interests: string;
  profession: string;
  personality: string;
  tone: string;
  style: string;
  bioType?: string;
}

export interface BioGenerationResponse {
  bios: string[];
  success: boolean;
  error?: string;
}

class APIService {
  private apiUrl: string;
  private apiKey: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL || '';
    this.apiKey = import.meta.env.VITE_API_KEY || '';
  }

  async generateBios(request: BioGenerationRequest): Promise<BioGenerationResponse> {
    if (!this.apiUrl || !this.apiKey) {
      throw new Error('API configuration missing. Please check your .env file.');
    }

    try {
      // Determine API provider based on URL
      if (this.apiUrl.includes('generativelanguage.googleapis.com')) {
        return await this.generateWithGemini(request);
      } else if (this.apiUrl.includes('api.openai.com')) {
        return await this.generateWithOpenAI(request);
      } else if (this.apiUrl.includes('api.groq.com')) {
        return await this.generateWithGroq(request);
      } else if (this.apiUrl.includes('api.anthropic.com')) {
        return await this.generateWithClaude(request);
      } else {
        throw new Error('Unsupported API provider');
      }
    } catch (error) {
      console.error('API generation failed:', error);
      throw error;
    }
  }

  private async generateWithGemini(request: BioGenerationRequest): Promise<BioGenerationResponse> {
    const prompt = this.createPrompt(request);
    
    const response = await fetch(`${this.apiUrl}/models/gemini-pro:generateContent?key=${this.apiKey}`, {
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
      const errorData = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from Gemini API');
    }

    const generatedText = data.candidates[0].content.parts[0].text;
    const bios = this.parseBiosFromResponse(generatedText);

    return {
      bios,
      success: true
    };
  }

  private async generateWithOpenAI(request: BioGenerationRequest): Promise<BioGenerationResponse> {
    const prompt = this.createPrompt(request);
    
    const response = await fetch(`${this.apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: prompt
        }],
        temperature: 0.9,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`OpenAI API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from OpenAI API');
    }

    const generatedText = data.choices[0].message.content;
    const bios = this.parseBiosFromResponse(generatedText);

    return {
      bios,
      success: true
    };
  }

  private async generateWithGroq(request: BioGenerationRequest): Promise<BioGenerationResponse> {
    const prompt = this.createPrompt(request);
    
    const response = await fetch(`${this.apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [{
          role: 'user',
          content: prompt
        }],
        temperature: 0.9,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Groq API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from Groq API');
    }

    const generatedText = data.choices[0].message.content;
    const bios = this.parseBiosFromResponse(generatedText);

    return {
      bios,
      success: true
    };
  }

  private async generateWithClaude(request: BioGenerationRequest): Promise<BioGenerationResponse> {
    const prompt = this.createPrompt(request);
    
    const response = await fetch(`${this.apiUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Claude API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    
    if (!data.content?.[0]?.text) {
      throw new Error('Invalid response format from Claude API');
    }

    const generatedText = data.content[0].text;
    const bios = this.parseBiosFromResponse(generatedText);

    return {
      bios,
      success: true
    };
  }

  private createPrompt(request: BioGenerationRequest): string {
    const { interests, profession, personality, tone, style, bioType } = request;

    const basePrompt = `Create 4 unique Instagram bio variations with the following specifications:

**Requirements:**
- Each bio must be under 150 characters (Instagram's limit)
- Tone: ${tone || 'Creative'}
- Style: ${style || 'With Emojis'}
- Bio Type: ${bioType || 'General'}

**User Information:**
- Interests: ${interests || 'General lifestyle'}
- Profession: ${profession || 'Content creator'}  
- Personality: ${personality || 'Authentic and engaging'}

**Format Instructions:**
- Return exactly 4 bios
- Separate each bio with "---"
- Use appropriate emojis (2-4 per bio)
- Include line breaks for readability where appropriate
- Make each bio unique and engaging
- Ensure bios reflect the specified tone and personality

**Example Format:**
Bio 1 text here
---
Bio 2 text here  
---
Bio 3 text here
---
Bio 4 text here

Generate the bios now:`;

    return basePrompt;
  }

  private parseBiosFromResponse(text: string): string[] {
    try {
      // Split by various delimiters that might be used
      let bios = text.split(/---|\n\n\d+\.|Bio \d+:|^\d+\./gm)
        .map(bio => bio.trim())
        .filter(bio => bio.length > 10 && bio.length <= 160); // Filter valid bios

      // If no delimiters found, try splitting by double newlines
      if (bios.length <= 1) {
        bios = text.split(/\n\n+/)
          .map(bio => bio.trim())
          .filter(bio => bio.length > 10 && bio.length <= 160);
      }

      // If still no good results, try line breaks
      if (bios.length <= 1) {
        bios = text.split(/\n/)
          .filter(line => line.trim().length > 10 && line.trim().length <= 160)
          .map(bio => bio.trim());
      }

      // Clean up bios - remove numbering, bullets, etc.
      bios = bios.map(bio => {
        return bio
          .replace(/^\d+[\.\)]\s*/, '') // Remove numbering
          .replace(/^[\-\*]\s*/, '') // Remove bullets
          .replace(/^Bio\s*\d*:?\s*/i, '') // Remove "Bio 1:" etc
          .replace(/^\s*["""''`]/g, '') // Remove leading quotes
          .replace(/["""''`]\s*$/g, '') // Remove trailing quotes
          .trim();
      }).filter(bio => bio.length > 10);

      // Ensure we have at least some bios, limit to 5 max
      const validBios = bios.slice(0, 5);

      if (validBios.length === 0) {
        throw new Error('No valid bios could be parsed from API response');
      }

      return validBios;
    } catch (error) {
      console.error('Error parsing bios:', error);
      throw new Error('Failed to parse bios from API response');
    }
  }
}

export const apiService = new APIService();