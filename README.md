# Instagram Bio Generator

A powerful, AI-enhanced Instagram bio generator that helps users create compelling, unique bios that increase engagement and followers.

## Features

- 🤖 **AI-Powered Generation**: Supports OpenAI GPT, Anthropic Claude, and Groq APIs
- 📱 **Multiple Bio Types**: Aesthetic, Funny, Business, and Cool bio categories
- 🎨 **Rich Templates**: 30+ pre-built templates for instant use
- ⚡ **Bio Analyzer**: Advanced tool to score and optimize existing bios
- 🔤 **Font Styling**: Multiple font options and symbol integration
- 📊 **Performance Insights**: Based on analysis of 500K+ successful profiles
- 🚀 **No Registration Required**: Start generating immediately

## API Setup

This project supports multiple AI providers. Choose one that fits your needs:

### Option 1: Groq (Recommended - FREE!)
1. Visit [https://console.groq.com/keys](https://console.groq.com/keys)
2. Create a free account and get your API key
3. In `.env` file, uncomment and set:
   ```
   VITE_API_URL=https://api.groq.com/openai/v1
   VITE_API_KEY=your_groq_api_key_here
   ```

### Option 2: OpenAI GPT
1. Visit [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Get your API key (requires paid account)
3. In `.env` file, uncomment and set:
   ```
   VITE_API_URL=https://api.openai.com/v1
   VITE_API_KEY=your_openai_api_key_here
   ```

### Option 3: Anthropic Claude
1. Visit [https://console.anthropic.com/](https://console.anthropic.com/)
2. Get your API key (requires paid account)
3. In `.env` file, uncomment and set:
   ```
   VITE_API_URL=https://api.anthropic.com/v1
   VITE_API_KEY=your_anthropic_api_key_here
   ```

### Option 4: No API (Offline Mode)
Leave API settings empty to use built-in templates only. Works without any API keys but provides less variety.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3c24a003-7558-441d-a87a-bafdc5ec8659) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3c24a003-7558-441d-a87a-bafdc5ec8659) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
