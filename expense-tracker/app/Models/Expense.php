<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $table = 'expenses';

    protected $fillable = [
        'amount',
        'description',
        'expense_date',
        'paid_by',
        'paid_to'
    ];
}
