import { FC, ReactNode, useState } from 'react';
import styles from './description-catalog-card-decoration.module.css';

import DescriptionCatalogCardContainer from '@/components/description/description-catalog-card-container';
//import PreviewDesctop from '@/components/preview/preview-desctop';

import AccordionCatalogItemMobile from '@/components/accordion/accordion-catalog-item-mobile';

import DescriptionItemDesctop from '@/components/description/description-item-desctop';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes, TCup, TCupTypes } from '@/types/data-types';

interface IDescriptionCatalogCardDecorationProps {
  catalog: Array<TCatalogItemsTypes>;
}

const DescriptionCatalogCardDecoration: FC<IDescriptionCatalogCardDecorationProps> = ({catalog}) => {
  const catalogItem = catalog.find(item => item.type === 'space-decoration');

  return (
    <DescriptionCatalogCardContainer>
      <div className={styles['item']}>
        <DescriptionItemDesctop
          title={catalogItem?.description.title}
          subtitles={catalogItem?.description.subtitles}
        />
        <div className={styles['list']}>
        {
          catalogItem?.items.map((item, index) => 
            <AccordionCatalogItemMobile
              title={item.title}
              parameters={item.parameters}
              background={item.background}
              key={index}
            />
          )
        }
        </div>
      </div>
      <div className={styles['preview']}>
{ /*       <PreviewDesctop 
          textTop={'Ваша новая подложка на поднос!'}
          textBottom={'Вашей подложки на поднос.'}
          imagePath={catalogItem?.image.desctop}
          imageAlt={catalogItem?.type}
          constructorHref={'/catalog/cups-types/double-layer/constructor'}
        />
*/}
      </div>
    </DescriptionCatalogCardContainer>
  );
};

export default DescriptionCatalogCardDecoration;
