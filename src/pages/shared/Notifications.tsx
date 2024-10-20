import React, { useState } from 'react';
import { Bell, CheckCircle, AlertCircle } from 'lucide-react';

type Notification = {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning';
  date: string;
  read: boolean;
};

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "New order received from Fashion Boutique", type: "info", date: "2024-03-15 10:30", read: false },
    { id: 2, message: "Your latest collection has been approved", type: "success", date: "2024-03-14 15:45", read: false },
    { id: 3, message: "Reminder: Update your inventory", type: "warning", date: "2024-03-13 09:00", read: true },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-6 w-6 text-yellow-500" />;
      default:
        return <Bell className="h-6 w-6 text-blue-500" />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <li key={notification.id} className={`p-4 hover:bg-gray-50 ${notification.read ? 'opacity-50' : ''}`}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {notification.message}
                  </p>
                  <p className="text-sm text-gray-500">
                    {notification.date}
                  </p>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;