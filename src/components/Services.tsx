import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Droplets, Bug, BarChart3, MapPin, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Sprout className="h-8 w-8 text-agricultural" />,
      title: "Fertilizer Spraying",
      description: "Precision fertilizer application with GPS-guided drones for optimal crop nutrition.",
      features: ["GPS precision", "Soil analysis", "Custom formulations"],
      price: "From $25/acre"
    },
    {
      icon: <Bug className="h-8 w-8 text-destructive" />,
      title: "Pesticide Application",
      description: "Targeted pest control with minimal environmental impact using smart spraying technology.",
      features: ["Targeted application", "Eco-friendly options", "Weather monitoring"],
      price: "From $30/acre"
    },
    {
      icon: <Droplets className="h-8 w-8 text-sky" />,
      title: "Irrigation Monitoring",
      description: "Monitor soil moisture and irrigation needs with thermal and multispectral imaging.",
      features: ["Moisture mapping", "Water optimization", "Real-time alerts"],
      price: "From $15/acre"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-wheat" />,
      title: "Crop Health Analysis",
      description: "Comprehensive crop health assessment using advanced imaging and AI analysis.",
      features: ["NDVI analysis", "Disease detection", "Yield prediction"],
      price: "From $20/acre"
    }
  ];

  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-agricultural" />,
      title: "GPS Plot Management",
      description: "Save and manage multiple farm plots with precise GPS coordinates"
    },
    {
      icon: <Clock className="h-6 w-6 text-sky" />,
      title: "Real-time Tracking",
      description: "Track your drone requests in real-time from dispatch to completion"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Drone Services for Every Farm Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From precision spraying to crop monitoring, our drone services help you optimize 
            your farming operations with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-agricultural transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-sage rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-agricultural rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-lg font-semibold text-primary mb-3">{service.price}</p>
                  <Button variant="agricultural" className="w-full">
                    Request Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 bg-accent rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;