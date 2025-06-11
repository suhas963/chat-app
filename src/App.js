import React, { useState } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import ChatWindow from './components/ChatWindow';

const initialFriends = ['kiran', 'Sandesh', 'Akash'];

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [chats, setChats] = useState({});

  const handleSendMessage = (message) => {
    if (!selectedFriend || !message) return;
    setChats((prevChats) => ({
      ...prevChats,
      [selectedFriend]: [...(prevChats[selectedFriend] || []), { text: message, sender: 'You' }],
    }));
  };

  return (
    <div className="app-container">
      <FriendList
        friends={initialFriends}
        selectedFriend={selectedFriend}
        onSelectFriend={setSelectedFriend}
      />
      <ChatWindow
        friend={selectedFriend}
        messages={chats[selectedFriend] || []}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;
