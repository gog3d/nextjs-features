import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

interface CupState {
  modal: boolean;
}

const initialState: CupState = {
  modal: false,
};

const cupSlice = createSlice({
  name: 'cup',
  initialState,
  reducers: {
    modal: (state, action: PayloadAction<boolean>) => {
//      console.log(payload);
      state.modal = action.payload;
    },
  }
});

export const cupReducer = cupSlice.reducer;
export const cupActions = cupSlice.actions;

