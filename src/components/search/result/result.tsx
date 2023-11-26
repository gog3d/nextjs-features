'use client';
import { FC, ReactNode, useCallback, useEffect } from 'react';
import styles from './result.module.css';

import { useRouter } from 'next/router';

import Link from 'next/link';

import { selectResultAmount, selectInputAmount } from '@/redux/features/search/selectors';
import { searchActions } from '@/redux/features/search';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

import { TCatalogItemsTypes, TDataTypes } from '@/types/data-types';

export interface IResultProps {
//  catalog: Array<TCatalogItemsTypes>;
  pagesData: TDataTypes;
}


export const Result: FC<IResultProps> = ({ pagesData }) => {
  const router = useRouter();

  const input = useAppSelector((state) => selectInputAmount(state));
  const result = useAppSelector((state) => selectResultAmount(state));


  const dispatch = useAppDispatch();

  const match = (key: string, input: string) => {
    if(input !=='' && key.indexOf(input)>=0) {
      dispatch(searchActions.result(key));
    }
  };

  useEffect(() => {
    dispatch(searchActions.resetResult());
    for (const [key, value] of Object.entries(pagesData)) {
      match(key, input);
    }
  }, [input]);

  return (
    <div>
      {
        result.map((item, index) => 
          <div key={index}>
            <Link href={`/${item}`}>
              {item}
            </Link>
          </div>
        )
      }

    </div>
  )
};


//export default Result;