import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { login, logout, refresh, getAdministrators } from './authOperations';

const AuthInitialState = {
  user: {
    name: null,
    email: null,
  },
  administrators: [],
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        // state.token = action.payload.accessToken;
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getAdministrators.fulfilled, (state, action) => {
        state.administrators = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          login.pending,
          logout.pending,
          refresh.pending,
          getAdministrators.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          logout.rejected,
          refresh.rejected,
          getAdministrators.rejected
        ),
        (state, action) => {
          return { ...state, error: action.payload.message, isLoading: false };
        }
      );
  },
});

export const authReducer = authSlice.reducer;

// import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// import {
//   // register,
//   login,
//   logout,
//   refresh,
//   // updateUser,
//   // updateAvatar,
// } from './AuthOperations';

// const AuthInitialState = {
//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   // isRefreshing: true,
//   isLoading: false,
//   // isVisitFirst: true,
//   error: null,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: AuthInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(login.fulfilled, (state, action) => {
//         state.user.email = action.payload.email;
//         state.token = action.payload.accessToken;
//         state.isLoggedIn = true;
//         // state.isRefreshing = false;
//         state.isLoading = false;
//       })
//       // .addCase(login.pending, (state, action) => {
//       //   state.isLoading = true;
//       // })
//       // .addCase(login.rejected, (state, action) => {
//       //   state.isLoggedIn = false;
//       //   state.error = action.payload.message;
//       //   state.isLoading = false;
//       // })
//       .addCase(logout.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//         // state.isRefreshing = true;
//         state.isLoading = false;
//       })
//       // .addCase(logout.pending, state => {
//       //   state.isLoading = true;
//       // })
//       // .addCase(logout.rejected, state => {
//       //   state.isLoading = false;
//       // })
//       .addCase(refresh.fulfilled, (state, action) => {
//         console.log(action.payload);
//         // state.user = action.payload;
//         // state.token = action.payload.accessToken;
//         state.isLoggedIn = true;
//         // state.isRefreshing = false;
//         state.user.email = action.payload.email;
//         state.user.name = action.payload.name;
//         state.isLoading = false;
//       })
//       // .addCase(refresh.pending, state => {
//       //   // state.isRefreshing = true;
//       //   state.isLoading = true;
//       // })
//       // .addCase(refresh.rejected, state => {
//       //   // state.isRefreshing = false;
//       //   state.isLoading = false;
//       // })
//       .addMatcher(
//         isAnyOf(login.pending, logout.pending, refresh.pending),
//         state => {
//           state.isLoading = true;
//         }
//       )
//       .addMatcher(
//         isAnyOf(login.rejected, logout.rejected, refresh.rejected),
//         (state, action) => {
//           return { ...state, error: action.payload.message, isLoading: false };
//         }
//       );
//   },
// });

// export const authReducer = authSlice.reducer;
