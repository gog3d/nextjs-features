import { FC, ReactNode, useState } from 'react';
import styles from './description-catalog-card-cups.module.css';

import DescriptionCatalogCardContainer from '@/components/description/description-catalog-card-container';
import PreviewDesctop from '@/components/preview/preview-desctop';
import AccordionCupDesctop from '@/components/accordion/accordion-cup-desctop';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes, TCup, TCupTypes } from '@/types/data-types';
interface IDescriptionCatalogCardCupsProps {
  catalog: Array<TCatalogItemsTypes>;
}

const DescriptionCatalogCardCups: FC<IDescriptionCatalogCardCupsProps> = ({catalog}) => {
  const items: TCatalogItemsTypes | undefined = catalog?.find((item) => item.type ==='cups');
  const [cupType, setCupType] = useState('single-layer');

  return (
    <DescriptionCatalogCardContainer>
      <div className={styles['item']}>
        <div className={styles['menu']}>
        {
          items?.items.map((type, index) =>
            <button key={index} 
              className={cupType === type.name ? `${styles['menu-item']} ${styles['menu-item__active']}` : `${styles['menu-item']}`}
              onClick = {()=> setCupType(type.name)}
              >

              {type.title}
            </button>
          )
        }
        </div>
        <div className={styles['list']}>
        {
          items?.items.find((type) => type.name === cupType)
            .types.map((item: TCup, index: number) => 
              <AccordionCupDesctop
                type={item}
                key={`${index}_${cupType}`}
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
