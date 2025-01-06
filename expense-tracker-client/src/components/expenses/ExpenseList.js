import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '../../store/features/expenses/expenseSlice';

const ExpenseList = ({ month, year }) => {
    const dispatch = useDispatch();
    const { expenses, loading, error } = useSelector((state) => state.expenses);

    useEffect(() => {
        dispatch(fetchExpenses({ month, year }));
    }, [month, year, dispatch]);

    if (loading) return <div className="text-center py-6">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Expense List</h3>
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                <tr>
                    <th className="py-2 px-4 text-left">Amount</th>
                    <th className="py-2 px-4 text-left">Date</th>
                    <th className="py-2 px-4 text-left">Description</th>
                    <th className="py-2 px-4 text-left">Payment Method</th>
                    <th className="py-2 px-4 text-left">Paid To</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id} className="border-b">
                        <td className="py-3 px-4">${expense.amount}</td>
                        <td className="py-3 px-4">{expense.expense_date}</td>
                        <td className="py-3 px-4">{expense.description}</td>
                        <td className="py-3 px-4">{expense.paid_by}</td>
                        <td className="py-3 px-4">{expense.paid_to}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
