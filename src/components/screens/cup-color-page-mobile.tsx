import React from 'react';
import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header-constructor/header';
import Color from '../cups-mobile/color/color';
import ColorButtons from '../cups-mobile/color-buttons/color-buttons';
import ColorRadio from '../cups-mobile/color-radio/color-radio';
import ColorApply from '../cups-mobile/color-apply/color-apply';



const CupColorPageMobile = () => {
const colors = [
  {color: '#222222', id: '1'},
  {color: '#3603FF', id: '2'},
  {color: '#1A5E1A', id: '3'},
  {color: '#FFF500', id: '4'},
  {color: '#FF0000', id: '5'},
  {color: '#00D0FE', id: '6'},
  {color: '#9B27AF', id: '7'}, 
  {color: '#B181FF', id: '8'}, 
  {color: '#FF00C7', id: '9'},
  {color: '#FCEBCD', id: '10'}, 
  {color: '#FF6B00', id: '11'}, 
  {color: '#FC006A', id: '12'},
  {color: '#939597', id: '13'}, 
  {color: '#8BC34A', id: '14'}, 
  {color: '#FFFFFF', id: '15'},
  ];

  return (
    <CupPage>
      <Header />
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
        <ColorApply />
      </Color>
    </CupPage>
  )
};

export default CupColorPageMobile;
