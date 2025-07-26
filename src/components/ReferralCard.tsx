import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Share2, Users, Gift, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReferralData {
  referralCode: string;
  totalReferred: number;
  totalEarned: number;
  referredFarmers: Array<{
    name: string;
    phone: string;
    joinDate: string;
    reward: number;
  }>;
}

interface ReferralCardProps {
  data: ReferralData;
}

const ReferralCard = ({ data }: ReferralCardProps) => {
  const { toast } = useToast();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(data.referralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
  };

  const shareReferral = () => {
    const message = `Join AgriConnect Drone Hub with my referral code: ${data.referralCode} and get smart farming services! *123# or visit agriconnect.com`;
    
    if (navigator.share) {
      navigator.share({
        title: "AgriConnect Referral",
        text: message,
      });
    } else {
      navigator.clipboard.writeText(message);
      toast({
        title: "Share Message Copied!",
        description: "Share this message with other farmers",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Referral Code Card */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-agricultural" />
            Your Referral Code
          </CardTitle>
          <CardDescription>
            Share this code with other farmers to earn rewards
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-agricultural/5 border border-agricultural/20 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-agricultural tracking-wider">
              {data.referralCode}
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={copyReferralCode} className="flex-1">
              <Copy className="h-4 w-4 mr-2" />
              Copy Code
            </Button>
            <Button variant="agricultural" onClick={shareReferral} className="flex-1">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <div className="bg-sky/5 border border-sky/20 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sky">
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-medium">How to Share via USSD</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Tell farmers to dial *123# and enter your code: {data.referralCode}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6 text-center">
            <div className="mx-auto w-12 h-12 bg-agricultural/10 rounded-full flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-agricultural" />
            </div>
            <p className="text-2xl font-bold text-foreground">{data.totalReferred}</p>
            <p className="text-sm text-muted-foreground">Farmers Referred</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6 text-center">
            <div className="mx-auto w-12 h-12 bg-wheat/20 rounded-full flex items-center justify-center mb-3">
              <Gift className="h-6 w-6 text-wheat" />
            </div>
            <p className="text-2xl font-bold text-foreground">${data.totalEarned}</p>
            <p className="text-sm text-muted-foreground">Total Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Referred Farmers List */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-agricultural" />
            Referred Farmers
          </CardTitle>
          <CardDescription>
            Farmers who joined using your referral code
          </CardDescription>
        </CardHeader>
        <CardContent>
          {data.referredFarmers.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No referrals yet</p>
              <p className="text-sm text-muted-foreground">Share your code to start earning!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {data.referredFarmers.map((farmer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{farmer.name}</p>
                    <p className="text-sm text-muted-foreground">{farmer.phone}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-agricultural/10 text-agricultural border-agricultural/20">
                      +${farmer.reward}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{farmer.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Referral Benefits */}
      <Card className="bg-gradient-sky border-0 shadow-soft">
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Referral Benefits</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-agricultural rounded-full"></div>
              <span className="text-sm text-foreground">Earn $5 for each successful referral</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-sky rounded-full"></div>
              <span className="text-sm text-foreground">Referred farmers get $3 welcome bonus</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-wheat rounded-full"></div>
              <span className="text-sm text-foreground">Instant airtime rewards upon registration</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralCard;