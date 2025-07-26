import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Plane, 
  AlertTriangle, 
  Star, 
  Gift, 
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";

const AdminStats = () => {
  const stats = [
    {
      title: "Total Farmers",
      value: "1,247",
      change: "+12%",
      icon: <Users className="h-5 w-5 text-agricultural" />,
      trend: "up"
    },
    {
      title: "Drone Requests",
      value: "856",
      change: "+23%", 
      icon: <Plane className="h-5 w-5 text-sky" />,
      trend: "up"
    },
    {
      title: "Pending Issues",
      value: "14",
      change: "-8%",
      icon: <AlertTriangle className="h-5 w-5 text-destructive" />,
      trend: "down"
    },
    {
      title: "Avg Rating",
      value: "4.7",
      change: "+0.2",
      icon: <Star className="h-5 w-5 text-wheat" />,
      trend: "up"
    },
    {
      title: "Airtime Rewards",
      value: "$2,840",
      change: "+45%",
      icon: <Gift className="h-5 w-5 text-agricultural" />,
      trend: "up"
    },
    {
      title: "Success Rate",
      value: "96.8%",
      change: "+1.2%",
      icon: <CheckCircle className="h-5 w-5 text-agricultural" />,
      trend: "up"
    }
  ];

  const recentActivity = [
    {
      type: "feedback",
      message: "New 5-star rating from John Kamau",
      time: "2 minutes ago",
      status: "positive"
    },
    {
      type: "request",
      message: "Drone request DR-123 completed",
      time: "15 minutes ago", 
      status: "completed"
    },
    {
      type: "issue",
      message: "Issue reported for request DR-121",
      time: "32 minutes ago",
      status: "warning"
    },
    {
      type: "registration",
      message: "New farmer registration: Mary Wanjiku",
      time: "1 hour ago",
      status: "positive"
    },
    {
      type: "reward",
      message: "Airtime reward sent: $5 to +254-712-345-678",
      time: "2 hours ago",
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "positive": return "bg-agricultural/10 text-agricultural border-agricultural/20";
      case "completed": return "bg-sky/10 text-sky border-sky/20";
      case "warning": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-accent rounded-lg">
                  {stat.icon}
                </div>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    stat.trend === "up" 
                      ? "bg-agricultural/10 text-agricultural border-agricultural/20" 
                      : "bg-sky/10 text-sky border-sky/20"
                  }`}
                >
                  {stat.change}
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

      {/* Rating Distribution */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-wheat" />
              Rating Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => {
              const percentage = rating === 5 ? 68 : rating === 4 ? 22 : rating === 3 ? 8 : rating === 2 ? 2 : 0;
              return (
                <div key={rating} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12">
                    <span className="text-sm font-medium">{rating}</span>
                    <Star className="h-3 w-3 fill-wheat text-wheat" />
                  </div>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-wheat h-2 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12">{percentage}%</span>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-sky" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest system events and actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                <div className="w-2 h-2 bg-agricultural rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="secondary" className={`text-xs ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminStats;