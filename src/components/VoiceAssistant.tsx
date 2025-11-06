import { useEffect, useState, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { Mic, MicOff } from 'lucide-react';

const VoiceAssistant = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    // Initialize Vapi with your public key
    const vapi = new Vapi('0ecc3ce1-ef0d-4322-9ccd-64e84cc69ed1');
    vapiRef.current = vapi;

    console.log('Vapi initialized');

    // Set up event listeners
    vapi.on('call-start', () => {
      console.log('Call started');
      setIsCallActive(true);
    });

    vapi.on('call-end', () => {
      console.log('Call ended');
      setIsCallActive(false);
      setIsSpeaking(false);
    });

    vapi.on('speech-start', () => {
      console.log('Assistant started speaking');
      setIsSpeaking(true);
    });

    vapi.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setIsSpeaking(false);
    });

    vapi.on('error', (error) => {
      console.error('Vapi error:', error);
    });

    return () => {
      console.log('Cleaning up Vapi');
      vapi.stop();
    };
  }, []);

  const handleToggleCall = async () => {
    if (!vapiRef.current) {
      console.error('Vapi not initialized');
      return;
    }

    try {
      if (isCallActive) {
        console.log('Stopping call...');
        vapiRef.current.stop();
      } else {
        console.log('Starting call with assistant ID: b45b8cfb-f4c0-48c9-b537-a01eb7c69ac3');
        await vapiRef.current.start('b45b8cfb-f4c0-48c9-b537-a01eb7c69ac3');
      }
    } catch (error) {
      console.error('Error toggling call:', error);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleToggleCall}
        className={`
          relative w-16 h-16 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-lg hover:scale-110
          ${isCallActive 
            ? 'bg-destructive hover:bg-destructive/90' 
            : 'bg-primary hover:bg-primary/90'
          }
          ${isSpeaking ? 'animate-pulse-glow' : ''}
        `}
        aria-label={isCallActive ? 'End call' : 'Start call'}
      >
        {isCallActive ? (
          <MicOff className="w-8 h-8 text-primary-foreground" />
        ) : (
          <Mic className="w-8 h-8 text-primary-foreground" />
        )}
        
        {isSpeaking && (
          <span className="absolute inset-0 rounded-full bg-primary-glow animate-ping opacity-75" />
        )}
      </button>
      
      {isCallActive && (
        <div className="absolute bottom-20 right-0 bg-card text-card-foreground px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          {isSpeaking ? 'Omkar is speaking...' : 'Listening...'}
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;
