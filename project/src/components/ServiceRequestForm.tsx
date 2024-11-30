import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { FileUpload } from './FileUpload';

export function ServiceRequestForm() {
  const [type, setType] = useState<string>('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setType('');
      setDescription('');
      setFiles([]);
      alert('Service request submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit service request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">Submit Service Request</h2>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Request Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          >
            <option value="">Select type...</option>
            <option value="gas_leak">Gas Leak</option>
            <option value="billing">Billing Issue</option>
            <option value="connection">New Connection</option>
            <option value="maintenance">Maintenance</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 transition-colors"
            required
            placeholder="Please describe your issue in detail..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attachments
          </label>
          <FileUpload files={files} onFileChange={setFiles} />
        </div>

        {type === 'gas_leak' && (
          <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Emergency - Gas Leak</p>
              <p className="text-sm mt-1">
                For immediate assistance with gas leaks, please call our 24/7 emergency hotline at{' '}
                <strong>1-800-GAS-LEAK</strong>
              </p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg
            hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium
            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}