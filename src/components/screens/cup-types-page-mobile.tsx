import { FC } from 'react';
import { useRouter } from 'next/router';

import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header/header';
import CupsTypes from '../cups-mobile/cups-types/cups-types';
import SubMenu from '../cups-mobile/submenu/submenu';
import Accordion from '../cups-mobile/accordion/accordion';

import Preview from '../cups-mobile/preview/preview';
import Error from '../cups-mobile/error/error';
import { TCup, TCupTypes, TData } from '../../types/cups-data-types';

interface ICupTypesProps {
  cupTypes: TCupTypes | null;
};

const CupTypesPageMobile: FC<ICupTypesProps> = ({cupTypes}) => {
//  console.log(cupTypes);
  const { asPath } = useRouter();

  return (
    <CupPage>
      <Header />
      <CupsTypes>
        {
          cupTypes ? cupTypes.types.map((type, index) => {
            return (
              <Accordion type={type} key={index}>
                <Preview link={`${asPath}/2`}/>
              </Accordion>
            )}) : <Error />
        }
      </CupsTypes>
    </CupPage>
  )
};

export default CupTypesPageMobile;
