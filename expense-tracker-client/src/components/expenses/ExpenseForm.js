import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createExpense } from '../../store/features/expenses/expenseSlice';

const ExpenseForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        amount: '',
        expense_date: '',
        description: '',
        paid_by: '',
        paid_to: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createExpense(formData));
        setFormData({
            amount: '',
            expense_date: '',
            description: '',
            paid_by: '',
            paid_to: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Add Expense</h2>

            <div className="mb-4">
                <label className="block text-gray-700">Amount</label>
                <input
                    type="number"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full p-3 border rounded-md border-gray-300"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                    type="date"
                    value={formData.expense_date}
                    onChange={(e) => setFormData({ ...formData, expense_date: e.target.value })}
                    className="w-full p-3 border rounded-md border-gray-300"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                    type="text"
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-3 border rounded-md border-gray-300"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Payment Method</label>
                <input
                    type="text"
                    placeholder="Payment Method (e.g., PhonePe, GPay)"
                    value={formData.paid_by}
                    onChange={(e) => setFormData({ ...formData, paid_by: e.target.value })}
                    className="w-full p-3 border rounded-md border-gray-300"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700">Paid To</label>
                <input
                    type="text"
                    placeholder="Paid To (e.g., Vendor Name)"
                    value={formData.paid_to}
                    onChange={(e) => setFormData({ ...formData, paid_to: e.target.value })}
                    className="w-full p-3 border rounded-md border-gray-300"
                />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200">
                Add Expense
            </button>
        </form>
    );
};

export default ExpenseForm;
