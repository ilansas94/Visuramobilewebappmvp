import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface Message {
  id: string;
  text: string;
  sent: boolean;
  time: string;
}

const mockMessages: Message[] = [
  { id: '1', text: 'שלום, ראיתי את הפוסט שלך', sent: false, time: '10:00' },
  { id: '2', text: 'היי, איך אפשר לעזור?', sent: true, time: '10:05' },
  { id: '3', text: 'אני מחפש מעצב אירועים לתאריך 15/01', sent: false, time: '10:07' },
  { id: '4', text: 'כן, אני פנוי באותו תאריך', sent: true, time: '10:10' }
];

export default function Chat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b-2 border-gray-300 p-4">
        <div className="flex items-center gap-3 max-w-2xl mx-auto">
          <button onClick={() => navigate('/messages')} className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl">יעל כהן</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-gray-50 p-4 max-w-2xl mx-auto w-full">
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sent ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[70%] p-3 rounded border-2 ${
                  message.sent
                    ? 'bg-white border-gray-300'
                    : 'bg-gray-200 border-gray-400'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs text-gray-500 mt-1">{message.time}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="bg-white border-t-2 border-gray-300 p-4">
        <div className="flex gap-2 max-w-2xl mx-auto">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="כתוב הודעה..."
            className="flex-1 text-right border-2 border-gray-300"
          />
          <Button
            onClick={handleSend}
            className="bg-blue-600 text-white border-2 border-blue-600 px-6"
          >
            שלח
          </Button>
        </div>
      </div>
    </div>
  );
}