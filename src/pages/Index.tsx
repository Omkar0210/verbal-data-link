import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, MessageSquare, Stethoscope, Heart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-slide-in-from-bottom">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">AI-Powered Healthcare Platform</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-float">
            CuraLink
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 mb-4 animate-slide-in-from-bottom font-light">
            Your Personal Healthcare Companion
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-from-bottom" style={{ animationDelay: '0.2s' }}>
            Experience the future of healthcare with our AI-powered voice assistant and intelligent chatbot
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50 backdrop-blur-sm animate-fade-in">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 animate-pulse-glow">
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Voice Assistant</h3>
            <p className="text-muted-foreground leading-relaxed">
              Talk to Omkar, your personal AI healthcare assistant. Get instant medical guidance through natural conversations.
            </p>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
              <Stethoscope className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Smart Diagnostics</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced AI analysis of symptoms and health data to provide accurate preliminary assessments.
            </p>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">24/7 Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Round-the-clock access to healthcare guidance and emergency assistance whenever you need it.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => navigate('/dashboard')}
            className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-xl"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-xl bg-primary-glow opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
          </button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free to use • Secure & Private
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
