import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC= '-price',
}



export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
}

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
  currentCount: number;
}

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
  currentCount: 0,
};

const filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentCount(state, action: PayloadAction<number>) {
      state.currentCount = action.payload;
    },
  },
});



export const { setCategoryId, setSort, setCurrentCount, setSearchValue } = filter.actions;

export default filter.reducer;
