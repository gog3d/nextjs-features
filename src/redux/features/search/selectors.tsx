import type { RootState } from '@/redux/store';

export const selectSearchModule = (state: RootState) => state.search;

export const selectInputAmount = (state: RootState) => selectSearchModule(state).input;
export const selectResultAmount = (state: RootState) => selectSearchModule(state).result;
