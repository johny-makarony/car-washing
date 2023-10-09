import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { addService, getAllServices } from './servicesOperations';

const ServicesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState: ServicesInitialState,
  extraReducers: builder => {
    builder
      .addCase(addService.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(addService.pending, getAllServices.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(addService.rejected, getAllServices.rejected),
        (state, action) => {
          return { ...state, error: action.payload.message, isLoading: false };
        }
      );
  },
});

export const servicesReducer = servicesSlice.reducer;
