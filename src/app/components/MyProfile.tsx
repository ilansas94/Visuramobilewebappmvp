import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import BottomNav from './BottomNav';

const mockProfile = {
  name: 'שם המשתמש',
  role: 'מעצב אירועים',
  area: 'תל אביב',
  bio: 'מעצב אירועים מקצועי עם 10 שנות ניסיון בעיצוב חתונות ואירועים פרטיים',
  workPhotos: [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
    'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400'
  ]
};

export default function MyProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">
      <header className="bg-white border-b-2 border-gray-300 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <h1 className="text-2xl">הפרופיל שלי</h1>
          <button
            onClick={() => navigate('/profile/edit')}
            className="text-gray-600 underline"
          >
            ערוך
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-4">
        <Card className="p-4">
          <div className="space-y-3">
            <h2 className="text-2xl">{mockProfile.name}</h2>
            <div className="flex gap-2 text-sm">
              <span className="px-3 py-1 bg-gray-200 rounded">
                {mockProfile.role}
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded">
                {mockProfile.area}
              </span>
            </div>
            <p className="text-gray-700">{mockProfile.bio}</p>
          </div>
        </Card>

        <div>
          <h3 className="text-xl mb-3">תמונות עבודות</h3>
          <div className="grid grid-cols-2 gap-3">
            {mockProfile.workPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded overflow-hidden"
              >
                <img
                  src={photo}
                  alt={`עבודה ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={() => navigate('/login')}
          variant="outline"
          className="w-full border-2 border-gray-300"
        >
          התנתק
        </Button>
      </main>

      <BottomNav />
    </div>
  );
}