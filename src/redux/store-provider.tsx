'use client';
import React, {FC, ReactNode} from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

interface IStoreProvider {
  children: ReactNode;
};


const StoreProvider: FC<IStoreProvider> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

export default StoreProvider;