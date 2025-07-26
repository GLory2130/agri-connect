import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Star, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FeedbackForm from "@/components/FeedbackForm";

const Feedback = () => {
  const navigate = useNavigate();
  const [selectedRequest, setSelectedRequest] = useState<string>("");
  
  // Mock completed requests
  const completedRequests = [
    {
      id: "DR-001",
      service: "Pesticide Spraying",
      plot: "North Field A",
      completedDate: "2024-01-15",
      hasRating: false
    },
    {
      id: "DR-002",
      service: "Fertilizer Application", 
      plot: "South Field B",
      completedDate: "2024-01-12",
      hasRating: true,
      rating: 5
    },
    {
      id: "DR-005",
      service: "Crop Health Scan",
      plot: "West Field D",
      completedDate: "2024-01-10",
      hasRating: false
    }
  ];

  const selectedRequestData = completedRequests.find(req => req.id === selectedRequest);

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Feedback & Ratings</h1>
            <p className="text-muted-foreground">Rate completed services and earn airtime rewards</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Request Selection */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-agricultural" />
                  Select Completed Service
                </CardTitle>
                <CardDescription>
                  Choose a completed drone service to rate and review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedRequest} onValueChange={setSelectedRequest}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a completed request..." />
                  </SelectTrigger>
                  <SelectContent>
                    {completedRequests.map((request) => (
                      <SelectItem key={request.id} value={request.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{request.id} - {request.service}</span>
                          {request.hasRating && (
                            <div className="flex items-center gap-1 ml-2">
                              <Star className="h-3 w-3 fill-wheat text-wheat" />
                              <span className="text-xs">{request.rating}</span>
                            </div>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Feedback Form */}
            {selectedRequestData && !selectedRequestData.hasRating && (
              <FeedbackForm
                requestId={selectedRequestData.id}
                serviceName={selectedRequestData.service}
                onSubmitSuccess={() => {
                  // Refresh or update the data
                  setSelectedRequest("");
                }}
              />
            )}

            {/* Already Rated */}
            {selectedRequestData && selectedRequestData.hasRating && (
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-wheat/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-wheat" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Already Rated
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    You've already provided feedback for this service
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 ${
                          star <= (selectedRequestData.rating || 0)
                            ? "fill-wheat text-wheat"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rated {selectedRequestData.rating} out of 5 stars
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rewards Summary */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Feedback Rewards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-agricultural">$12</p>
                  <p className="text-sm text-muted-foreground">Total Earned</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Ratings submitted:</span>
                    <span className="font-medium">6</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Reward per rating:</span>
                    <span className="font-medium">$2</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rating Guidelines */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Rating Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-wheat text-wheat" />
                  <span className="font-medium">5 Stars:</span>
                  <span className="text-muted-foreground">Excellent service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-wheat text-wheat" />
                  <span className="font-medium">4 Stars:</span>
                  <span className="text-muted-foreground">Very good</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-wheat text-wheat" />
                  <span className="font-medium">3 Stars:</span>
                  <span className="text-muted-foreground">Good</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">2 Stars:</span>
                  <span className="text-muted-foreground">Fair</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">1 Star:</span>
                  <span className="text-muted-foreground">Poor</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;