import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactUsPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // TODO: Implement contact form submission logic
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: 'Message is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
              {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-indigo-500" />
              <span>support@fabriclink.com</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-indigo-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
              <span>123 Fashion Street, New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;