import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://car-washing-backend.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001/';

export const addEmployee = createAsyncThunk(
  '/addEmployee',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/employees', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Невідома помилка завантаженя працівників',
      });
    }
  }
);

export const getAllEmployees = createAsyncThunk(
  '/getEmployees',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('/api/employees', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Невідома помилка завантаженя працівників',
      });
    }
  }
);

// export const register = createAsyncThunk(
//   '/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/api/auth/register', credentials);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk('/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/api/auth/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const updateUser = createAsyncThunk(
//   '/updateUser',
//   async (credentials, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.patch('/api/auth/profile', credentials);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateAvatar = createAsyncThunk(
//   '/updateAvatar',
//   async (credentials, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.patch(
//         '/api/auth/profile/avatar',
//         credentials
//       );

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const refresh = createAsyncThunk('/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     return thunkAPI.rejectWithValue('Unable to fetch user');
//   }
//   try {
//     setAuthHeader(persistedToken);
//     const res = await axios.get('/api/auth/current');
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
