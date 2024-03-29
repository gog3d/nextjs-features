import { FC } from 'react';

import { useRouter } from 'next/router';

import PageMobile from '../page/page-mobile';
import PageContentWrapperCatalogItemMobile from '@/components/page/page-content-wrapper-catalog-item-mobile';
import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';

import DescriptionItemMobile from '@/components/description/description-item-mobile';

import AccordionCatalogItemMarkedListMobile from '@/components/accordion/accordion-catalog-item-marked-list-mobile';
import PreviewMobile from '@/components/preview/preview-mobile';

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
      <PageContentWrapperCatalogItemMobile>
        <DescriptionItemMobile
          title={catalogItem?.description.title}
          subtitles={catalogItem?.description.subtitles}
        />
        {
          catalogItem?.items.map((item, index) => 
            <AccordionCatalogItemMarkedListMobile
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

export default ConsultingPageMobile;
