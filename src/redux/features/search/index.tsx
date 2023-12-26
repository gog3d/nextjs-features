import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  input: string;
  result: Array<{link: string, value: string}>;
}

const resetSearch =   {
  input: '',
  result: [{link: '', value: ''}],
};

const initialState: SearchState = {
  input: '',
  result: [{link: '', value: ''}],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    input: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    result: (state, action: PayloadAction<{link: string, value: string}>) => {
      state.result = [...state.result, action.payload];
    },
    resetResult: (state) => {
      state.result = [{link: '', value: ''}];
    },
  }
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions; 

