import React from 'react';
import { useForm } from 'react-hook-form';

type CheckoutFormData = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

const Checkout: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
    // TODO: Implement checkout logic
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Shipping Information</h3>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register('fullName', { required: 'Full name is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>}
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { required: 'Email is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div className="col-span-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Street address
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register('address', { required: 'Address is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address.message}</p>}
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register('city', { required: 'City is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city.message}</p>}
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    {...register('country', { required: 'Country is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.country && <p className="mt-2 text-sm text-red-600">{errors.country.message}</p>}
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                    ZIP / Postal code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    {...register('zipCode', { required: 'ZIP code is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.zipCode && <p className="mt-2 text-sm text-red-600">{errors.zipCode.message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Payment Information</h3>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                    Name on card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    {...register('cardName', { required: 'Name on card is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.cardName && <p className="mt-2 text-sm text-red-600">{errors.cardName.message}</p>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    {...register('cardNumber', { required: 'Card number is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.cardNumber && <p className="mt-2 text-sm text-red-600">{errors.cardNumber.message}</p>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                    Expiration date (MM/YY)
                  </label>
                  <input
                    type="text"
                    id="expirationDate"
                    {...register('expirationDate', { required: 'Expiration date is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.expirationDate && <p className="mt-2 text-sm text-red-600">{errors.expirationDate.message}</p>}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    {...register('cvv', { required: 'CVV is required' })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.cvv && <p className="mt-2 text-sm text-red-600">{errors.cvv.message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;