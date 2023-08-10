import { FC } from 'react';

import { useRouter } from 'next/router';

import PageMobile from '../page/page-mobile';
import PageContentMobile from '@/components/page-content//page-content-mobile';
import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';

import DescriptionItemMobile from '@/components/description/description-item-mobile';

import AccordionCatalogItemMobile from '@/components/accordion/accordion-catalog-item-mobile';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IPlasticBoxPageMobileProps {
  catalog: Array<TCatalogItemsTypes>;
}

const PlasticBoxPageMobile: FC<IPlasticBoxPageMobileProps> = ({catalog}) => {
  const { asPath } = useRouter();
  const itemType = asPath.split('/').pop();
  const catalogItem = catalog.find(item => item.type === itemType);

  return (
    <PageMobile>
      <HeaderCatalogItemMobile title={catalogItem?.title}/>
      <PageContentMobile>
      <DescriptionItemMobile
        title={catalogItem?.description.title}
        subtitles={catalogItem?.description.subtitles}
      />
      </PageContentMobile>
    </PageMobile>
  );
};

export default PlasticBoxPageMobile;
