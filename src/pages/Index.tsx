import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Users, FlaskConical } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-gradient-hero p-3 rounded-2xl shadow-glow">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CuraLink
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connecting patients and researchers to discover{" "}
            <span className="text-primary font-semibold">clinical trials</span>,{" "}
            <span className="text-secondary font-semibold">medical publications</span>, and{" "}
            <span className="text-accent font-semibold">health experts</span>
          </p>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
            {/* Patient Card */}
            <div
              className="group relative"
              onMouseEnter={() => setHoveredCard("patient")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                bg-card rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 cursor-pointer
                ${hoveredCard === "patient" ? "border-primary shadow-glow scale-105" : "border-border"}
              `}>
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Patient or Caregiver</h3>
                  <p className="text-muted-foreground text-center">
                    Find clinical trials, connect with health experts, and access the latest research
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full mt-4 bg-primary hover:bg-primary-glow shadow-md"
                    onClick={() => navigate("/patient-onboarding")}
                  >
                    Get Started as Patient
                  </Button>
                </div>
              </div>
            </div>

            {/* Researcher Card */}
            <div
              className="group relative"
              onMouseEnter={() => setHoveredCard("researcher")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                bg-card rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 cursor-pointer
                ${hoveredCard === "researcher" ? "border-secondary shadow-glow scale-105" : "border-border"}
              `}>
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-secondary/10 p-4 rounded-xl">
                    <FlaskConical className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Researcher</h3>
                  <p className="text-muted-foreground text-center">
                    Manage trials, find collaborators, and engage with patients seeking your expertise
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full mt-4 bg-secondary hover:bg-secondary/90 shadow-md"
                    onClick={() => navigate("/researcher-onboarding")}
                  >
                    Get Started as Researcher
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Powered by leading medical databases</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              <span>PubMed</span>
              <span>•</span>
              <span>ClinicalTrials.gov</span>
              <span>•</span>
              <span>ORCID</span>
              <span>•</span>
              <span>ResearchGate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
