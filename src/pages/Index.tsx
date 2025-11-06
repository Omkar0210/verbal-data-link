import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-float">
            CuraLink
          </h1>
          <p className="text-2xl text-muted-foreground animate-slide-in-from-bottom">
            Your AI-Powered Healthcare Companion
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-lg shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Voice Assistant</h2>
            <p className="text-muted-foreground mb-4">
              Talk to Omkar, your personal healthcare AI assistant, for instant support and guidance.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">AI Chatbot</h2>
            <p className="text-muted-foreground mb-4">
              Get answers to your health questions through our intelligent chat interface.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-glow"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
