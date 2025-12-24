import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate("/feed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl mb-2 flex flex-col items-center justify-center gap-2">
            <img
              src="https://i.imgur.com/QRhk5u0.png"
              alt="Visura logo"
              className="w-20 h-20 object-contain"
            />
            Visura
          </h1>
          <p className="text-gray-600">
            כלי עבודה מקצועי לתעשיית האירועים
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">אימייל</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-right border-2 border-gray-300 text-gray-900"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">סיסמה</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-right border-2 border-gray-300"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            התחבר
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-gray-600 underline"
            >
              עדיין אין לך חשבון? הירשם כאן
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}