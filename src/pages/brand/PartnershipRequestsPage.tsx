import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type PartnershipRequest = {
  id: number;
  storeName: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
};

type Partnership = {
  id: number;
  storeName: string;
  startDate: string;
};

const PartnershipRequestsPage: React.FC = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<PartnershipRequest[]>([
    { id: 1, storeName: "Fashion Boutique", date: "2024-03-15", status: "Pending" },
    { id: 2, storeName: "Trendy Threads", date: "2024-03-14", status: "Approved" },
    { id: 3, storeName: "Style Haven", date: "2024-03-13", status: "Pending" },
    { id: 4, storeName: "Chic Emporium", date: "2024-03-12", status: "Rejected" },
  ]);

  const [partnerships, setPartnerships] = useState<Partnership[]>([
    { id: 1, storeName: "Urban Outfitters", startDate: "2024-01-01" },
    { id: 2, storeName: "Fashion Forward", startDate: "2024-02-15" },
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

  const handleViewTransactions = (partnerId: number) => {
    navigate(`/transactions/${partnerId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Partnerships</h1>

      {/* Current Partnerships */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Current Partnerships</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {partnerships.map((partnership) => (
                <tr key={partnership.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{partnership.storeName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partnership.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleViewTransactions(partnership.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      View Transactions
                    </button>
                    <Link to={`/brand/store/${partnership.id}`} className="text-indigo-600 hover:text-indigo-900">
                      View Store
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Partnership Requests */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Partnership Requests</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.storeName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {request.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(request.id)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(request.id)}
                          className="text-red-600 hover:text-red-900 mr-2"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <Link to={`/brand/store/${request.id}`} className="text-indigo-600 hover:text-indigo-900">
                      View Store
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PartnershipRequestsPage;