import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const roles = ['מעצב אירועים', 'שוזר פרחים', 'צוות עיצוב אולם'];
const areas = ['תל אביב', 'ירושלים', 'חיפה', 'באר שבע', 'אילת'];

export default function EditProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState('שם המשתמש');
  const [role, setRole] = useState('מעצב אירועים');
  const [area, setArea] = useState('תל אביב');
  const [bio, setBio] = useState('מעצב אירועים מקצועי עם 10 שנות ניסיון');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b-2 border-gray-300 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button onClick={() => navigate('/profile')} className="text-gray-600">
            ביטול
          </button>
          <h1 className="text-xl">עריכת פרופיל</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4">
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
            <Label htmlFor="role">תפקיד</Label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded text-right"
              required
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">אזור</Label>
            <select
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded text-right"
              required
            >
              {areas.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">תיאור</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="text-right border-2 border-gray-300 min-h-24"
              placeholder="ספר על עצמך..."
            />
          </div>

          <div className="space-y-2">
            <Label>תמונות עבודות</Label>
            <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center">
              <p className="text-gray-500">לחץ להוספת תמונות</p>
              <p className="text-sm text-gray-400 mt-1">(אופציונלי)</p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 text-white border-2 border-blue-600">
            שמור שינויים
          </Button>
        </form>
      </main>
    </div>
  );
}