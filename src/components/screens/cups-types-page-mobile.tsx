import { FC } from 'react';

import CupPage from '../cups/cups-page/cups-page';
import Header from '../cups/header/header';
import Cups from '../cups/cups/cups';
import SubMenu from '../cups/submenu/submenu';
import { TCupTypes } from '../../types/cups-data-types';

interface ICupsTypesPageMobileProps {
  cups: Array<TCupTypes>;
};

const CupsTypesPageMobile: FC<ICupsTypesPageMobileProps> = ({ cups }) => {

  return (
    <CupPage>
      <Header />
      <Cups>
      {
        cups.map((cup, index) => 
        <SubMenu 
          key={index}
          title={cup.title} 
          link={`/cups-types/${cup.name}`}
        />)
      }
      </Cups>
    </CupPage>
  )
};

export default CupsTypesPageMobile;

