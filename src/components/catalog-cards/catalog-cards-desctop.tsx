'use client';
import { FC, ReactNode, useState } from 'react';
import styles from './catalog-cards-desctop.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import CatalogCard from '@/components/catalog-card/catalog-card';

interface ICatalogCardsDesctopProps {
//  children: ReactNode;
  catalog: Array<TCatalogItemsTypes>;
}

const CatalogCardsDesctop: FC<ICatalogCardsDesctopProps> = ({catalog}) => {
  const { asPath } = useRouter();

  return (
    <div className={styles['cards']}>
      {
        catalog.map((item, index) => 
       <>
          <div 
            key={index} 
            className={`${styles['card']} ${styles[item.type]}`}
          >
            <Image 
              src={`media/${item.logo.desctop}`}
              alt='item-icon'
              width='226'
              height='126'
             />
            <div className={styles['card-text']}>
              {item.title}
            </div>
          </div>
          <div className={styles[`${item.type}-description`]}>
            {'hello'}
          </div>
        </>
        )
      }

    </div>
  );
};

export default CatalogCardsDesctop;
