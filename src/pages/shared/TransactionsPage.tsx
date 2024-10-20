import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Transaction = {
  id: number;
  date: string;
  amount: number;
  description: string;
};

const TransactionsPage: React.FC = () => {
  const { partnerId } = useParams<{ partnerId: string }>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockTransactions: Transaction[] = [
        { id: 1, date: '2024-03-01', amount: 1000, description: 'Order #12345' },
        { id: 2, date: '2024-03-15', amount: 1500, description: 'Order #12346' },
        { id: 3, date: '2024-03-30', amount: 2000, description: 'Order #12347' },
      ];
      setTransactions(mockTransactions);
      setLoading(false);
    };

    fetchTransactions();
  }, [partnerId]);

  if (loading) {
    return <div className="text-center mt-8">Loading transactions...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Transactions with Partner #{partnerId}</h1>
      {transactions.length > 0 ? (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-4">No transactions found for this partner.</p>
      )}
    </div>
  );
};

export default TransactionsPage;