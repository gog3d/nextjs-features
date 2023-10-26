"use client";
import React, { FC, ReactNode} from 'react';
import { createPortal } from 'react-dom';
import styles from './catalog-cards-desctop.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import CatalogCard from '@/components/catalog-card/catalog-card';
import CatalogCards from '@/components/catalog-cards/catalog-cards';
import DescriptionCatalogCardCups from '@/components/description/description-catalog-card-cups';


import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface ICatalogCardsDesctopProps {
  catalog: Array<TCatalogItemsTypes>;
}

const CatalogCardsDesctop: FC<ICatalogCardsDesctopProps> = ({catalog}) => {
//  console.log({catalog});
  const { asPath } = useRouter();
  const colors = catalog.map((item, index) => `${item.type}__color`);
//  console.log(colors);
  return (
    <CatalogCards initialType={''}>
      <div className={styles['cards']}>
      {
        catalog.map((item, index) => 
          <div key={index} className={styles[item.type]}>
            <div 
              className={`${styles['card']} ${styles[colors[index]]}`}
            >
              <CatalogCards.Card type={item.type}>
                <Image 
                  src={`media/${item.logo.desctop}`}
                  alt='item-icon'
                  width='226'
                  height='126'
                 />
                <div className={styles['card-text']}>
                  {item.title}
                </div>
              </CatalogCards.Card>
            </div>
            <CatalogCards.Tooltip type={item.type}>
              <div className={styles['card-tooltip']}>
                <svg width="82" height="23" viewBox="0 0 82 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.0005 0.158203L81.1662 24.315H0.834755L41.0005 0.158203Z" fill="white"/>
                </svg>
              </div>
            </CatalogCards.Tooltip>
          </div>
        )
      }
      <div className={`${styles['cards-row']} ${styles['cards-row-1']}`}>
        <CatalogCards.Discription type={'cups'}>
          <DescriptionCatalogCardCups catalog={catalog} />
        </CatalogCards.Discription>
        <CatalogCards.Discription type={'paper-packaging'}>paper-packaging discription</CatalogCards.Discription>
        <CatalogCards.Discription type={'lids'}>lids discription</CatalogCards.Discription>
      </div>
      <div className={`${styles['cards-row']} ${styles['cards-row-2']}`}>
        <CatalogCards.Discription type={'carton-packaging'}>carton-packaging discription</CatalogCards.Discription>
        <CatalogCards.Discription type={'plastic-box'}>plastic-box discription</CatalogCards.Discription>
        <CatalogCards.Discription type={'uniform'}>uniform discription</CatalogCards.Discription>
      </div>
      <div className={`${styles['cards-row']} ${styles['cards-row-3']}`}>
        <CatalogCards.Discription type={'mayonnaise-sauce'}>mayonnaise-sauce discription</CatalogCards.Discription>
        <CatalogCards.Discription type={'space-decoration'}>space-decoration discription</CatalogCards.Discription>
        <CatalogCards.Discription type={'consulting'}>consulting discription</CatalogCards.Discription>
        <CatalogCards.Discription type={'design'}>design discription</CatalogCards.Discription>
      </div>
    </div>
      </CatalogCards>
  );
};

export default CatalogCardsDesctop;
/*
0: "cups__color"
1: "paper-packaging__color"
2: "lids__color"
3: "carton-packaging__color"
4: "plastic-box__color
5: "uniform__color"
6: "mayonnaise-sauce__color"
7: "space-decoration__color"
8: "consulting__color"
9: "design__color"
*/
