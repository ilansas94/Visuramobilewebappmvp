import { useNavigate, useParams } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';

const mockUserProfile = {
  name: 'יעל כהן',
  role: 'מעצב אירועים',
  area: 'תל אביב',
  bio: 'מעצבת אירועים עם התמחות בחתונות מיוחדות ואירועי גן. 7 שנות ניסיון בתחום.',
  workPhotos: [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
    'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400'
  ]
};

export default function UserProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b-2 border-gray-300 p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 max-w-2xl mx-auto">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl">פרופיל</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-4">
        <Card className="p-4 border-2 border-gray-300">
          <div className="space-y-3">
            <h2 className="text-2xl">{mockUserProfile.name}</h2>
            <div className="flex gap-2 text-sm">
              <span className="px-3 py-1 bg-gray-200 border-2 border-gray-400 rounded">
                {mockUserProfile.role}
              </span>
              <span className="px-3 py-1 bg-gray-200 border-2 border-gray-400 rounded">
                {mockUserProfile.area}
              </span>
            </div>
            <p className="text-gray-700">{mockUserProfile.bio}</p>
          </div>
        </Card>

        <div>
          <h3 className="text-xl mb-3">תמונות עבודות</h3>
          <div className="grid grid-cols-2 gap-3">
            {mockUserProfile.workPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square border-2 border-gray-300 rounded overflow-hidden"
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
          onClick={() => navigate(`/messages/${userId}`)}
          className="w-full bg-black text-white border-2 border-black"
        >
          שלח הודעה
        </Button>
      </main>
    </div>
  );
}
