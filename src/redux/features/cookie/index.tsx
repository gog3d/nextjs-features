import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface CookieState {
  cookie: boolean;
}

const resetCookie =   {
  cookie: true,
};

const initialState: CookieState = {
  cookie: true,
};

const cookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    cookie: (state, action: PayloadAction<boolean>) => {
      state.cookie = action.payload;
    },
    resetResult: (state) => {
      state.cookie = true;
    },
  }
});

export const cookieReducer = cookieSlice.reducer;
export const cookieActions = cookieSlice.actions; 

