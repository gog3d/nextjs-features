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
//  pagesData: TDataTypes;
    pagesData: Array<{link: string, value: string}>
}

export const Result: FC<IResultProps> = ({ pagesData }) => {
  const router = useRouter();

//console.log({pagesData})

  const input = useAppSelector((state) => selectInputAmount(state));
  const result = useAppSelector((state) => selectResultAmount(state));


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchActions.resetResult());
    for (const [key, value] of Object.entries(pagesData)) {
//        console.log(value.value.indexOf(input));
      if(value.value !=='' && input != '' && value.value.toLowerCase().indexOf(input.toLowerCase())>=0) {
        dispatch(searchActions.result({link: value.link, value: value.value}));
      }
    }
  }, [input]);

  return (
    <div className={styles['links-container']}>
      {
        result.map((item, index) => item.value ?
          <div key={index} className={styles['link']}>
            <Link href={`${item.link}`}>
              {item.value}
            </Link>
          </div> : null
        )
      }

    </div>
  )
};


//export default Result;