// Bio templates and generation utilities
export interface BioTemplate {
  template: string;
  category: string;
  style: string;
}

export const BIO_TEMPLATES = {
  aesthetic: [
    "✨ Living in my own fairytale\n🌙 Chasing dreams & capturing moments\n💫 Creating magic daily",
    "🤍 Soft soul, wild heart\n🌸 Blooming where I'm planted\n☁️ Dancing through life gracefully",
    "🦋 Transforming into my best self\n✨ Manifesting beautiful moments\n🌙 Moon child with stardust dreams",
    "💫 Dreamer | Creator | Believer\n🌸 Finding beauty in simplicity\n🤍 Living life in pastels",
    "☁️ Head in clouds, feet on ground\n🌙 Nocturnal soul, morning coffee\n✨ Making ordinary moments magical",
    "🌸 Soft aesthetic, strong mindset\n💫 Collecting sunset memories\n🤍 Creating my own sunshine",
    "🦋 Metamorphosis in progress\n✨ Sprinkling kindness everywhere\n🌙 Lunar powered, star guided",
    "💫 Vintage soul, modern dreams\n🌸 Pressed flowers & poetry\n☁️ Lost in beautiful thoughts"
  ],
  
  funny: [
    "🍕 Pizza is my love language\n😂 Professional overthinker\n🤪 Adulting is hard, send help",
    "☕ Coffee-powered human\n🙃 Chaos coordinator extraordinaire\n😅 Warning: May contain sarcasm",
    "🤡 Part-time adult, full-time mess\n🍕 In a committed relationship with food\n😂 My life is basically a sitcom",
    "🤪 Certified weirdo since birth\n☕ Fueled by caffeine & questionable decisions\n😅 Living my best chaotic life",
    "🙃 Professional procrastinator\n🍕 Treating my body like a temple... a food temple\n😂 Plot twist: I'm the comic relief",
    "🤡 Warning: Highly awkward individual\n☕ Converting oxygen to sarcasm since '95\n🤪 Fluent in movie quotes & song lyrics",
    "😅 Recovering perfectionist\n🍕 Relationship status: Hungry\n🙃 Life's too short to be serious all the time",
    "🤪 Chief happiness officer of my own life\n😂 Powered by dad jokes & good vibes\n☕ Professional nap enthusiast"
  ],
  
  business: [
    "💼 Digital Marketing Strategist\n📈 Helping brands grow online\n🎯 Results-driven solutions | DM for collabs",
    "🚀 Entrepreneur | Founder | Innovator\n💡 Turning ideas into profitable businesses\n📧 Connect: business@email.com",
    "📊 Business Consultant\n💰 Scaling startups to 7-figures\n🎯 Free strategy call in bio link",
    "💼 Professional Speaker & Coach\n📈 Transforming teams, maximizing results\n🎯 Book consultation below",
    "🚀 Tech Startup Founder\n💡 Building tomorrow's solutions today\n📧 Investor inquiries: contact@company.com",
    "📊 Sales Expert | Revenue Generator\n💰 Closing deals & building relationships\n🎯 Ready to grow your business?",
    "💼 Executive Coach & Leadership Mentor\n📈 Developing high-performance teams\n🎯 Schedule your breakthrough session",
    "🚀 E-commerce Strategist\n💰 Helping brands scale profitably\n📧 Free audit: link in bio"
  ],
  
  cool: [
    "🔥 Living life on my own terms\n⚡ Creating waves, not following them\n🌟 Born to stand out, never blend in",
    "💯 Authentic vibes only\n🔥 Turning dreams into reality\n⚡ Building my empire one day at a time",
    "🌟 Trendsetter, not trend follower\n🔥 Manifesting greatness daily\n💯 Confidence level: Unstoppable",
    "⚡ High energy, higher standards\n🔥 Making moves in silence\n🌟 Success is my only option",
    "💯 Boss mentality, humble heart\n🔥 Creating my own lane\n⚡ Leveling up constantly",
    "🌟 Fearless soul, fierce mind\n🔥 Writing my own success story\n💯 Greatness is my DNA",
    "⚡ Electric personality, magnetic energy\n🔥 Turning passion into profit\n🌟 Built different, think different",
    "💯 Self-made & self-motivated\n🔥 Breaking barriers, setting standards\n⚡ Future legend in the making"
  ]
};

