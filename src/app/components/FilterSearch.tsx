import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const roles = ['הכל', 'מעצב אירועים', 'שוזר פרחים', 'צוות עיצוב אולם'];
const areas = ['הכל', 'תל אביב', 'ירושלים', 'חיפה', 'באר שבע', 'אילת'];

export default function FilterSearch() {
  const navigate = useNavigate();
  const [postType, setPostType] = useState<'all' | 'available' | 'looking'>('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [role, setRole] = useState('הכל');
  const [area, setArea] = useState('הכל');

  const handleApply = () => {
    navigate('/feed');
  };

  const handleReset = () => {
    setPostType('all');
    setDateFrom('');
    setDateTo('');
    setRole('הכל');
    setArea('הכל');
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b-2 border-gray-300 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button onClick={() => navigate('/feed')} className="text-gray-600">
            ביטול
          </button>
          <h1 className="text-xl">סינון וחיפוש</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-6">
        <div className="space-y-3">
          <Label>סוג פוסט</Label>
          <RadioGroup value={postType} onValueChange={(v) => setPostType(v as any)} className="space-y-2">
            <div className="flex items-center gap-2 border-2 border-gray-300 p-3 rounded">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="cursor-pointer flex-1">הכל</Label>
            </div>
            <div className="border-2 border-green-600 bg-green-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-1">
                <RadioGroupItem value="available" id="filter-available" />
                <Label htmlFor="filter-available" className="cursor-pointer flex-1 font-bold">פנוי</Label>
              </div>
              <p className="text-xs text-gray-600 mr-6">מחפש עבודה</p>
            </div>
            <div className="border-2 border-blue-600 bg-blue-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-1">
                <RadioGroupItem value="looking" id="filter-looking" />
                <Label htmlFor="filter-looking" className="cursor-pointer flex-1 font-bold">מחפש</Label>
              </div>
              <p className="text-xs text-gray-600 mr-6">צריך תגבור לאירוע</p>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>טווח תאריכים</Label>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="dateFrom" className="text-sm text-gray-600">מתאריך</Label>
              <Input
                id="dateFrom"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="text-right border-2 border-gray-300 [color-scheme:light]"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="dateTo" className="text-sm text-gray-600">עד תאריך</Label>
              <Input
                id="dateTo"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="text-right border-2 border-gray-300 [color-scheme:light]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">תפקיד</Label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded text-right"
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
          >
            {areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        <div className="space-y-3 pt-4">
          <Button onClick={handleApply} className="w-full bg-blue-600 text-white border-2 border-blue-600">
            החל סינון
          </Button>
          <Button onClick={handleReset} variant="outline" className="w-full border-2 border-gray-300">
            איפוס
          </Button>
        </div>
      </main>
    </div>
  );
}