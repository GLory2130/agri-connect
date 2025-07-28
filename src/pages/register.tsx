import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const apiUrl = import.meta.env.VITE_API_URL;

const Register = () => {
  const [form, setForm] = useState({ name: "", phone_number: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiUrl}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Registration failed");
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Registration error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-sky">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Farmer Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            <Input name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
            <div className="text-sm text-center mt-2">
              Already have an account? <a href="/login" className="text-blue-600 underline">Login</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;