import { FC } from 'react';
import { useRouter } from 'next/router';

import CupPage from '../cups/cups-page/cups-page';
import Header from '../cups/header/header';
import CupTypes from '../cups/cup-types/cup-types';
import SubMenu from '../cups/submenu/submenu';
import Accordion from '../cups/accordion/accordion';

import Preview from '../cups/preview/preview';
import Error from '../cups/error/error';
import { TCup, TCupTypes } from '../../types/data-types';

interface ICupTypesProps {
  cupTypes: TCupTypes | null;
};

const CupTypesPageMobile: FC<ICupTypesProps> = ({cupTypes}) => {
//  console.log(cupTypes);
  const { asPath } = useRouter();

  return (
    <CupPage>
      <Header />
      <CupTypes title={cupTypes ? cupTypes.title : ''}>
        {
          cupTypes ? cupTypes.types.map((type, index) => {
            return (
              <Accordion type={type} key={index}>
                {/*<Preview link={`${asPath}/${type.name}`}/>*/}
                <Preview link={`${asPath}/constructor`}/>
              </Accordion>
            )}) : <Error />
        }
      </CupTypes>
    </CupPage>
  )
};

export default CupTypesPageMobile;
