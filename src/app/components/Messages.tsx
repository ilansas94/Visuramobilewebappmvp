import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import BottomNav from './BottomNav';

interface Conversation {
  id: string;
  userName: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: '1',
    userName: 'יעל כהן',
    lastMessage: 'תודה על העדכון, נדבר בהמשך',
    time: '10:30',
    unread: true
  },
  {
    id: '2',
    userName: 'דוד לוי',
    lastMessage: 'האם אתה פנוי ב-20/01?',
    time: 'אתמול',
    unread: false
  },
  {
    id: '3',
    userName: 'מיכל אברהם',
    lastMessage: 'נשמע מעולה, בואו נתאם פגישה',
    time: '12/12',
    unread: false
  }
];

export default function Messages() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">
      <header className="bg-white border-b-2 border-gray-300 p-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl">הודעות</h1>
          <p className="text-sm text-gray-400 mt-1">כאן מתנהלות שיחות עבודה</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto">
        {mockConversations.map((conv) => (
          <Card
            key={conv.id}
            onClick={() => navigate(`/messages/${conv.id}`)}
            className="p-4 border-b-2 border-gray-300 rounded-none cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={conv.unread ? 'font-bold' : ''}>{conv.userName}</h3>
                  {conv.unread && (
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  )}
                </div>
                <p className={`text-sm ${conv.unread ? 'text-black' : 'text-gray-600'}`}>
                  {conv.lastMessage}
                </p>
              </div>
              <div className="text-sm text-gray-500 mr-4">{conv.time}</div>
            </div>
          </Card>
        ))}
      </main>

      <BottomNav />
    </div>
  );
}