export const PERSONALITY_MODIFIERS = {
  creative: ['🎨', 'Artist', 'Creator', 'Designer', 'Maker', 'Visionary'],
  travel: ['✈️', 'Wanderlust', 'Explorer', 'Adventurer', 'Globe-trotter', 'Nomad'],
  fitness: ['💪', 'Fitness enthusiast', 'Gym lover', 'Health advocate', 'Wellness coach', 'Strong'],
  food: ['🍕', 'Foodie', 'Chef', 'Food lover', 'Culinary explorer', 'Taste tester'],
  music: ['🎵', 'Music lover', 'Melody seeker', 'Beat creator', 'Sound enthusiast', 'Rhythm'],
  nature: ['🌱', 'Nature lover', 'Earth child', 'Green soul', 'Outdoor enthusiast', 'Wild heart'],
  tech: ['💻', 'Tech enthusiast', 'Digital creator', 'Code writer', 'Innovation lover', 'Future builder'],
  book: ['📚', 'Bookworm', 'Story lover', 'Word enthusiast', 'Literature fan', 'Knowledge seeker']
};

export const generateClientSideBios = (bioType: string, count: number = 3): string[] => {
  try {
    const templates = BIO_TEMPLATES[bioType as keyof typeof BIO_TEMPLATES] || BIO_TEMPLATES.aesthetic;
    
    if (!templates || templates.length === 0) {
      console.warn(`No templates found for bio type: ${bioType}, falling back to aesthetic`);
      return BIO_TEMPLATES.aesthetic.slice(0, count);
    }
    
    // Shuffle and pick random templates
    const shuffled = [...templates].sort(() => Math.random() - 0.5);
    const result = shuffled.slice(0, Math.min(count, templates.length));
    
    // If we need more bios than available templates, add variations
    while (result.length < count && result.length < 10) {
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      if (!result.includes(randomTemplate)) {
        result.push(randomTemplate);
      } else {
        break; // Avoid infinite loop if all templates are used
      }
    }
    
    return result;
  } catch (error) {
    console.error('Error in generateClientSideBios:', error);
    return BIO_TEMPLATES.aesthetic.slice(0, Math.min(count, BIO_TEMPLATES.aesthetic.length));
  }
};

export const generateCustomBio = (
  interests: string[],
  profession: string,
  bioType: string,
  personality: string[]
): string => {
  try {
    const baseTemplates = BIO_TEMPLATES[bioType as keyof typeof BIO_TEMPLATES] || BIO_TEMPLATES.aesthetic;
    
    if (!baseTemplates || baseTemplates.length === 0) {
      console.warn('No base templates available, using default');
      return BIO_TEMPLATES.aesthetic[0];
    }
    
    const randomTemplate = baseTemplates[Math.floor(Math.random() * baseTemplates.length)];
    
    // Create variations by incorporating user inputs
    let customBio = randomTemplate;
    
    // Replace generic elements with user-specific content
    if (profession && profession.trim()) {
      customBio = customBio.replace(/Creator|Professional|Expert|Strategist|Consultant/gi, profession);
    }
    
    if (interests && interests.length > 0) {
      const validInterests = interests.filter(i => i && i.trim());
      if (validInterests.length > 0) {
        const interest = validInterests[Math.floor(Math.random() * validInterests.length)].toLowerCase().trim();
        const modifier = PERSONALITY_MODIFIERS[interest as keyof typeof PERSONALITY_MODIFIERS];
        if (modifier) {
          const lines = customBio.split('\n');
          if (lines.length > 1) {
            customBio = `${modifier[0]} ${modifier[1]}\n` + lines.slice(1).join('\n');
          } else {
            customBio = `${modifier[0]} ${modifier[1]} | ${customBio}`;
          }
        }
      }
    }
    
    return customBio;
  } catch (error) {
    console.error('Error in generateCustomBio:', error);
    return BIO_TEMPLATES.aesthetic[0];
  }
};

export const BIO_GENERATION_PROMPTS = {
  aesthetic: {
    style: "dreamy, artistic, minimalist",
    emojis: "✨ 🌙 💫 🦋 🌸 🤍 ☁️",
    tone: "soft, ethereal, inspiring"
  },
  funny: {
    style: "humorous, witty, relatable",
    emojis: "😂 🤪 🙃 🍕 ☕ 🎭 🤡",
    tone: "entertaining, self-deprecating, fun"
  },
  business: {
    style: "professional, authoritative, results-focused",
    emojis: "💼 📈 🎯 💰 🚀 📊 💡",
    tone: "confident, trustworthy, achievement-oriented"
  },
  cool: {
    style: "trendy, confident, unique",
    emojis: "🔥 ⚡ 🌟 💯 🎯 ⭐ 🚀",
    tone: "bold, inspiring, authentic"
  }
};