import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  input: string;
  result: Array<string>;
}

const resetSearch =   {
  input: '',
  result: [''],
};

const initialState: SearchState = {
  input: '',
  result: [''],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    input: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    result: (state, action: PayloadAction<string>) => {
      state.result = [...state.result, action.payload];
    },
    resetResult: (state) => {
      state.result = [''];
    },
  }
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions; 

