import React, { useState } from 'react';
import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';
import ExportButton from './components/expenses/ExportButton';

const App = () => {
  const [month, setMonth] = useState(1); // January
  const [year, setYear] = useState(2025);

  return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-center mb-8">Expense Tracker</h1>

            <div className="space-y-8">
              <ExpenseForm />
              <div>
                <h2 className="text-xl font-semibold">Select Month & Year</h2>
                <div className="flex justify-between">
                  <div className="flex gap-4 items-center mb-6">
                    <select
                        className="p-2 border rounded-md"
                        onChange={(e) => setMonth(Number(e.target.value))}
                        value={month}
                    >
                      {Array.from({length: 12}, (_, index) => index + 1).map((m) => (
                          <option key={m} value={m}>
                            {new Date(0, m - 1).toLocaleString('default', {month: 'long'})}
                          </option>
                      ))}
                    </select>

                    <input
                        type="number"
                        min="2000"
                        max="2099"
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                        className="p-2 border rounded-md w-24"
                    />

                  </div>
                  <div>
                    <ExportButton/>
                  </div>
                </div>
              </div>
              <ExpenseList month={month} year={year}/>

            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
