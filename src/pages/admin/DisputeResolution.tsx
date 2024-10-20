import React, { useState } from 'react';
import { MessageCircle, CheckCircle, XCircle } from 'lucide-react';

type Dispute = {
  id: number;
  brand: string;
  store: string;
  issue: string;
  status: 'open' | 'resolved' | 'closed';
  date: string;
};

const DisputeResolution: React.FC = () => {
  const [disputes, setDisputes] = useState<Dispute[]>([
    { id: 1, brand: 'Fashion Forward', store: 'Trendy Boutique', issue: 'Late delivery', status: 'open', date: '2024-03-15' },
    { id: 2, brand: 'Urban Edge', store: 'City Styles', issue: 'Product quality', status: 'open', date: '2024-03-14' },
    { id: 3, brand: 'Eco Chic', store: 'Green Fashion', issue: 'Incorrect order', status: 'resolved', date: '2024-03-13' },
  ]);

  const handleResolve = (id: number) => {
    setDisputes(disputes.map(dispute => 
      dispute.id === id ? { ...dispute, status: 'resolved' } : dispute
    ));
  };

  const handleClose = (id: number) => {
    setDisputes(disputes.map(dispute => 
      dispute.id === id ? { ...dispute, status: 'closed' } : dispute
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Dispute Resolution</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {disputes.map((dispute) => (
            <li key={dispute.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-indigo-600 truncate">
                      Dispute #{dispute.id}: {dispute.brand} vs {dispute.store}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Issue: {dispute.issue} | Date: {dispute.date}
                    </p>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                    <div className="flex space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        dispute.status === 'open' ? 'bg-yellow-100 text-yellow-800' :
                        dispute.status === 'resolved' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {dispute.status.charAt(0).toUpperCase() + dispute.status.slice(1)}
                      </span>
                      {dispute.status === 'open' && (
                        <>
                          <button
                            onClick={() => handleResolve(dispute.id)}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Resolve
                          </button>
                          <button
                            onClick={() => handleClose(dispute.id)}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Close
                          </button>
                        </>
                      )}
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
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

export default DisputeResolution;