import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Users, 
  Plane, 
  AlertTriangle, 
  MessageSquare,
  Search,
  Filter,
  Send,
  Eye,
  CheckCircle,
  XCircle,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminTables = () => {
  const [activeTab, setActiveTab] = useState("requests");
  const [searchTerm, setSearchTerm] = useState("");
  const [broadcastMessage, setBroadcastMessage] = useState("");
  const { toast } = useToast();

  // Mock data
  const droneRequests = [
    {
      id: "DR-001",
      farmer: "John Kamau",
      phone: "+254-712-345-678",
      service: "Pesticide Spraying",
      plot: "North Field A",
      status: "In Progress",
      date: "2024-01-15"
    },
    {
      id: "DR-002", 
      farmer: "Mary Wanjiku",
      phone: "+254-723-456-789",
      service: "Fertilizer Application",
      plot: "South Field B", 
      status: "Completed",
      date: "2024-01-14"
    },
    {
      id: "DR-003",
      farmer: "Peter Mwangi",
      phone: "+254-734-567-890",
      service: "Crop Health Scan",
      plot: "East Field C",
      status: "Scheduled",
      date: "2024-01-16"
    }
  ];

  const farmers = [
    {
      id: "F-001",
      name: "John Kamau",
      phone: "+254-712-345-678",
      location: "Nakuru County",
      joinDate: "2024-01-10",
      plots: 3,
      totalRequests: 8
    },
    {
      id: "F-002",
      name: "Mary Wanjiku", 
      phone: "+254-723-456-789",
      location: "Kiambu County",
      joinDate: "2024-01-08",
      plots: 2,
      totalRequests: 5
    }
  ];

  const issues = [
    {
      id: "IS-001",
      requestId: "DR-001",
      farmer: "John Kamau",
      description: "Drone did not cover entire field area",
      status: "Open",
      date: "2024-01-15",
      priority: "High"
    },
    {
      id: "IS-002",
      requestId: "DR-005",
      farmer: "Grace Nyambura",
      description: "Weather delay - rescheduling needed",
      status: "Resolved",
      date: "2024-01-12",
      priority: "Medium"
    }
  ];

  const feedback = [
    {
      id: "FB-001",
      requestId: "DR-002",
      farmer: "Mary Wanjiku",
      rating: 5,
      comment: "Excellent service! Very professional team.",
      date: "2024-01-14"
    },
    {
      id: "FB-002",
      requestId: "DR-004",
      farmer: "Peter Mwangi",
      rating: 4,
      comment: "Good service, slight delay but quality work.",
      date: "2024-01-13"
    }
  ];

  const handleSendBroadcast = () => {
    if (!broadcastMessage.trim()) return;
    
    toast({
      title: "Broadcast Sent!",
      description: `SMS sent to all ${farmers.length} registered farmers`,
    });
    setBroadcastMessage("");
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed": return "bg-agricultural/10 text-agricultural border-agricultural/20";
      case "in progress": return "bg-sky/10 text-sky border-sky/20";
      case "scheduled": return "bg-wheat/20 text-wheat border-wheat/40";
      case "open": return "bg-destructive/10 text-destructive border-destructive/20";
      case "resolved": return "bg-agricultural/10 text-agricultural border-agricultural/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const tabs = [
    { id: "requests", label: "Drone Requests", icon: <Plane className="h-4 w-4" /> },
    { id: "farmers", label: "Farmers", icon: <Users className="h-4 w-4" /> },
    { id: "issues", label: "Issues", icon: <AlertTriangle className="h-4 w-4" /> },
    { id: "feedback", label: "Feedback", icon: <MessageSquare className="h-4 w-4" /> }
  ];

  return (
    <div className="space-y-6">
      {/* Broadcast SMS */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-agricultural" />
            Broadcast SMS
          </CardTitle>
          <CardDescription>
            Send SMS notifications to all registered farmers via Africa's Talking
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Type your message to send to all farmers..."
            value={broadcastMessage}
            onChange={(e) => setBroadcastMessage(e.target.value)}
            className="min-h-20"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Will send to {farmers.length} farmers
            </p>
            <Button 
              onClick={handleSendBroadcast}
              disabled={!broadcastMessage.trim()}
              variant="agricultural"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Broadcast
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Tables */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Data Management</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-64"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2"
              >
                {tab.icon}
                {tab.label}
              </Button>
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Drone Requests Table */}
          {activeTab === "requests" && (
            <div className="space-y-3">
              {droneRequests.map((request) => (
                <div key={request.id} className="p-4 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium">{request.id}</span>
                        <Badge variant="secondary" className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {request.farmer} • {request.phone}
                      </p>
                      <p className="text-sm text-foreground">
                        {request.service} - {request.plot}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{request.date}</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="mt-2">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Request Details - {request.id}</DialogTitle>
                            <DialogDescription>
                              Full details for this drone service request
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-medium">Farmer:</label>
                              <p>{request.farmer} ({request.phone})</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Service:</label>
                              <p>{request.service}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Plot:</label>
                              <p>{request.plot}</p>
                            </div>
                            <div className="flex gap-2 pt-4">
                              <Button variant="agricultural" size="sm">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Mark Complete
                              </Button>
                              <Button variant="destructive" size="sm">
                                <XCircle className="h-3 w-3 mr-1" />
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Farmers Table */}
          {activeTab === "farmers" && (
            <div className="space-y-3">
              {farmers.map((farmer) => (
                <div key={farmer.id} className="p-4 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium">{farmer.name}</span>
                        <Badge variant="secondary">{farmer.plots} plots</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {farmer.phone} • {farmer.location}
                      </p>
                      <p className="text-sm text-foreground">
                        Joined: {farmer.joinDate} • {farmer.totalRequests} requests
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Issues Table */}
          {activeTab === "issues" && (
            <div className="space-y-3">
              {issues.map((issue) => (
                <div key={issue.id} className="p-4 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium">{issue.id}</span>
                        <Badge variant="secondary" className={getStatusColor(issue.status)}>
                          {issue.status}
                        </Badge>
                        <Badge variant="outline">
                          {issue.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Request: {issue.requestId} • {issue.farmer}
                      </p>
                      <p className="text-sm text-foreground">
                        {issue.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{issue.date}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Resolve
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feedback Table */}
          {activeTab === "feedback" && (
            <div className="space-y-3">
              {feedback.map((fb) => (
                <div key={fb.id} className="p-4 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium">{fb.farmer}</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${
                                star <= fb.rating
                                  ? "fill-wheat text-wheat"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Request: {fb.requestId}
                      </p>
                      <p className="text-sm text-foreground italic">
                        "{fb.comment}"
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{fb.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTables;