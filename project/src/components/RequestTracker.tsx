import React from 'react';
import { Clock, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import type { ServiceRequest } from '../types';

const mockRequests: ServiceRequest[] = [
  {
    id: '1',
    type: 'maintenance',
    status: 'in_progress',
    description: 'Annual maintenance check',
    createdAt: '2024-03-15T10:00:00Z',
    customerId: 'CUST001',
  },
  {
    id: '2',
    type: 'billing',
    status: 'resolved',
    description: 'Billing discrepancy',
    createdAt: '2024-03-14T15:30:00Z',
    resolvedAt: '2024-03-15T09:00:00Z',
    customerId: 'CUST001',
  }
];

export function RequestTracker() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">Request Status</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {mockRequests.map((request) => (
            <div
              key={request.id}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-lg capitalize">
                    {request.type.replace('_', ' ')}
                  </span>
                </div>
                <StatusBadge status={request.status} />
              </div>
              <p className="text-gray-600 mb-4 pl-12">{request.description}</p>
              <div className="pl-12 space-y-2 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <p>Submitted: {new Date(request.createdAt).toLocaleString()}</p>
                </div>
                {request.resolvedAt && (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <p>Resolved: {new Date(request.resolvedAt).toLocaleString()}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: ServiceRequest['status'] }) {
  const statusConfig = {
    pending: { 
      icon: Clock, 
      className: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      label: 'Pending'
    },
    in_progress: { 
      icon: AlertCircle, 
      className: 'bg-blue-50 text-blue-700 border-blue-200',
      label: 'In Progress'
    },
    resolved: { 
      icon: CheckCircle, 
      className: 'bg-green-50 text-green-700 border-green-200',
      label: 'Resolved'
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${config.className}`}>
      <Icon className="h-4 w-4" />
      <span>{config.label}</span>
    </span>
  );
}