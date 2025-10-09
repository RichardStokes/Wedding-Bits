import React from 'react';
import { DollarSign, CheckCircle } from 'lucide-react';

const BudgetTracker = ({ budget }) => {
  const progressWidth = `${budget.usedPercentage}%`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Budget Tracker</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Budget</span>
          <span className="font-semibold text-gray-800">€{budget.total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Spent</span>
          <span className="font-semibold text-rose-gold">€{budget.spent.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Remaining</span>
          <span className="font-semibold text-sage-green">€{budget.remaining.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-2">Budget Used: {budget.usedPercentage}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-rose-gold h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: progressWidth }}
          ></div>
        </div>
      </div>

      {budget.usedPercentage <= 75 ? (
        <div className="flex items-center text-sage-green mt-4">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span>You're on track with your budget. Great job!</span>
        </div>
      ) : (
        <div className="flex items-center text-rose-gold mt-4">
          <DollarSign className="w-5 h-5 mr-2" />
          <span>You're nearing your budget limit. Review your expenses.</span>
        </div>
      )}

      <div className="mt-6 flex space-x-4">
        <button className="flex-1 bg-rose-gold text-white py-2 rounded-lg hover:bg-rose-600 transition-colors">
          Add Expense
        </button>
        <button className="flex-1 border border-sage-green text-sage-green py-2 rounded-lg hover:bg-sage-green hover:text-white transition-colors">
          View Full Budget
        </button>
      </div>
    </div>
  );
};

export default BudgetTracker;


