import React from 'react';
import { RequestTracker } from '../components/RequestTracker';
import { AccountInfo } from '../components/AccountInfo';

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <AccountInfo />
      </div>
      <div>
        <RequestTracker />
      </div>
    </div>
  );
}