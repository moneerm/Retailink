import React from 'react';
import { useForm } from 'react-hook-form';

type SettingsFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  notifications: boolean;
};

const SettingsPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<SettingsFormData>();

  const onSubmit = (data: SettingsFormData) => {
    console.log(data);
    // TODO: Implement settings update logic
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              validate: (val: string) => {
                if (watch('password') != val) {
                  return "Your passwords do not match";
                }
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p>}
        </div>

        <div className="flex items-center">
          <input
            id="notifications"
            type="checkbox"
            {...register('notifications')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="notifications" className="ml-2 block text-sm text-gray-900">
            Receive email notifications
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;