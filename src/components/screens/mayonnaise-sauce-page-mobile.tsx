import { FC } from 'react';

import { useRouter } from 'next/router';

import PageMobile from '../page/page-mobile';
import PageContentCatalogItemMobile from '@/components/page-content/page-content-catalog-item-mobile';
import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';

import DescriptionItemMobile from '@/components/description/description-item-mobile';

//import AccordionCatalogItemMobile from '@/components/accordion/accordion-catalog-item-mobile';
import TextBlockCatalogItemMobile from '@/components/text-block/text-block-catalog-item-mobile';
//import PreviewMobile from '@/components/preview/preview-mobile';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IMayonnaiseSaucePageMobileProps {
  catalog: Array<TCatalogItemsTypes>;
}

const MayonnaiseSaucePageMobile: FC<IMayonnaiseSaucePageMobileProps> = ({catalog}) => {
  const { asPath } = useRouter();
  const itemType = asPath.split('/').pop();
  const catalogItem = catalog.find(item => item.type === itemType);

  return (
    <PageMobile>
      <HeaderCatalogItemMobile title={catalogItem?.title}/>
      <PageContentCatalogItemMobile>
        <DescriptionItemMobile
          title={catalogItem?.description.title}
          subtitles={catalogItem?.description.subtitles}
        />
        <p>{'Готовые вкусовые решения:'}</p>
        {
          catalogItem?.items.map((item, index) => 
            <TextBlockCatalogItemMobile
              title={item.title}
              background={item.background}
              key={index}
            />
          )
        }
      </PageContentCatalogItemMobile>
    </PageMobile>
  );
};

export default MayonnaiseSaucePageMobile;
