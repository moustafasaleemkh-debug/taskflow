import { useState } from 'react';
import { useBilling } from '../hooks/useBilling';

export function Billing() {
  const { plan, invoices, upgradePlan } = useBilling();

  return (
    <div className="billing-page">
      <h1>Billing & Subscription</h1>
      <section className="current-plan">
        <h2>Current Plan</h2>
        <div className="plan-card">
          <span className="plan-name">{plan.name}</span>
          <span className="plan-price">${plan.price}/mo</span>
          <span className="plan-seats">{plan.seats} seats</span>
        </div>
        <button onClick={() => upgradePlan('pro')}>Upgrade to Pro</button>
      </section>
      <section className="invoices">
        <h2>Invoice History</h2>
        <table>
          <thead><tr><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id}>
                <td>{inv.date}</td>
                <td>${inv.amount}</td>
                <td>{inv.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
