import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, Star, FileText, Users, MessageSquare, LogOut } from "lucide-react";
import { VoiceAssistant } from "@/components/VoiceAssistant";
import { AIChatbot } from "@/components/AIChatbot";

interface PatientData {
  name: string;
  condition: string;
  location: string;
}

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    if (userType !== "patient") {
      navigate("/");
      return;
    }

    const data = localStorage.getItem("patientData");
    if (data) {
      setPatientData(JSON.parse(data));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("patientData");
    navigate("/");
  };

  if (!patientData) return null;

  // Mock data for demonstration
  const mockTrials = [
    {
      id: 1,
      title: "Phase II Study of Immunotherapy for Brain Cancer",
      phase: "Phase 2",
      status: "Recruiting",
      location: "Boston, USA",
      description: "Investigating novel immunotherapy approaches for glioblastoma patients"
    },
    {
      id: 2,
      title: "Targeted Therapy Clinical Trial",
      phase: "Phase 3",
      status: "Recruiting",
      location: "New York, USA",
      description: "Evaluating targeted molecular therapy effectiveness"
    }
  ];

  const mockExperts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Neuro-Oncology",
      institution: "Harvard Medical School",
      publications: 127
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Clinical Oncology",
      institution: "Johns Hopkins University",
      publications: 93
    }
  ];

  const mockPublications = [
    {
      id: 1,
      title: "Advances in Glioblastoma Treatment: A 2024 Review",
      authors: "Johnson S., et al.",
      journal: "Nature Medicine",
      year: 2024
    },
    {
      id: 2,
      title: "Immunotherapy Breakthrough in Brain Cancer Research",
      authors: "Chen M., Wilson R.",
      journal: "The Lancet Oncology",
      year: 2024
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <VoiceAssistant />
      <AIChatbot />
      {/* Header */}
      <div className="bg-card border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-hero p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">CuraLink</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {patientData.name || "Patient"}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <Card className="p-6 mb-8 bg-gradient-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Personalized Health Hub</h2>
              <p className="text-muted-foreground">
                Exploring resources for: <span className="font-semibold text-primary">{patientData.condition}</span>
              </p>
              {patientData.location && (
                <p className="text-sm text-muted-foreground mt-1">
                  Showing results near {patientData.location}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Star className="w-4 h-4 mr-2" />
                My Favorites
              </Button>
            </div>
          </div>
        </Card>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search clinical trials, experts, or publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6"
            />
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="trials" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="trials">Clinical Trials</TabsTrigger>
            <TabsTrigger value="experts">Health Experts</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="forums">Forums</TabsTrigger>
          </TabsList>

          <TabsContent value="trials" className="space-y-4">
            {mockTrials.map((trial) => (
              <Card key={trial.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{trial.title}</h3>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary">{trial.phase}</Badge>
                      <Badge className="bg-secondary">{trial.status}</Badge>
                      <Badge variant="outline">{trial.location}</Badge>
                    </div>
                    <p className="text-muted-foreground">{trial.description}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Star className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary">View Details</Button>
                  <Button size="sm" variant="outline">Contact Trial Team</Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="experts" className="space-y-4">
            {mockExperts.map((expert) => (
              <Card key={expert.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4 flex-1">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{expert.name}</h3>
                      <p className="text-muted-foreground">{expert.specialty}</p>
                      <p className="text-sm text-muted-foreground">{expert.institution}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {expert.publications} publications
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Star className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="bg-secondary">View Profile</Button>
                  <Button size="sm" variant="outline">Request Meeting</Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="publications" className="space-y-4">
            {mockPublications.map((pub) => (
              <Card key={pub.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4 flex-1">
                    <div className="bg-accent/10 rounded-lg p-3">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground">{pub.authors}</p>
                      <p className="text-sm text-muted-foreground">
                        {pub.journal} • {pub.year}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Star className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">Read Abstract</Button>
                  <Button size="sm" variant="outline">View Full Paper</Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="forums" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Community Forums</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Connect with researchers, ask questions, and learn from expert discussions
              </p>
              <div className="space-y-3">
                <Card className="p-4 bg-muted/50">
                  <h4 className="font-semibold mb-2">Brain Cancer Research</h4>
                  <p className="text-sm text-muted-foreground mb-2">Latest discussions on treatment advances</p>
                  <Badge variant="secondary">42 discussions</Badge>
                </Card>
                <Card className="p-4 bg-muted/50">
                  <h4 className="font-semibold mb-2">Clinical Trials Q&A</h4>
                  <p className="text-sm text-muted-foreground mb-2">Ask researchers about trial participation</p>
                  <Badge variant="secondary">28 discussions</Badge>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientDashboard;
