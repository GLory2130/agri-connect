import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, MessageSquare, Phone } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Smart Farming
              <span className="block text-transparent bg-gradient-to-r from-agricultural to-sky bg-clip-text">
                Drone Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Revolutionize your farming with AI-powered drone services. 
              Request, track, and manage drone operations through USSD, SMS, or our web platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button variant="hero" size="lg" className="text-lg">
                Start Farming Smart
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>

            {/* Access Methods */}
            <div className="pt-12">
              <p className="text-white/80 text-sm mb-6">Access AgriConnect through:</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Smartphone className="h-5 w-5 text-agricultural" />
                  <span className="text-white font-medium">USSD: *123#</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <MessageSquare className="h-5 w-5 text-sky" />
                  <span className="text-white font-medium">SMS: Text DRONE</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Phone className="h-5 w-5 text-wheat" />
                  <span className="text-white font-medium">IVR: Call 1-800-AGRI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;