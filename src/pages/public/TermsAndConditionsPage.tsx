import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="prose prose-indigo">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using FabricLink, you agree to be bound by these Terms and Conditions.</p>

        <h2>2. User Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>

        <h2>3. Intellectual Property</h2>
        <p>The content, organization, graphics, design, and other matters related to FabricLink are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use, or publication by you of any such content is strictly prohibited.</p>

        <h2>4. User Conduct</h2>
        <p>You agree to use FabricLink only for lawful purposes. You are prohibited from posting or transmitting any unlawful, threatening, defamatory, libelous, obscene, pornographic, or profane material.</p>

        <h2>5. Limitation of Liability</h2>
        <p>FabricLink shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.</p>

        <h2>6. Changes to Terms</h2>
        <p>FabricLink reserves the right to modify these Terms and Conditions at any time. We will notify users of any changes by posting the new Terms and Conditions on this page.</p>

        <h2>7. Governing Law</h2>
        <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;