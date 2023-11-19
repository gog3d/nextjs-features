import type { RootState } from '@/redux/store';

export const selectCupModule = (state: RootState) => state.cup;

export const selectColorsAmount = (state: RootState) => selectCupModule(state).colors;

export const selectModalAmount = (state: RootState) => selectCupModule(state).modal;
export const selectViewAmount = (state: RootState) => selectCupModule(state).view;
export const selectRoundedAmount = (state: RootState) => selectCupModule(state).rounded;
export const selectColorAmount = (state: RootState) => selectCupModule(state).color;
export const selectBackgroundAmount = (state: RootState) => selectCupModule(state).background;
export const selectLogoAmount = (state: RootState) => selectCupModule(state).logo;

export const selectCupColorAmount = (state: RootState) => selectCupModule(state).cup.color;
export const selectCupBackgroundAmount = (state: RootState) => selectCupModule(state).cup.background;
export const selectCupLogoAmount = (state: RootState) => selectCupModule(state).cup.logo;
export const selectCupImage64Amount = (state: RootState) => selectCupModule(state).cup.cupImage64;

