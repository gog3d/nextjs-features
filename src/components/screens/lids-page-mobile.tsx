import { FC } from 'react';

import { useRouter } from 'next/router';

import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperCatalogItemMobile from '@/components/page/page-content-wrapper-catalog-item-mobile';
import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';

import DescriptionItemMobile from '@/components/description/description-item-mobile';

import AccordionCatalogItemMobile from '@/components/accordion/accordion-catalog-item-mobile';
import PreviewMobile from '@/components/preview/preview-mobile';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface ILidsPageMobileProps {
  catalog: Array<TCatalogItemsTypes>;
}

const LidsPageMobile: FC<ILidsPageMobileProps> = ({catalog}) => {
  const { asPath } = useRouter();
  const itemType = asPath.split('/').pop();
  const catalogItem = catalog.find(item => item.type === itemType);

  return (
    <PageMobile>
      <HeaderCatalogItemMobile title={catalogItem?.title}/>
      <PageContentWrapperCatalogItemMobile>
        <DescriptionItemMobile
          title={catalogItem?.description.title}
          subtitles={catalogItem?.description.subtitles}
        />
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
      </PageContentWrapperCatalogItemMobile>
    </PageMobile>
  );
};

export default LidsPageMobile;
