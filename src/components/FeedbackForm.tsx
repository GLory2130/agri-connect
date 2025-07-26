import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Star, Gift, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FeedbackFormProps {
  requestId: string;
  serviceName: string;
  onSubmitSuccess?: () => void;
}

const FeedbackForm = ({ requestId, serviceName, onSubmitSuccess }: FeedbackFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Trigger airtime reward
    toast({
      title: "Feedback Submitted! 🎉",
      description: "Thank you! $2 airtime has been sent to your phone.",
    });

    onSubmitSuccess?.();
  };

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardContent className="p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-agricultural/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-agricultural" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Feedback Submitted Successfully!
          </h3>
          <p className="text-muted-foreground mb-4">
            Thank you for rating our service. Your airtime reward has been processed.
          </p>
          <Badge variant="secondary" className="bg-agricultural/10 text-agricultural border-agricultural/20">
            <Gift className="h-3 w-3 mr-1" />
            $2 Airtime Reward Sent
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-card border-0 shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-wheat" />
          Rate Your Experience
        </CardTitle>
        <CardDescription>
          How was the {serviceName} service for request {requestId}?
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Star Rating */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">Tap stars to rate:</p>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="p-1 transition-transform hover:scale-110"
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  className={`h-8 w-8 transition-colors ${
                    star <= (hoveredRating || rating)
                      ? "fill-wheat text-wheat"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-foreground">
              {rating === 1 && "Poor"}
              {rating === 2 && "Fair"}
              {rating === 3 && "Good"}
              {rating === 4 && "Very Good"}
              {rating === 5 && "Excellent"}
            </p>
          )}
        </div>

        {/* Comment */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Additional Comments (Optional)
          </label>
          <Textarea
            placeholder="Tell us about your experience with the drone service..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-20"
          />
        </div>

        {/* Reward Info */}
        <div className="bg-agricultural/5 border border-agricultural/20 rounded-lg p-4">
          <div className="flex items-center gap-2 text-agricultural">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-medium">Reward: $2 Airtime</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Submit your feedback to receive instant airtime credit
          </p>
        </div>

        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting || rating === 0}
          className="w-full"
          variant="agricultural"
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback & Get Airtime"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;