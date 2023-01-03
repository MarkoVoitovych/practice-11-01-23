import { createSlice } from '@reduxjs/toolkit';
import { STATUS_FILTERS_ALL } from './constants';

const filtersInitialState = STATUS_FILTERS_ALL;

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
