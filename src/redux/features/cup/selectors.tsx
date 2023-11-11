import type { RootState } from '@/redux/store'

export const selectCupModule = (state: RootState) => state.cup;

export const selectModalAmount = (state: RootState) => selectCupModule(state).modal;
export const selectColorsAmount = (state: RootState) => selectCupModule(state).colors;
export const selectColorAmount = (state: RootState) => selectCupModule(state).color;
export const selectViewAmount = (state: RootState) => selectCupModule(state).view;

export const selectCupColorAmount = (state: RootState) => selectCupModule(state).cup.color;

