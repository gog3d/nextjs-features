import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'

const colors = [
  '#222222',
  '#3603FF',
  '#1A5E1A',
  '#FFF500',
  '#FF0000',
  '#00D0FE',
  '#9B27AF', 
  '#B181FF', 
  '#FF00C7',
  '#FCEBCD', 
  '#FF6B00', 
  '#FC006A',
  '#939597', 
  '#8BC34A', 
  '#FFFFFF',
]

//type TView = 'viewer' | 'color' |'background' | 'logo';

type TView = string;

interface CupState {
  modal: boolean;
  colors: Array<string>;
  color: string;
  view: TView;
  cup: {
    color: string;
  };
}

const initialState: CupState = {
  modal: false,
  colors: colors,
  view: 'viewer',
  color: '#222222',
  cup: {
    color: '#FFFFFF',
  }
};

const cupSlice = createSlice({
  name: 'cup',
  initialState,
  reducers: {
    modal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
    view: (state, action: PayloadAction<TView>) => {
      state.view = action.payload;
    },
    color: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    cupColor:  (state) => {
      state.cup.color = state.color;
    },
  }
});

export const cupReducer = cupSlice.reducer;
export const cupActions = cupSlice.actions;

