import { useNavigate } from 'react-router-dom';
import VoiceAssistant from '../components/VoiceAssistant';
import { Home, FileText, Calendar, FlaskConical, Activity, Clock, TrendingUp } from 'lucide-react';

const PatientDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Health Score', value: '92%', icon: Activity, trend: '+5%' },
    { label: 'Next Checkup', value: '3 days', icon: Clock, trend: '' },
    { label: 'Wellness Trend', value: 'Improving', icon: TrendingUp, trend: '+12%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-all hover:scale-105 group"
          >
            <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>
          
          <div className="flex items-center gap-3 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Online</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 animate-slide-in-from-bottom">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Your Health Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Welcome back! Your AI healthcare assistant Omkar is ready to help.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label}
                className="bg-gradient-card p-6 rounded-xl shadow-md hover:shadow-glow transition-all duration-300 border border-border/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-8 h-8 text-primary" />
                  {stat.trend && (
                    <span className="text-green-500 text-sm font-medium">{stat.trend}</span>
                  )}
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="group bg-gradient-card p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50 backdrop-blur-sm animate-fade-in cursor-pointer">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Health Records</h3>
            <p className="text-muted-foreground leading-relaxed">
              Access your complete medical history, test results, and treatment plans in one secure place.
            </p>
            <div className="mt-4 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
              View Records →
            </div>
          </div>

          <div className="group bg-gradient-card p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50 backdrop-blur-sm animate-fade-in cursor-pointer" style={{ animationDelay: '0.1s' }}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all" style={{ animationDelay: '0.5s' }}>
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Appointments</h3>
            <p className="text-muted-foreground leading-relaxed">
              Schedule consultations, manage bookings, and get reminders for upcoming healthcare visits.
            </p>
            <div className="mt-4 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
              Manage Schedule →
            </div>
          </div>

          <div className="group bg-gradient-card p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 border border-border/50 backdrop-blur-sm animate-fade-in cursor-pointer" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all" style={{ animationDelay: '1s' }}>
              <FlaskConical className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Clinical Trials</h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover cutting-edge research opportunities and clinical trials that match your health profile.
            </p>
            <div className="mt-4 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
              Explore Trials →
            </div>
          </div>
        </div>

        {/* Voice Assistant Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Click the microphone button to start talking with Omkar</span>
          </div>
        </div>
      </div>

      <VoiceAssistant />
    </div>
  );
};

export default PatientDashboard;
