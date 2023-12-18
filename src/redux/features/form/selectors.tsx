import type { RootState } from '@/redux/store';

export const selectFormModule = (state: RootState) => state.form;

export const selectCompanyNameAmount = (state: RootState) => selectFormModule(state).companyName;
export const selectTelAmount = (state: RootState) => selectFormModule(state).tel;
export const selectNameAmount = (state: RootState) => selectFormModule(state).name;
export const selectEmailAmount = (state: RootState) => selectFormModule(state).email;
export const selectCheckboxItemsAmount = (state: RootState) => selectFormModule(state).checkboxItems;
export const selectTextAreaAmount = (state: RootState) => selectFormModule(state).textArea;
export const selectConfirmAmount = (state: RootState) => selectFormModule(state).confirm;
export const selectSuccessAmount = (state: RootState) => selectFormModule(state).success;
