import { useRouter } from 'next/router';

import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header/header';
import CupsTypes from '../cups-mobile/cups-types/cups-types';
import SubMenu from '../cups-mobile/submenu/submenu';
import Accordion from '../cups-mobile/accordion/accordion';
import Accordion2 from '../cups-mobile/accordion2/accordion2';
import Preview from '../cups-mobile/preview/preview';

const CupTypesPageMobile = () => {

  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <CupPage>
      <Header />
      <CupsTypes>
        <Accordion>
          <Preview link={`${asPath}/1`}/>
        </Accordion>
        <Accordion2>
          <Preview link={`${asPath}/2`}/>
        </Accordion2>
      </CupsTypes>
    </CupPage>
  )
};

export default CupTypesPageMobile;
