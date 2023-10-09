import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getReportingByDates } from './reportingOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

export const reportsSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getReportingByDates.fulfilled, (state, action) => {
        return {
          items: action.payload.orders,
          employees: action.payload.employees,
          payments: action.payload.payments,
          isLoading: false,
          error: null,
        };
      })
      .addMatcher(isAnyOf(getReportingByDates.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getReportingByDates.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
  reducers: {},
});

export const reportsReducer = reportsSlice.reducer;
