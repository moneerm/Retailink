import React from 'react';
import { useParams, Link } from 'react-router-dom';

type OrderItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

const StoreOrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data (replace with actual API call in a real application)
  const orderDetails = {
    id: parseInt(id || '0'),
    brandName: "Fashion Forward",
    date: "2024-03-15",
    total: 1250.00,
    status: "Pending",
    items: [
      { id: 1, name: "Summer Dress", quantity: 5, price: 89.99 },
      { id: 2, name: "Denim Jacket", quantity: 3, price: 129.99 },
      { id: 3, name: "Floral Blouse", quantity: 4, price: 59.99 },
    ],
    shippingAddress: "123 Fashion St, New York, NY 10001",
    paymentMethod: "Credit Card",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/store/orders" className="text-indigo-600 hover:text-indigo-900">
          &larr; Back to Orders
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">Order Details: #{orderDetails.id}</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Order Information</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Brand Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderDetails.brandName}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Order Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderDetails.date}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Total Amount</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${orderDetails.total.toFixed(2)}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${orderDetails.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                    orderDetails.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                    orderDetails.status === 'Shipped' ? 'bg-indigo-100 text-indigo-800' : 
                    'bg-green-100 text-green-800'}`}>
                  {orderDetails.status}
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Shipping Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderDetails.shippingAddress}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orderDetails.paymentMethod}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Order Items</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderDetails.items.map((item: OrderItem) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StoreOrderDetails;