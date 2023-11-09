import type { RootState } from '@/redux/store'

export const selectCupModule = (state: RootState) => state.cup;

export const selectModalAmount = (state: RootState) => selectCupModule(state).modal;

