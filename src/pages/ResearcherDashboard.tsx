import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Search, Star, Users, MessageSquare, Plus, LogOut } from "lucide-react";

interface ResearcherData {
  name: string;
  institution: string;
  specialties: string;
  researchInterests: string;
}

const ResearcherDashboard = () => {
  const navigate = useNavigate();
  const [researcherData, setResearcherData] = useState<ResearcherData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    if (userType !== "researcher") {
      navigate("/");
      return;
    }

    const data = localStorage.getItem("researcherData");
    if (data) {
      setResearcherData(JSON.parse(data));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("researcherData");
    navigate("/");
  };

  if (!researcherData) return null;

  // Mock data
  const mockCollaborators = [
    {
      id: 1,
      name: "Dr. Emily Roberts",
      specialty: "Clinical Trials Design",
      institution: "Stanford University",
      commonInterests: ["Immunotherapy", "Clinical AI"]
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Molecular Biology",
      institution: "MIT",
      commonInterests: ["Gene Therapy"]
    }
  ];

  const mockTrials = [
    {
      id: 1,
      title: "My Immunotherapy Trial - Phase 2",
      phase: "Phase 2",
      status: "Active",
      participants: "12/30",
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      title: "Gene Therapy Study",
      phase: "Phase 1",
      status: "Planning",
      participants: "0/20",
      lastUpdated: "1 week ago"
    }
  ];

  const mockForumQuestions = [
    {
      id: 1,
      question: "What are the eligibility criteria for immunotherapy trials?",
      askedBy: "Patient (Brain Cancer)",
      time: "3 hours ago",
      replies: 2
    },
    {
      id: 2,
      question: "Are there any trials accepting international patients?",
      askedBy: "Patient (Lung Cancer)",
      time: "1 day ago",
      replies: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      {/* Header */}
      <div className="bg-card border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-hero p-2 rounded-xl">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">CuraLink</h1>
                <p className="text-sm text-muted-foreground">
                  {researcherData.name} • {researcherData.institution}
                </p>
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
              <h2 className="text-2xl font-bold mb-2">Researcher Dashboard</h2>
              <p className="text-muted-foreground">
                Specialties: <span className="font-semibold text-secondary">{researcherData.specialties}</span>
              </p>
              {researcherData.researchInterests && (
                <p className="text-sm text-muted-foreground mt-1">
                  Research interests: {researcherData.researchInterests}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button className="bg-secondary">
                <Plus className="w-4 h-4 mr-2" />
                New Trial
              </Button>
              <Button variant="outline">
                <Star className="w-4 h-4 mr-2" />
                Favorites
              </Button>
            </div>
          </div>
        </Card>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search collaborators, trials, or forum discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6"
            />
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="trials" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="trials">My Clinical Trials</TabsTrigger>
            <TabsTrigger value="collaborators">Collaborators</TabsTrigger>
            <TabsTrigger value="forums">Forum Questions</TabsTrigger>
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
                      <Badge variant="outline">Participants: {trial.participants}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Last updated: {trial.lastUpdated}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary">Manage Trial</Button>
                  <Button size="sm" variant="outline">View Applications</Button>
                  <Button size="sm" variant="outline">Edit Details</Button>
                </div>
              </Card>
            ))}
            <Button className="w-full" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add New Clinical Trial
            </Button>
          </TabsContent>

          <TabsContent value="collaborators" className="space-y-4">
            {mockCollaborators.map((collab) => (
              <Card key={collab.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4 flex-1">
                    <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center">
                      <Users className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{collab.name}</h3>
                      <p className="text-muted-foreground">{collab.specialty}</p>
                      <p className="text-sm text-muted-foreground">{collab.institution}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {collab.commonInterests.map((interest, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Star className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="bg-secondary">View Profile</Button>
                  <Button size="sm" variant="outline">Send Message</Button>
                  <Button size="sm" variant="outline">Connect</Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="forums" className="space-y-4">
            <Card className="p-6 bg-accent-light mb-4">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Patient Questions</h3>
              </div>
              <p className="text-muted-foreground">
                Help patients by answering their questions about clinical trials and research
              </p>
            </Card>

            {mockForumQuestions.map((question) => (
              <Card key={question.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold flex-1">{question.question}</h3>
                    <Badge variant={question.replies === 0 ? "destructive" : "secondary"}>
                      {question.replies} {question.replies === 1 ? 'reply' : 'replies'}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Asked by {question.askedBy}</span>
                    <span>•</span>
                    <span>{question.time}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="bg-primary">Reply to Question</Button>
                  <Button size="sm" variant="outline">View Discussion</Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResearcherDashboard;
