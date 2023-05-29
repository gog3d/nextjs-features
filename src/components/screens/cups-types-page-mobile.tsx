import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header/header';
import Cups from '../cups-mobile/cups/cups';
import SubMenu from '../cups-mobile/submenu/submenu';

//import  from '../cups-mobile//';

const CupsPageMobile = () => {
  return (
    <CupPage>
      <Header />
      <Cups>
        <SubMenu title={'Однослойные'} link={'/cups-types/single-layer'}/>
        <SubMenu title={'Двуслойные'} link={'/cups-types/double-layer'}/>
      </Cups>
    </CupPage>
  )
};

export default CupsPageMobile;
