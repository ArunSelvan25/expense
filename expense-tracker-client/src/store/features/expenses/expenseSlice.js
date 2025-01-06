import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    expenses: [],
    loading: false,
    error: null,
};

export const fetchExpenses = createAsyncThunk(
    'expenses/fetchExpenses',
    async ({ month, year }) => {
        const response = await axios.get(`http://127.0.0.1:8000/api/expenses?month=${month}&year=${year}`);
        return response.data;
    }
);

export const createExpense = createAsyncThunk(
    'expenses/createExpense',
    async (expenseData) => {
        const response = await axios.post('http://127.0.0.1:8000/api/expenses', expenseData);
        return response.data;
    }
);

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExpenses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchExpenses.fulfilled, (state, action) => {
                state.loading = false;
                state.expenses = action.payload;
            })
            .addCase(fetchExpenses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createExpense.fulfilled, (state, action) => {
                state.expenses.push(action.payload);
            });
    },
});

export default expenseSlice.reducer;
