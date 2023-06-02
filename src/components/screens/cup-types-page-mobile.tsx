import { useRouter } from 'next/router';

import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header/header';
import CupsTypes from '../cups-mobile/cups-types/cups-types';
import SubMenu from '../cups-mobile/submenu/submenu';
import Accordion from '../cups-mobile/accordion/accordion';
import Preview from '../cups-mobile/preview/preview';

const CupTypesPageMobile = () => {

  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <CupPage>
      <Header />
      <CupsTypes>
        <Accordion color={1}>
          <Preview link={`${asPath}/2`}/>
        </Accordion>
        <Accordion color={2}>
          <Preview link={`${asPath}/2`}/>
        </Accordion>
        <Accordion color={3}>
          <Preview link={`${asPath}/3`}/>
        </Accordion>
        <Accordion color={4}>
          <Preview link={`${asPath}/4`}/>
        </Accordion>
        <Accordion color={5}>
          <Preview link={`${asPath}/5`}/>
        </Accordion>
      </CupsTypes>
    </CupPage>
  )
};

export default CupTypesPageMobile;
