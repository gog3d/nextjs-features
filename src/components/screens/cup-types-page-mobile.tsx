import { FC } from 'react';
import { useRouter } from 'next/router';

import AccordionCup from '@/components/accordion/accordion-cup';

import PreviewCup from '@/components/preview/preview-cup';

import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperCatalogItemMobile from '@/components/page/page-content-wrapper-catalog-item-mobile';
import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';

import IDescriptionCupMobileProps from '@/components/description/description-cup-mobile';

import { TCatalogItemsTypes, TCupTypes } from '@/types/data-types';


interface ICupTypesProps {
  catalog: Array<TCatalogItemsTypes>;
}

const CupTypesPageMobile: FC<ICupTypesProps> = ({catalog}) => {
  const { asPath } = useRouter();
  const itemName = asPath.split('/').pop();
  const cups: TCatalogItemsTypes | undefined = catalog.find(item => item.type === 'cups');
  const catalogItem: TCupTypes  = cups?.items.find(item => item.name === itemName);

  return (
    <PageMobile>
    <HeaderCatalogItemMobile title={catalogItem?.title}/>
    <PageContentWrapperCatalogItemMobile>
      <IDescriptionCupMobileProps
        title={catalogItem?.title}
      />
      {
        catalogItem?.types.map((item, index) => 
          <AccordionCup type={item} key={index}>
            <PreviewCup link={`${asPath}/constructor`}/>
          </AccordionCup>
        )
      }

    </PageContentWrapperCatalogItemMobile>
  </PageMobile>
  )
};

export default CupTypesPageMobile;
