import React from 'react';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "What is FabricLink?",
      answer: "FabricLink is a B2B platform connecting fashion brands with retail stores, streamlining the wholesale process in the fashion industry."
    },
    {
      question: "How do I register as a brand?",
      answer: "You can register as a brand by clicking on the 'Sign up' button and selecting 'Brand' as your account type. Fill in the required information to create your account."
    },
    {
      question: "How do I register as a store?",
      answer: "To register as a store, click on the 'Sign up' button and select 'Store' as your account type. Complete the registration form with your store details."
    },
    {
      question: "Is there a fee to use FabricLink?",
      answer: "FabricLink is free to join. We charge a small commission on successful transactions between brands and stores."
    },
    {
      question: "How does the ordering process work?",
      answer: "Stores can browse products from partnered brands, add items to their cart, and place orders directly through the platform. Brands will receive notifications and can manage these orders from their dashboard."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{faq.question}</h3>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;