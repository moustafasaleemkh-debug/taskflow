import { useState } from 'react';

interface Plan {
  name: string;
  price: number;
  seats: number;
}

interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
}

export function useBilling() {
  const [plan, setPlan] = useState<Plan>({ name: 'Free', price: 0, seats: 1 });
  const [invoices] = useState<Invoice[]>([
    { id: '1', date: '2026-02-01', amount: 0, status: 'paid' },
    { id: '2', date: '2026-03-01', amount: 0, status: 'paid' },
  ]);

  const upgradePlan = (planName: string) => {
    if (planName === 'pro') {
      setPlan({ name: 'Pro', price: 29, seats: 5 });
    }
  };

  return { plan, invoices, upgradePlan };
}
