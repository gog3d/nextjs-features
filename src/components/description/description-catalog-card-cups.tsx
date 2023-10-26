import { FC, ReactNode } from 'react';
import styles from './description-catalog-card-cups.module.css';

import DescriptionCatalogCardContainer from '@/components/description/description-catalog-card-container';
import PreviewDesctop from '@/components/preview/preview-desctop';
import AccordionCatalogItemMobile from '@/components/accordion/accordion-catalog-item-mobile';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes, TCup, TCupTypes } from '@/types/data-types';
//import { TCup, TCupTypes } from '@/types/data-types';
interface IDescriptionCatalogCardCupsProps {
//  children: ReactNode;
  catalog: Array<TCatalogItemsTypes>;
}

const DescriptionCatalogCardCups: FC<IDescriptionCatalogCardCupsProps> = ({catalog}) => {

  const items: TCatalogItemsTypes | undefined = catalog?.find((item) => item.type ==='cups');
//  const catalogItemsTypes = items?.items.map((item) => item);
//  console.log(catalogItemsTypes);
  const catalogItem: TCupTypes | undefined = items?.items.find((item) => item.name === 'single-layer');

  return (
    <DescriptionCatalogCardContainer>
      <div className={styles['item']}>
        <div className={styles['menu']}>
        {
          items?.items.map((type, index) =>
            <button key={index}className={`${styles['menu-item']} ${styles['menu-item__active']}`}>
              {type.title}
            </button>
          )
        }
        </div>
        <div className={styles['list']}>
        {
          catalogItem?.types.map((item, index) => 
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
        <PreviewDesctop 
          textTop={'Ваша новый стаканчик!'}
          textBottom={'Вашего стаканчика.'}
          imagePath={items?.image.desctop}
          imageAlt={items?.type}
          constructorHref={'/catalog/cups-types/double-layer/constructor'}
        />
      </div>
    </DescriptionCatalogCardContainer>
  );
};

export default DescriptionCatalogCardCups;
