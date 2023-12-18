'use client';

import React, { FC, ReactNode, useState, useContext, useCallback, useMemo } from 'react';
import styles from './search.module.css';

import Input from './input/input';
import { Result, IResultProps} from './result/result';

import StoreProvider from '@/redux/store-provider';

interface ISearchProps {
  children: ReactNode;
//  catalog: Array<TCatalogItemsTypes>;
}

interface ISearch {
  Input: FC;
  Result: FC<IResultProps>;
}

const Search: FC<ISearchProps> & ISearch = ({ children }) => {

  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
};

Search.Input = Input;
Search.Result = Result;

export { Search };

