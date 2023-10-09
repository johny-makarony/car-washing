import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getAllEmployees, addEmployee } from './employeesOperations';

const EmployeesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: EmployeesInitialState,
  extraReducers: builder => {
    builder
      .addCase(addEmployee.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
          isLoading: false,
        };
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        return {
          ...state,
          items: action.payload,
          isLoading: false,
        };
      })
      .addMatcher(
        isAnyOf(addEmployee.pending, getAllEmployees.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(addEmployee.rejected, getAllEmployees.rejected),
        (state, action) => {
          return { ...state, error: action.payload.message, isLoading: false };
        }
      );
  },
});

export const employeesReducer = employeesSlice.reducer;
