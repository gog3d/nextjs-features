import React, { useCallback } from 'react';
import ConstructorPage from '../cups/constructor-page/constructor-page';
//import HeaderConstructorItem from '../cups/header/header-constructor-item';
import HeaderConstructorItem from '../cups/header/header-constructor-item';
import Color from '../cups/color/color';
import ColorButtons from '../cups/color-buttons/color-buttons';
import ColorRadio from '../cups/color-radio/color-radio';
import ConstructorApply from '../cups/constructor-apply/constructor-apply';

import { useCustomization } from '@/context/customization';

const CupColorPageMobile = () => {

  const {
    colors,
    checkedColor,
    setCheckedColor,
    cupColor,
    setCupColor,
    setConstructorView,
    setColorView,
    setBackgroundView,
    setLogoView
  } = useCustomization();

  const apply = useCallback(() => {
    setCupColor(checkedColor);
    setConstructorView(true);
    setColorView(false);
    setBackgroundView(false);
    setLogoView(false);
  }, [checkedColor]);

  return (
    <ConstructorPage>
      <HeaderConstructorItem />
      <Color>
        <ColorButtons>
        {
          colors.map(color => {
            return (
            <React.Fragment key={color.id}>
              <ColorRadio color={color.color} />
            </React.Fragment>
            )}
          )
        }
        </ColorButtons>
        <ConstructorApply apply={apply} />
      </Color>
    </ConstructorPage>
  )
};

export default CupColorPageMobile;
