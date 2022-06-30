import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


type FetchHoney = Record<string, string>;

export const fetchHoney = createAsyncThunk('honey/fetchHoneyStatus', async (params: FetchHoney) => {
  const { order, sortBy, category, search, currentPage } = params;
  const { data } = await axios.get<Honey[]>(
    `https://629b609c656cea05fc383281.mockapi.io/honey?${category}&page=${currentPage}&sortBy=${sortBy}&order=${order}&search=${search}`,
  );
  return data as Honey[] ;
});


type Honey = {id:string; imageUrl:string; title:string; price:number; sizes:number[];}

interface HoneySliceState {
  honey: Honey[];
  status: Status;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

const initialState: HoneySliceState = {
  honey: [],
  status: Status.LOADING,
};

const honey = createSlice({
  name: 'honey',
  initialState,
  reducers: {
    setHoney(state, action) {
      state.honey = action.payload;
    },
  },


  extraReducers: (builder) => {
    builder.addCase(fetchHoney.pending, (state, action) => {
      state.status = Status.LOADING;
      state.honey = [];
    });

    builder.addCase(fetchHoney.fulfilled, (state, action) => {
      state.honey = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchHoney.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.honey = [];
    });
  },

  // extraReducers: {
  //   [fetchHoney.pending]: (state) => {
  //     state.status = 'loading';
  //     state.honey = [];
  //   },
  //   [fetchHoney.fulfilled]: (state, action) => {
  //     state.honey = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchHoney.rejected]: (state) => {
  //     state.status = 'error';
  //     state.honey = [];
  //   },
  // },
});

export const { setHoney } = honey.actions;

export default honey.reducer;
