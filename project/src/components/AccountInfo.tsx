import React from 'react';
import { User, MapPin, CreditCard, Mail } from 'lucide-react';
import type { Customer } from '../types';

const mockCustomer: Customer = {
  id: 'CUST001',
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: '123 Main St, Anytown, ST 12345',
  accountNumber: 'GA-1234567',
};

export function AccountInfo() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">Account Information</h2>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-50 p-2 rounded-lg">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Name</p>
            <p className="text-lg font-semibold text-gray-900">{mockCustomer.name}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-lg font-semibold text-gray-900">{mockCustomer.email}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-blue-50 p-2 rounded-lg">
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Service Address</p>
            <p className="text-lg font-semibold text-gray-900">{mockCustomer.address}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-blue-50 p-2 rounded-lg">
            <CreditCard className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Account Number</p>
            <p className="text-lg font-semibold text-gray-900">{mockCustomer.accountNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}