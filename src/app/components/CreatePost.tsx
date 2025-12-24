import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import BottomNav from './BottomNav';

const roles = ['מעצב אירועים', 'שוזר פרחים', 'צוות עיצוב אולם'];
const areas = ['תל אביב', 'ירושלים', 'חיפה', 'באר שבע', 'אילת'];

export default function CreatePost() {
  const navigate = useNavigate();
  const [postType, setPostType] = useState<'available' | 'looking'>('available');
  const [date, setDate] = useState('');
  const [role, setRole] = useState('');
  const [area, setArea] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/feed');
  };

  return (
    <div className="min-h-screen pb-20">
      <header className="bg-white border-b-2 border-gray-300 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button onClick={() => navigate('/feed')} className="text-gray-600">
            ביטול
          </button>
          <h1 className="text-xl">יצירת פוסט</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <RadioGroup value={postType} onValueChange={(v) => setPostType(v as 'available' | 'looking')} className="flex gap-3">
            <div className="flex-1 border-2 border-green-600 bg-green-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-1">
                <RadioGroupItem value="available" id="available" />
                <Label htmlFor="available" className="cursor-pointer flex-1 font-bold">פנוי</Label>
              </div>
              <p className="text-xs text-gray-600 mr-6">מחפש עבודה</p>
            </div>
            <div className="flex-1 border-2 border-blue-600 bg-blue-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-1">
                <RadioGroupItem value="looking" id="looking" />
                <Label htmlFor="looking" className="cursor-pointer flex-1 font-bold">מחפש</Label>
              </div>
              <p className="text-xs text-gray-600 mr-6">צריך תגבור לאירוע</p>
            </div>
          </RadioGroup>

          <div className="space-y-2">
            <Label htmlFor="date">תאריך <span className="text-red-600">*</span></Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-right border-2 border-red-600"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">תפקיד *</Label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded text-right"
              required
            >
              <option value="">בחר תפקיד</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">אזור *</Label>
            <select
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded text-right"
              required
            >
              <option value="">בחר אזור</option>
              {areas.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="note">הערה</Label>
            <Textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="text-right border-2 border-gray-300 min-h-24"
              placeholder="פרטים חשובים (שעות, הגעה, ציוד…)"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 text-white border-2 border-blue-600">
            פרסם
          </Button>
        </form>
      </main>

      <BottomNav />
    </div>
  );
}