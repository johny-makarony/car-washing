import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addNewOrder,
  getAllOrders,
  getOrderByNumber,
  updateOrderByNumber,
} from './ordersOperations';

const initialState = {
  items: [],
  orderByNumber: {},
  isLoading: false,
  totalPages: '',
  error: '',
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(addNewOrder.fulfilled, (state, action) => {
        return {
          ...state,
          items: [action.payload, ...state.items],
          error: null,
          isLoading: false,
        };
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.orders],
          error: null,
          totalPages: action.payload.totalPages,
          isLoading: false,
        };
      })
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        return {
          ...state,
          orderByNumber: { ...action.payload },
          error: null,
          isLoading: false,
        };
      })
      .addCase(updateOrderByNumber.fulfilled, (state, action) => {
        return {
          ...state,
          orderByNumber: action.payload,
          error: null,
          isLoading: false,
        };
      })
      .addMatcher(
        isAnyOf(
          getAllOrders.pending,
          getOrderByNumber.pending,
          updateOrderByNumber.pending,
          addNewOrder.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllOrders.rejected,
          getOrderByNumber.rejected,
          updateOrderByNumber.rejected,
          addNewOrder.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      );
  },
  reducers: {},
});

export const ordersReducer = ordersSlice.reducer;
