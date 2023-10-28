import { FC } from 'react';

import { useRouter } from 'next/router';

import CupPage from '../cups/cups-page/cups-page';
import Header from '../cups/header/header';
import Cups from '../cups/cups/cups';
import SubMenu from '../cups/submenu/submenu';
import { TCupTypes } from '../../types/data-types';
import Error from '../cups/error/error';

interface ICupsTypesPageMobileProps {
  cups: Array<TCupTypes> | null;
};

const CupsTypesPageMobile: FC<ICupsTypesPageMobileProps> = ({ cups }) => {
  const { asPath } = useRouter();
  return (
    <CupPage>
      <Header />
      <Cups>
      {
        cups ? cups.map((cup, index) => 
        <SubMenu 
          key={index}
          title={cup.title} 
          link={`${asPath}/${cup.name}`}
        />) : <Error />
      }
      </Cups>
    </CupPage>
  )
};

export default CupsTypesPageMobile;
