import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReferralCard from "@/components/ReferralCard";

const Referrals = () => {
  const navigate = useNavigate();

  // Mock referral data
  const referralData = {
    referralCode: "FARM2024XY",
    totalReferred: 8,
    totalEarned: 40,
    referredFarmers: [
      {
        name: "John Kamau",
        phone: "+254-712-345-678",
        joinDate: "Jan 15, 2024",
        reward: 5
      },
      {
        name: "Mary Wanjiku",
        phone: "+254-723-456-789", 
        joinDate: "Jan 12, 2024",
        reward: 5
      },
      {
        name: "Peter Mwangi",
        phone: "+254-734-567-890",
        joinDate: "Jan 10, 2024",
        reward: 5
      },
      {
        name: "Grace Nyambura",
        phone: "+254-745-678-901",
        joinDate: "Jan 08, 2024",
        reward: 5
      },
      {
        name: "Samuel Kiprotich",
        phone: "+254-756-789-012",
        joinDate: "Jan 05, 2024",
        reward: 5
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Referral Program</h1>
            <p className="text-muted-foreground">Invite farmers and earn rewards together</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ReferralCard data={referralData} />
        </div>
      </div>
    </div>
  );
};

export default Referrals;