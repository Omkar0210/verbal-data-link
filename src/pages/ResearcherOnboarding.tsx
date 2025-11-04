import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { FlaskConical, ArrowRight, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ResearcherOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    specialties: "",
    researchInterests: "",
    orcidId: "",
    researchGateUrl: "",
    availableForMeetings: true
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.specialties) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and specialties",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Welcome to CuraLink!",
      description: "Your researcher profile has been created successfully.",
    });
    
    localStorage.setItem("userType", "researcher");
    localStorage.setItem("researcherData", JSON.stringify(formData));
    navigate("/researcher-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5 py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        <Card className="p-8 shadow-lg">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex p-3 bg-secondary/10 rounded-full mb-4">
              <FlaskConical className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold">Create Your Researcher Profile</h2>
            <p className="text-muted-foreground">
              Help patients and collaborators find you based on your expertise and research areas
            </p>
          </div>

          <div className="space-y-6">
            {/* Personal Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Dr. Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input
                    id="institution"
                    placeholder="Harvard Medical School"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Expertise</h3>
              
              <div className="space-y-2">
                <Label htmlFor="specialties">Specialties *</Label>
                <Input
                  id="specialties"
                  placeholder="e.g., Oncology, Neurology, Immunology"
                  value={formData.specialties}
                  onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
                />
                <p className="text-sm text-muted-foreground">
                  Separate multiple specialties with commas
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="researchInterests">Research Interests</Label>
                <Textarea
                  id="researchInterests"
                  placeholder="e.g., Immunotherapy, Clinical AI, Gene Therapy, Cancer Biomarkers..."
                  value={formData.researchInterests}
                  onChange={(e) => setFormData({ ...formData, researchInterests: e.target.value })}
                  rows={4}
                  className="resize-none"
                />
              </div>
            </div>

            {/* External Links */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b pb-2">
                <LinkIcon className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold">Connect External Profiles (Optional)</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Link your academic profiles to automatically import publications and credentials
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orcidId">ORCID iD</Label>
                  <Input
                    id="orcidId"
                    placeholder="0000-0000-0000-0000"
                    value={formData.orcidId}
                    onChange={(e) => setFormData({ ...formData, orcidId: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="researchGateUrl">ResearchGate URL</Label>
                  <Input
                    id="researchGateUrl"
                    placeholder="https://researchgate.net/profile/..."
                    value={formData.researchGateUrl}
                    onChange={(e) => setFormData({ ...formData, researchGateUrl: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-accent-light rounded-lg">
                <div className="space-y-1">
                  <Label htmlFor="availability" className="text-base font-semibold">
                    Available for meetings
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Allow patients to request meetings with you
                  </p>
                </div>
                <Switch
                  id="availability"
                  checked={formData.availableForMeetings}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, availableForMeetings: checked })
                  }
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full mt-8 bg-secondary hover:bg-secondary/90"
            size="lg"
          >
            Complete Setup
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ResearcherOnboarding;
