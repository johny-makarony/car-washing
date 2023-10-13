import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getGallery,
  addPhotosGroup,
  deletePhotosGroup,
} from './galleryOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const gallerySlice = createSlice({
  name: 'employees',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addPhotosGroup.fulfilled, (state, action) => {
        return {
          ...state,
          items: [action.payload, ...state.items],
          error: null,
          isLoading: false,
        };
      })
      .addCase(getGallery.fulfilled, (state, action) => {
        return {
          ...state,
          items: action.payload,
          error: null,
          isLoading: false,
        };
      })
      .addCase(deletePhotosGroup.fulfilled, (state, action) => {
        const deletedPhotosId = action.payload;
        state.items = state.items.filter(
          photo => photo._id !== deletedPhotosId
        );
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          addPhotosGroup.pending,
          getGallery.pending,
          deletePhotosGroup.pending
        ),
        state => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addPhotosGroup.rejected,
          getGallery.rejected,
          deletePhotosGroup.rejected
        ),
        (state, action) => {
          const error = action.error;
          return {
            ...state,
            error: error.message,
            isLoading: false,
          };
        }
      );
  },
});

export const galleryReducer = gallerySlice.reducer;
