import { useNavigate } from 'react-router-dom';
import VoiceAssistant from '../components/VoiceAssistant';
import { Home } from 'lucide-react';

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors mb-8"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Patient Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome! Use the voice assistant button below to talk to Omkar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-glow transition-all duration-300 border border-border">
            <h3 className="text-xl font-semibold mb-2 text-primary">Health Records</h3>
            <p className="text-muted-foreground">Access your medical history and documents</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-glow transition-all duration-300 border border-border">
            <h3 className="text-xl font-semibold mb-2 text-primary">Appointments</h3>
            <p className="text-muted-foreground">Schedule and manage your appointments</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-glow transition-all duration-300 border border-border">
            <h3 className="text-xl font-semibold mb-2 text-primary">Clinical Trials</h3>
            <p className="text-muted-foreground">Discover relevant research opportunities</p>
          </div>
        </div>
      </div>

      <VoiceAssistant />
    </div>
  );
};

export default PatientDashboard;
