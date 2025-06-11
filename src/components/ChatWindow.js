import React from 'react';
import MessageInput from './MessageInput';

function ChatWindow({ friend, messages, onSendMessage }) {
  return (
    <div className="chat-window">
      <h3>{friend ? `Chat with ${friend}` : 'Select a friend'}</h3>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      {friend && <MessageInput onSend={onSendMessage} />}
    </div>
  );
};

export default ChatWindow;