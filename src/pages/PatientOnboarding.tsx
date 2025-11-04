import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Heart, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PatientOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    condition: "",
    location: "",
    additionalInfo: ""
  });

  const handleNext = () => {
    if (step === 1 && !formData.condition) {
      toast({
        title: "Condition required",
        description: "Please describe your medical condition to continue",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2) {
      toast({
        title: "Profile created!",
        description: "Welcome to CuraLink. Let's find the best resources for you.",
      });
      // Store user data in localStorage for demo
      localStorage.setItem("userType", "patient");
      localStorage.setItem("patientData", JSON.stringify(formData));
      navigate("/patient-dashboard");
      return;
    }
    
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Step {step} of 2</span>
            <span className="text-sm text-muted-foreground">{step === 1 ? "About You" : "Your Location"}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-hero transition-all duration-300"
              style={{ width: `${(step / 2) * 100}%` }}
            />
          </div>
        </div>

        <Card className="p-8 shadow-lg">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Tell us about yourself</h2>
                <p className="text-muted-foreground">
                  We'll use this information to personalize your experience and connect you with relevant resources
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name (Optional)</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition" className="text-base">
                    What brings you to CuraLink? *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Describe your condition in your own words (e.g., "I have brain cancer" or "My parent has Parkinson's")
                  </p>
                  <Textarea
                    id="condition"
                    placeholder="I have been diagnosed with..."
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Details (Optional)</Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Any other medical conditions, symptoms, or specific research areas of interest..."
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    rows={3}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <div className="inline-flex p-3 bg-secondary/10 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Where are you located?</h2>
                <p className="text-muted-foreground">
                  This helps us show you nearby health experts and clinical trials
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">City and Country</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Boston, USA or London, UK"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                  <p className="text-sm text-muted-foreground">
                    You can still view experts and trials globally, but we'll prioritize local options
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-8 pt-6 border-t">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="w-32"
              >
                Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              className="flex-1 bg-primary hover:bg-primary-glow"
            >
              {step === 2 ? "Complete Setup" : "Continue"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PatientOnboarding;
