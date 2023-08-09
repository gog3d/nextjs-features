import { FC } from 'react';

import { useRouter } from 'next/router';

import PageMobile from '../page/page-mobile';
import PageContentMobile from '@/components/page-content//page-content-mobile';
import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';

import DescriptionItemMobile from '@/components/description/description-item-mobile';


import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IConsultingPageMobileProps {
  catalog: Array<TCatalogItemsTypes>;
}

const ConsultingPageMobile: FC<IConsultingPageMobileProps> = ({catalog}) => {
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

export default ConsultingPageMobile;
