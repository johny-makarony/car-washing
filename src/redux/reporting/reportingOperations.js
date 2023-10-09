import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:3001';
// const errorMsg = "Something's wrong. Please update page and try again";

export const getReportingByDates = createAsyncThunk(
  'reports/getReportingByDates',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('/api/reporting', {
        params: data,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
