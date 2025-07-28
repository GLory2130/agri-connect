import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
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
      // Replace with your API endpoint
      const res = await fetch("https://your-api.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Login failed");
      // You may want to store the token here
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Login error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-sky">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Farmer Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
            <div className="text-sm text-center mt-2">
              Don't have an account? <a href="/register" className="text-blue-600 underline">Register</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;