import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHoney = createAsyncThunk('honey/fetchHoneyStatus', async (params) => {
  const { order, sortBy, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://629b609c656cea05fc383281.mockapi.io/honey?${category}&page=${currentPage}&sortBy=${sortBy}&order=${order}&search=${search}`,
  );
  return data;
});

const initialState = {
  honey: [],
  status: 'loading',
};

const honey = createSlice({
  name: 'honey',
  initialState,
  reducers: {
    setHoney(state, action) {
      state.honey = action.payload;
    },
  },

  extraReducers: {
    [fetchHoney.pending]: (state) => {
      state.status = 'loading';
      state.honey = [];
    },
    [fetchHoney.fulfilled]: (state, action) => {
      state.honey = action.payload;
      state.status = 'success';
    },
    [fetchHoney.rejected]: (state) => {
      state.status = 'error';
      state.honey = [];
    },
  },
});

export const { setHoney } = honey.actions;

export default honey.reducer;
