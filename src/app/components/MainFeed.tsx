import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import BottomNav from './BottomNav';

interface Post {
  id: string;
  type: 'available' | 'looking';
  date: string;
  role: string;
  area: string;
  note: string;
  userName: string;
  userId: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    type: 'available',
    date: '15/01/2025',
    role: 'מעצב אירועים',
    area: 'תל אביב',
    note: 'זמין לאירועים קטנים ובינוניים',
    userName: 'יעל כהן',
    userId: 'user1'
  },
  {
    id: '2',
    type: 'looking',
    date: '20/01/2025',
    role: 'שוזר פרחים',
    area: 'ירושלים',
    note: 'מחפש שוזר פרחים לחתונה',
    userName: 'דוד לוי',
    userId: 'user2'
  },
  {
    id: '3',
    type: 'available',
    date: '25/01/2025',
    role: 'צוות עיצוב אולם',
    area: 'חיפה',
    note: 'צוות מקצועי, 5 שנות ניסיון',
    userName: 'מיכל אברהם',
    userId: 'user3'
  },
  {
    id: '4',
    type: 'looking',
    date: '28/01/2025',
    role: 'מעצב אירועים',
    area: 'באר שבע',
    note: 'דרוש מעצב לאירוע קטן, 50 איש',
    userName: 'רונית שטרן',
    userId: 'user4'
  },
  {
    id: '5',
    type: 'available',
    date: '30/01/2025',
    role: 'שוזר פרחים',
    area: 'תל אביב',
    note: 'מתמחה בשזירה מודרנית',
    userName: 'עמית רוזן',
    userId: 'user5'
  },
  {
    id: '6',
    type: 'available',
    date: '02/02/2025',
    role: 'צוות עיצוב אולם',
    area: 'נתניה',
    note: 'צוות של 4 אנשים, זמינו לסופ״ש',
    userName: 'גל ברקן',
    userId: 'user6'
  },
  {
    id: '7',
    type: 'looking',
    date: '05/02/2025',
    role: 'צוות עיצוב אולם',
    area: 'הרצליה',
    note: 'חתונה גדולה, 300 איש',
    userName: 'שרון גולן',
    userId: 'user7'
  },
  {
    id: '8',
    type: 'available',
    date: '08/02/2025',
    role: 'מעצב אירועים',
    area: 'ירושלים',
    note: 'ניסיון רב באירועי יוקרה',
    userName: 'נועה פלד',
    userId: 'user8'
  },
  {
    id: '9',
    type: 'looking',
    date: '10/02/2025',
    role: 'שוזר פרחים',
    area: 'חיפה',
    note: 'אירוע קטן במיוחד, דרוש סגנון כפרי',
    userName: 'אורי כהן',
    userId: 'user9'
  },
  {
    id: '10',
    type: 'available',
    date: '12/02/2025',
    role: 'מעצב אירועים',
    area: 'רעננה',
    note: 'מתמחה בסגנון מינימליסטי',
    userName: 'דנה לב',
    userId: 'user10'
  },
  {
    id: '11',
    type: 'looking',
    date: '15/02/2025',
    role: 'צוות עיצוב אולם',
    area: 'תל אביב',
    note: 'אירוע בוקר, התחלה 8:00',
    userName: 'מור אדרי',
    userId: 'user11'
  },
  {
    id: '12',
    type: 'available',
    date: '18/02/2025',
    role: 'שוזר פרחים',
    area: 'ראשון לציון',
    note: 'זמין גם לייעוץ מקדים',
    userName: 'תמר יוסף',
    userId: 'user12'
  }
];

export default function MainFeed() {
  const navigate = useNavigate();
  const [posts] = useState<Post[]>(mockPosts);

  return (
    <div className="min-h-screen pb-20">
      <header className="bg-white border-b-2 border-gray-300 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <h1 className="text-2xl">Visura</h1>
          <button
            onClick={() => navigate('/filter')}
            className="p-2 border-2 border-gray-300 rounded"
          >
            סינון
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="px-4 py-3 border-2 border-gray-300">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-1">
                <button
                  onClick={() => navigate(`/profile/${post.userId}`)}
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  {post.userName}
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 text-sm border-2 ${
                      post.type === 'available'
                        ? 'bg-green-100 border-green-600'
                        : 'bg-blue-100 border-blue-600'
                    }`}
                  >
                    {post.type === 'available' ? 'פנוי' : 'מחפש'}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.role}</span>
                </div>

                <div className="text-gray-600">{post.area}</div>

                {post.note && (
                  <div className="text-sm text-gray-700">{post.note}</div>
                )}
              </div>

              <Button
                onClick={() => navigate(`/messages/${post.userId}`)}
                className="w-full bg-blue-600 text-white border-2 border-blue-600"
              >
                שלח הודעה
              </Button>
            </div>
          </Card>
        ))}
      </main>

      <BottomNav />
    </div>
  );
}