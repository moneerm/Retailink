import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Send } from 'lucide-react';

type Message = {
  id: number;
  sender: string;
  recipient: string;
  content: string;
  timestamp: Date;
};

const MessagingPage: React.FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'Fashion Forward', recipient: 'Trendy Boutique', content: 'Hello! How can I help you today?', timestamp: new Date('2024-03-15T10:00:00') },
    { id: 2, sender: 'Trendy Boutique', recipient: 'Fashion Forward', content: 'I\'m interested in your summer collection. Can you provide more details?', timestamp: new Date('2024-03-15T10:05:00') },
    { id: 3, sender: 'Fashion Forward', recipient: 'Trendy Boutique', content: 'Certainly! Our summer collection features lightweight fabrics and vibrant colors. Would you like to see our catalog?', timestamp: new Date('2024-03-15T10:10:00') },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message: Message = {
        id: messages.length + 1,
        sender: user?.role === 'brand' ? 'Fashion Forward' : 'Trendy Boutique',
        recipient: user?.role === 'brand' ? 'Trendy Boutique' : 'Fashion Forward',
        content: newMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="h-96 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === (user?.role === 'brand' ? 'Fashion Forward' : 'Trendy Boutique') ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.sender === (user?.role === 'brand' ? 'Fashion Forward' : 'Trendy Boutique')
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p className="font-semibold">{message.sender}</p>
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-75">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow mr-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;