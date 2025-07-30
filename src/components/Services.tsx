import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sprout, Droplets, Bug, BarChart3, MapPin, Clock, Star } from "lucide-react";

const apiUrl = import.meta.env.VITE_API_URL;

const Services = () => {
  
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [requestForm, setRequestForm] = useState({
    name: "",
    phone_number: "",
    email: "",
    number_of_drones: 1,
    drone_type: "",
    service_type: "",
    location: ""
  });
  const [requestLoading, setRequestLoading] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [showPayModal, setShowPayModal] = useState(false);
  const [payForm, setPayForm] = useState({
    buyer_name: "",
    buyer_email: "",
    buyer_phone: "",
    amount: "",
    extra_data: ""
  });
  const [payLoading, setPayLoading] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);
  const [payStatus, setPayStatus] = useState<null | { order_id: string; status: string; paid: boolean }>(null);
  const [showPlotModal, setShowPlotModal] = useState(false);
  const [plotForm, setPlotForm] = useState({
    user_id: "",
    drone_id: "",
    // add other fields as needed
  });
  const [plotLoading, setPlotLoading] = useState(false);
  const [plotError, setPlotError] = useState<string | null>(null);
  const [plotSuccess, setPlotSuccess] = useState<string | null>(null);

  const services = [
    {
      icon: <Sprout className="h-8 w-8 text-agricultural" />,
      title: "Request Drone",
      description: "Order a drone for your farm activities such as spraying, monitoring, or analysis.",
      features: ["Easy booking", "Flexible scheduling", "Multiple drone types"],
      price: "From $25/service"
    },
    {
      icon: <Clock className="h-8 w-8 text-sky" />,
      title: "Check Drone Status",
      description: "Track the status of your requested drone in real-time from dispatch to completion.",
      features: ["Live tracking", "Status notifications", "ETA updates"],
      price: "Free"
    },
    {
      icon: <Bug className="h-8 w-8 text-destructive" />,
      title: "Report Issue",
      description: "Report any issues or malfunctions with your drone service for quick resolution.",
      features: ["Quick reporting", "Support follow-up", "Service recovery"],
      price: "Free"
    },
    {
      icon: <Star className="h-8 w-8 text-wheat" />,
      title: "Feedback & Rating",
      description: "Rate your drone service experience and help us improve our offerings.",
      features: ["Easy feedback", "Earn rewards", "Service improvement"],
      price: "Earn rewards"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-agricultural" />,
      title: "Refer Farmer",
      description: "Refer another farmer and both of you earn rewards when they use our services.",
      features: ["Referral rewards", "Easy sharing", "Grow the community"],
      price: "Earn rewards"
    },
    {
      icon: <Droplets className="h-8 w-8 text-sky" />,
      title: "Irrigation Advisory",
      description: "Get expert advice on optimal irrigation schedules and water usage for your crops.",
      features: ["Water-saving tips", "Custom schedules", "Soil moisture analysis"],
      price: "From $10/advisory"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-wheat" />,
      title: "Yield Prediction",
      description: "Receive AI-powered predictions for your expected crop yield based on current data.",
      features: ["AI analysis", "Historical trends", "Actionable insights"],
      price: "From $15/field"
    },
    {
      icon: <Sprout className="h-8 w-8 text-agricultural" />,
      title: "Soil Health Check",
      description: "Request a soil health check to optimize your farm’s productivity and sustainability.",
      features: ["Nutrient analysis", "Soil quality report", "Fertilizer recommendations"],
      price: "From $12/plot"
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

  // Handle drone request form submission
  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestLoading(true);
    setRequestError(null);
    setMessage(null);
    try {
      const res = await fetch(`${apiUrl}/drones/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestForm),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Drone request failed");
      }
      setShowModal(false);
      setMessage("Drone request sent! You will receive a confirmation soon.");
      setRequestForm({
        name: "",
        phone_number: "",
        email: "",
        number_of_drones: 1,
        drone_type: "",
        service_type: "",
        location: ""
      });
    } catch (err: any) {
      setRequestError(err.message || "Failed to request drone.");
    } finally {
      setRequestLoading(false);
    }
  };

  // Payment submit handler
  const handlePaySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPayLoading(true);
    setPayError(null);
    setPayStatus(null);
    try {
      const res = await fetch(`${apiUrl}/payments/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payForm),
      });
      if (!res.ok) throw new Error("Payment initiation failed");
      const data = await res.json();
      setPayStatus(data);
      // Optionally, poll for payment status here
    } catch (err: any) {
      setPayError(err.message || "Payment error");
    } finally {
      setPayLoading(false);
    }
  };

  // Optionally, add a function to poll payment status
  const checkPaymentStatus = async (order_id: string) => {
    try {
      const res = await fetch(`${apiUrl}/payments/status/${order_id}`);
      if (!res.ok) throw new Error("Failed to check payment status");
      const data = await res.json();
      setPayStatus(data);
    } catch (err: any) {
      setPayError(err.message || "Status check error");
    }
  };

  // Plot submit handler
  const handlePlotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPlotLoading(true);
    setPlotError(null);
    setPlotSuccess(null);
    try {
      const res = await fetch(`${apiUrl}/plots`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plotForm),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Plot creation failed");
      }
      setShowPlotModal(false);
      setPlotSuccess("Plot created successfully!");
      setPlotForm({ user_id: "", drone_id: "" });
    } catch (err: any) {
      setPlotError(err.message || "Failed to create plot.");
    } finally {
      setPlotLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
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
                  <div className="pt-4 border-t border-border flex flex-col gap-2">
                    <p className="text-lg font-semibold text-primary mb-3">{service.price}</p>
                    <Button
                      variant="agricultural"
                      className="w-full"
                      onClick={() => setShowModal(true)}
                    >
                      Request Service
                    </Button>
                    <Button
                      variant="agricultural"
                      className="w-full"
                      onClick={() => setShowPayModal(true)}
                    >
                      Pay Now
                    </Button>
                    <Button
                      variant="agricultural"
                      className="w-full"
                      onClick={() => setShowPlotModal(true)}
                    >
                      Create Plot
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {message && (
            <div className="text-center text-lg text-primary font-semibold my-4">{message}</div>
          )}
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
        {/* Modal for Request Drone */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-xl"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4">Request Drone Service</h2>
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={requestForm.name}
                  onChange={e => setRequestForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
                <Input
                  name="phone_number"
                  placeholder="Phone Number"
                  value={requestForm.phone_number}
                  onChange={e => setRequestForm(f => ({ ...f, phone_number: e.target.value }))}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={requestForm.email}
                  onChange={e => setRequestForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
                <Input
                  name="number_of_drones"
                  type="number"
                  min={1}
                  placeholder="Number of Drones"
                  value={requestForm.number_of_drones}
                  onChange={e => setRequestForm(f => ({ ...f, number_of_drones: Number(e.target.value) }))}
                  required
                />
                <Input
                  name="drone_type"
                  placeholder="Drone Type"
                  value={requestForm.drone_type}
                  onChange={e => setRequestForm(f => ({ ...f, drone_type: e.target.value }))}
                  required
                />
                <Input
                  name="service_type"
                  placeholder="Service Type (e.g. spraying, monitoring)"
                  value={requestForm.service_type}
                  onChange={e => setRequestForm(f => ({ ...f, service_type: e.target.value }))}
                  required
                />
                <Input
                  name="location"
                  placeholder="Farm Location"
                  value={requestForm.location}
                  onChange={e => setRequestForm(f => ({ ...f, location: e.target.value }))}
                  required
                />
                {requestError && <div className="text-red-500 text-sm">{requestError}</div>}
                <Button type="submit" className="w-full" disabled={requestLoading}>
                  {requestLoading ? "Requesting..." : "Submit Request"}
                </Button>
              </form>
            </div>
          </div>
        )}
        {/* Payment Modal */}
        {showPayModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-xl"
                onClick={() => {
                  setShowPayModal(false);
                  setPayStatus(null);
                  setPayError(null);
                }}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
              <form onSubmit={handlePaySubmit} className="space-y-4">
                <Input
                  name="buyer_name"
                  placeholder="Full Name"
                  value={payForm.buyer_name}
                  onChange={e => setPayForm(f => ({ ...f, buyer_name: e.target.value }))}
                  required
                />
                <Input
                  name="buyer_email"
                  type="email"
                  placeholder="Email"
                  value={payForm.buyer_email}
                  onChange={e => setPayForm(f => ({ ...f, buyer_email: e.target.value }))}
                  required
                />
                <Input
                  name="buyer_phone"
                  placeholder="Phone Number"
                  value={payForm.buyer_phone}
                  onChange={e => setPayForm(f => ({ ...f, buyer_phone: e.target.value }))}
                  required
                />
                <Input
                  name="amount"
                  type="number"
                  placeholder="Amount"
                  value={payForm.amount}
                  onChange={e => setPayForm(f => ({ ...f, amount: e.target.value }))}
                  required
                />
                <Input
                  name="extra_data"
                  placeholder="Extra Data (optional)"
                  value={payForm.extra_data}
                  onChange={e => setPayForm(f => ({ ...f, extra_data: e.target.value }))}
                />
                {payError && <div className="text-red-500 text-sm">{payError}</div>}
                <Button type="submit" className="w-full" disabled={payLoading}>
                  {payLoading ? "Processing..." : "Pay Now"}
                </Button>
              </form>
              {payStatus && (
                <div className="mt-4 p-4 rounded-lg bg-green-50 text-green-800">
                  <p className="text-sm font-semibold">Payment Status: {payStatus.status}</p>
                  <p className="text-xs">Order ID: {payStatus.order_id}</p>
                  <p className="text-xs">{payStatus.paid ? "Payment has been received." : "Payment not received."}</p>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Modal for Create Plot */}
        {showPlotModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-xl"
                onClick={() => setShowPlotModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4">Create Plot</h2>
              <form onSubmit={handlePlotSubmit} className="space-y-4">
                <Input
                  name="user_id"
                  placeholder="User ID"
                  value={plotForm.user_id}
                  onChange={e => setPlotForm(f => ({ ...f, user_id: e.target.value }))}
                  required
                />
                <Input
                  name="drone_id"
                  placeholder="Drone ID"
                  value={plotForm.drone_id}
                  onChange={e => setPlotForm(f => ({ ...f, drone_id: e.target.value }))}
                  required
                />
                {/* Add more fields as needed */}
                {plotError && <div className="text-red-500 text-sm">{plotError}</div>}
                <Button type="submit" className="w-full" disabled={plotLoading}>
                  {plotLoading ? "Creating..." : "Create Plot"}
                </Button>
              </form>
            </div>
          </div>
        )}
        {plotSuccess && (
          <div className="text-center text-green-600 font-semibold my-4">{plotSuccess}</div>
        )}
        {/* Floating Call Support Button */}
        <a
          href="https://developers.africastalking.com/simulator"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 1000,
            textDecoration: "none"
          }}
        >
          <Button
            variant="hero"
            className="rounded-full shadow-lg px-6 py-3 text-lg"
            style={{ background: "#1e293b", color: "#fff" }}
          >
            📞 Call Support
          </Button>
        </a>
      </section>
    </div>
  );
};

export default Services;