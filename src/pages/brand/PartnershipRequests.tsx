import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type PartnershipRequest = {
  id: number;
  storeName: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
};

const PartnershipRequests: React.FC = () => {
  const [requests, setRequests] = useState<PartnershipRequest[]>([
    { id: 1, storeName: "Fashion Boutique", date: "2024-03-15", status: "Pending" },
    { id: 2, storeName: "Trendy Threads", date: "2024-03-14", status: "Approved" },
    { id: 3, storeName: "Style Haven", date: "2024-03-13", status: "Pending" },
    { id: 4, storeName: "Chic Emporium", date: "2024-03-12", status: "Rejected" },
  ]);

  const handleApprove = (id: number) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'Approved' } : request
    ));
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Partnership Requests</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Store Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{request.storeName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{request.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      request.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {request.status === 'Pending' && (
                    <>
                      <button onClick={() => handleApprove(request.id)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                        Approve
                      </button>
                      <button onClick={() => handleReject(request.id)} className="text-red-600 hover:text-red-900">
                        Reject
                      </button>
                    </>
                  )}
                  <Link to={`/store/${request.id}`} className="text-indigo-600 hover:text-indigo-900 ml-4">
                    View Store
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnershipRequests;