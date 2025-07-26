import { Plane, Smartphone, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AgriConnect</h3>
                <p className="text-sm text-background/70">Drone Hub</p>
              </div>
            </div>
            <p className="text-background/70">
              Empowering farmers with smart drone services for sustainable and efficient agriculture.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li>Fertilizer Spraying</li>
              <li>Pesticide Application</li>
              <li>Irrigation Monitoring</li>
              <li>Crop Health Analysis</li>
            </ul>
          </div>

          {/* Access Methods */}
          <div>
            <h4 className="font-semibold mb-4">Access AgriConnect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/70">
                <Smartphone className="h-4 w-4" />
                <span>USSD: *123#</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <MessageSquare className="h-4 w-4" />
                <span>SMS: Text DRONE</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span>IVR: 1-800-AGRI</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4" />
                <span>support@agriconnect.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4" />
                <span>Agricultural Tech Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 AgriConnect Drone Hub. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;