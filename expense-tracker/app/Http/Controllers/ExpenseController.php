<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    // Store an expense
    public function store(Request $request)
    {

        $request->validate([
            'amount' => 'required|numeric',
            'expense_date' => 'required|date',
            'description' => 'required|string',
            'paid_by' => 'required|string',
            'paid_to' => 'required|string',
        ]);

        $expense = Expense::create($request->all());
        return response()->json($expense, 201);
    }

    // Get expenses for a specific month
    public function getExpenses(Request $request)
    {
        $month = $request->query('month');
        $year = $request->query('year');
        $expenses = Expense::whereYear('expense_date', $year)
            ->whereMonth('expense_date', $month)
            ->get();
        return response()->json($expenses);
    }

    // Export expenses to CSV
    public function export()
    {
        $expenses = Expense::all();
        $csvData = "Amount,Date,Description,Paid By,Paid To\n";
        foreach ($expenses as $expense) {
            $csvData .= "{$expense->amount},{$expense->expense_date},{$expense->description},{$expense->paid_by},{$expense->paid_to}\n";
        }
        return response()->stream(function () use ($csvData) {
            echo $csvData;
        }, 200, [
            "Content-Type" => "text/csv",
            "Content-Disposition" => "attachment; filename=expenses.csv",
        ]);
    }
}

