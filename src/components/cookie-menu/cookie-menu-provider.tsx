'use client';
import React, { FC, ReactNode, useState, useContext, useCallback, useMemo } from 'react';
import StoreProvider from '@/redux/store-provider';

interface ICookieMemuProviderProps {
  children: ReactNode;
}

const CookieMenuProvider: FC<ICookieMemuProviderProps> = ({ children }) => {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
};

export default CookieMenuProvider;
