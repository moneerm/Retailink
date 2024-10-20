import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Order Details</h1>
      <p>This is a placeholder for the Order Details page. Implement the order details view for Order ID: {id} here.</p>
    </div>
  );
};

export default OrderDetails;