import { FC } from 'react';

import { useRouter } from 'next/router';

import PageMobile from '@/components/page/page-mobile';

import PageContentWrapperCatalogItemMobile from '@/components/page/page-content-wrapper-catalog-item-mobile';
import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';
import SubMenu from '@/components/submenu/submenu';
import { TCatalogItemsTypes } from '@/types/data-types';

interface ICupsTypesPageMobileProps {
  catalog: Array<TCatalogItemsTypes>;
}

const CupsTypesPageMobile: FC<ICupsTypesPageMobileProps> = ({ catalog }) => {
  const { asPath } = useRouter();
  //const itemType = asPath.split('/').pop();
  const itemType = 'cups';
 // console.log({itemType})

  const catalogItem = catalog.find(item => item.type === itemType);

  return (
    <PageMobile>
      <HeaderCatalogItemMobile title={catalogItem?.title}/>
      <PageContentWrapperCatalogItemMobile>
      {
        catalogItem?.items.map((item, index) => 
          <SubMenu 
            key={index}
            title={item.title} 
            link={`${asPath}/${item.name}`}
          />
        )
      }
      </PageContentWrapperCatalogItemMobile>
    </PageMobile>
  )
};

export default CupsTypesPageMobile;

