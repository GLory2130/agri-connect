import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Calendar,
  Users,
  Star,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  const stats = [
    { title: "Active Requests", value: "12", icon: <Plane className="h-5 w-5" />, trend: "+23%" },
    { title: "Completed Jobs", value: "156", icon: <CheckCircle className="h-5 w-5" />, trend: "+12%" },
    { title: "Farm Plots", value: "8", icon: <MapPin className="h-5 w-5" />, trend: "+2%" },
    { title: "Farmers Served", value: "1.2k", icon: <Users className="h-5 w-5" />, trend: "+45%" }
  ];

  const recentRequests = [
    {
      id: "DR-001",
      service: "Pesticide Spraying",
      plot: "North Field A",
      status: "In Progress",
      statusColor: "bg-sky",
      time: "2 hours ago"
    },
    {
      id: "DR-002", 
      service: "Fertilizer Application",
      plot: "South Field B",
      status: "Completed",
      statusColor: "bg-agricultural",
      time: "5 hours ago"
    },
    {
      id: "DR-003",
      service: "Crop Health Scan",
      plot: "East Field C", 
      status: "Scheduled",
      statusColor: "bg-wheat",
      time: "Tomorrow 9:00 AM"
    }
  ];

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Farmer Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your drone requests, track service progress, and manage your farm plots 
            all from one comprehensive dashboard.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-accent rounded-lg">
                        {stat.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {stat.trend}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Requests */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-agricultural" />
                  Recent Drone Requests
                </CardTitle>
                <CardDescription>
                  Track your latest service requests and their status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentRequests.map((request, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${request.statusColor}`}></div>
                      <div>
                        <p className="font-medium text-foreground">{request.service}</p>
                        <p className="text-sm text-muted-foreground">
                          {request.id} • {request.plot}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{request.status}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">{request.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Requests
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Preview */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-sky" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="agricultural" className="w-full justify-start">
                  <Plane className="mr-2 h-4 w-4" />
                  Request Drone Service
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Add New Plot
                </Button>
                <Link to="/feedback" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="mr-2 h-4 w-4" />
                    Rate Services
                  </Button>
                </Link>
                <Link to="/referrals" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <Share2 className="mr-2 h-4 w-4" />
                    Refer Farmers
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Report Issue
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft overflow-hidden">
              <CardHeader>
                <CardTitle>Dashboard Preview</CardTitle>
                <CardDescription>
                  Full featured web dashboard for comprehensive farm management
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <img 
                  src={dashboardPreview} 
                  alt="Dashboard Preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <Button variant="hero" className="w-full">
                    Access Full Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;