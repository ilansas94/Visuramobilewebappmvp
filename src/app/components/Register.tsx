import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface RegisterProps {
  onRegister: () => void;
}

const userTypes = [
  { value: 'event-designer', label: 'מעצב אירועים' },
  { value: 'florist', label: 'שוזר פרחים' },
  { value: 'hall-team', label: 'צוות עיצוב אולם' }
];

export default function Register({ onRegister }: RegisterProps) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('event-designer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
    navigate('/feed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 border-2 border-gray-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">הרשמה ל-Visura</h1>
          <p className="text-gray-600">בחר את סוג המשתמש שלך</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">שם מלא</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-right border-2 border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">אימייל</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-right border-2 border-gray-300"
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

          <div className="space-y-3">
            <Label>סוג משתמש</Label>
            <RadioGroup value={userType} onValueChange={setUserType} className="space-y-3">
              {userTypes.map((type) => (
                <div key={type.value} className="flex items-center gap-2 border-2 border-gray-300 p-3 rounded">
                  <RadioGroupItem value={type.value} id={type.value} />
                  <Label htmlFor={type.value} className="cursor-pointer flex-1">
                    {type.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full bg-black text-white border-2 border-black">
            הירשם
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-gray-600 underline"
            >
              כבר יש לך חשבון? התחבר כאן
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
