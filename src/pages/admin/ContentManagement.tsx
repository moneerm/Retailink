import React, { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';

type Content = {
  id: number;
  title: string;
  type: 'announcement' | 'faq' | 'policy';
  lastUpdated: string;
};

const ContentManagement: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([
    { id: 1, title: 'Welcome to FabricLink', type: 'announcement', lastUpdated: '2024-03-15' },
    { id: 2, title: 'How to place an order?', type: 'faq', lastUpdated: '2024-03-14' },
    { id: 3, title: 'Return Policy', type: 'policy', lastUpdated: '2024-03-13' },
  ]);

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log(`Edit content with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    setContents(contents.filter(content => content.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Content Management</h1>
      <div className="mb-4">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add New Content
        </button>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {contents.map((content) => (
            <li key={content.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-indigo-600 truncate">{content.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Type: {content.type} | Last Updated: {content.lastUpdated}
                    </p>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(content.id)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(content.id)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentManagement;