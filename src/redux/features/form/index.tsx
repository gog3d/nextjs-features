import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface FormState {
    companyName: string;
    tel: string;
    name: string;
    email: string;
    checkboxItems: Array<string>;
    textArea: string;
    confirm: Boolean;
    success: Boolean;
}

const resetForm =   {
  companyName: '',
  tel: '',
  name: '',
  email: '',
  checkboxItems: [],
  textArea: '',
  confirm: false,
  success: false,
};

const initialState: FormState = {
  companyName: '',
  tel: '',
  name: '',
  email: '',
  checkboxItems: [],
  textArea: '',
  confirm: false,
  success: false,
};



const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    companyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    tel: (state, action: PayloadAction<string>) => {
      state.tel = action.payload;
    },
    name: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    email: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    checkboxItems: (state, action: PayloadAction<Array<string>>) => {
       state.checkboxItems = [...action.payload];
    },
    textArea:  (state, action: PayloadAction<string>) => {
      state.textArea = action.payload;
    },
    confirm:  (state, action: PayloadAction<Boolean>) => {
      state.confirm = action.payload;
    },
    success:  (state, action: PayloadAction<Boolean>) => {
      state.success = action.payload;
    },
    reset:  (state) => {
      state = resetForm;
    },
  }
});

export const formReducer = formSlice.reducer;
export const formActions = formSlice.actions; 

