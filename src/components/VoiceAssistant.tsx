import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import Vapi from '@vapi-ai/web';
import { useToast } from '@/hooks/use-toast';

export const VoiceAssistant = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [assistantSpeaking, setAssistantSpeaking] = useState(false);
  const vapiRef = useRef<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize Vapi client with API key
    const apiKey = 'fa189611-80e1-470c-a3d8-0a941852a956';
    console.log('Initializing Vapi with API key');
    vapiRef.current = new Vapi(apiKey);

    // Set up event listeners
    vapiRef.current.on('call-start', () => {
      console.log('Call started');
      setIsCallActive(true);
    });

    vapiRef.current.on('call-end', () => {
      console.log('Call ended');
      setIsCallActive(false);
      setAssistantSpeaking(false);
    });

    vapiRef.current.on('speech-start', () => {
      console.log('Assistant started speaking');
      setAssistantSpeaking(true);
    });

    vapiRef.current.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setAssistantSpeaking(false);
    });

    vapiRef.current.on('error', (error: any) => {
      console.error('Vapi error:', error);
      toast({
        title: 'Voice Assistant Error',
        description: error.message || 'An error occurred with the voice assistant',
        variant: 'destructive',
      });
    });

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, [toast]);

  const startCall = async () => {
    try {
      console.log('Starting Vapi call...');
      const assistantId = '350e5c66-88a2-493d-9958-a2b955ad94de';
      await vapiRef.current.start(assistantId);
      console.log('Vapi call started successfully');
      toast({
        title: 'Voice Assistant Active',
        description: 'You can now speak with Omkar, your medical assistant',
      });
    } catch (error: any) {
      console.error('Failed to start call:', error);
      toast({
        title: 'Failed to Start',
        description: error?.message || 'Could not connect to voice assistant. Please check your microphone permissions.',
        variant: 'destructive',
      });
    }
  };

  const endCall = () => {
    vapiRef.current.stop();
    toast({
      title: 'Call Ended',
      description: 'Voice assistant session ended',
    });
  };

  const toggleMute = () => {
    if (vapiRef.current) {
      vapiRef.current.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {isCallActive && (
          <div className="flex items-center gap-2 bg-card border border-primary rounded-full px-4 py-2 shadow-glow animate-in slide-in-from-bottom-5">
            <div className={`w-3 h-3 rounded-full ${assistantSpeaking ? 'bg-primary animate-pulse' : 'bg-secondary animate-pulse'}`} />
            <span className="text-sm font-medium text-foreground">
              {assistantSpeaking ? 'Omkar is speaking...' : 'Listening...'}
            </span>
          </div>
        )}
        
        <div className="flex gap-2">
          {isCallActive && (
            <Button
              onClick={toggleMute}
              variant={isMuted ? 'destructive' : 'outline'}
              size="icon"
              className="h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
          )}
          
          <Button
            onClick={isCallActive ? endCall : startCall}
            variant={isCallActive ? 'destructive' : 'default'}
            size="icon"
            className="h-14 w-14 rounded-full shadow-glow hover:scale-110 transition-transform bg-gradient-hero"
          >
            {isCallActive ? (
              <PhoneOff className="h-6 w-6" />
            ) : (
              <Phone className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
