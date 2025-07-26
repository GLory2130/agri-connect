import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-gradient-hero rounded-lg">
            <Plane className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">AgriConnect</h1>
            <p className="text-xs text-muted-foreground">Drone Hub</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <Link to="/feedback" className="text-foreground hover:text-primary transition-colors">
            Feedback
          </Link>
          <Link to="/referrals" className="text-foreground hover:text-primary transition-colors">
            Referrals
          </Link>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Support
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;