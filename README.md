# CuraLink - AI-Powered Healthcare Platform

CuraLink is an innovative healthcare companion that leverages AI to provide personalized medical guidance through voice interactions and intelligent chat.

## Features

- 🎙️ **Voice Assistant (Omkar)** - Natural voice conversations with AI healthcare assistant
- 💬 **AI Chatbot** - Intelligent text-based healthcare guidance  
- 📊 **Health Dashboard** - Track your wellness metrics and trends
- 📅 **Appointments** - Manage healthcare visits
- 🔬 **Clinical Trials** - Discover relevant research opportunities

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Voice AI**: Vapi AI Assistant
- **Backend**: Lovable Cloud (Supabase)
- **Deployment**: Vercel

## Project URL

**Lovable Project**: https://lovable.dev/projects/6a59129c-c6fa-4e4e-855a-ab85e970f0f4

## Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add environment variables (see below)
7. Click "Deploy"

### Environment Variables for Vercel

Add these in your Vercel project settings:

```
VITE_SUPABASE_URL=https://nhiialsxhjewpvlqvcpw.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaWlhbHN4aGpld3B2bHF2Y3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMTA5NDMsImV4cCI6MjA3Nzg4Njk0M30.SOF-Zmu4eyd1tp0gHnvraXP0YqzNLDarIeSiPkccnDk
VITE_SUPABASE_PROJECT_ID=nhiialsxhjewpvlqvcpw
```

### Vercel Configuration

The `vercel.json` file is already configured for proper routing. Your app will automatically handle client-side routing.

## Voice Assistant

The Vapi voice assistant "Omkar" is pre-configured with:
- Healthcare expertise
- Natural conversation capabilities
- 24/7 availability

Simply click the microphone button on the dashboard to start talking!

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Vapi AI
- Lovable Cloud (Supabase)

## Custom Domain

You can connect a custom domain via Lovable:
1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## License

MIT
