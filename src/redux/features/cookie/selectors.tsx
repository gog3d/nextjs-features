import type { RootState } from '@/redux/store';

export const selectCookieModule = (state: RootState) => state.cookie;

export const selectCookieAmount = (state: RootState) => selectCookieModule(state).cookie;
//export const selectResultAmount = (state: RootState) => selectSearchModule(state).result;
