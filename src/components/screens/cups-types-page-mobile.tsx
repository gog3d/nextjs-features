import { FC } from 'react';
import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header/header';
import Cups from '../cups-mobile/cups/cups';
import SubMenu from '../cups-mobile/submenu/submenu';
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

