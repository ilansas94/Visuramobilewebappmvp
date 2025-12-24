import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import MainFeed from './components/MainFeed';
import CreatePost from './components/CreatePost';
import FilterSearch from './components/FilterSearch';
import Messages from './components/Messages';
import Chat from './components/Chat';
import MyProfile from './components/MyProfile';
import EditProfile from './components/EditProfile';
import UserProfile from './components/UserProfile';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/register" element={<Register onRegister={() => setIsAuthenticated(true)} />} />
          
          {isAuthenticated ? (
            <>
              <Route path="/feed" element={<MainFeed />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/filter" element={<FilterSearch />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/messages/:id" element={<Chat />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/profile/:userId" element={<UserProfile />} />
              <Route path="/" element={<Navigate to="/feed" replace />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </HashRouter>
    </div>
  );
}