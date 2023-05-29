import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header-constructor/header';
import Color from '../cups-mobile/color/color';
import ColorButtons from '../cups-mobile/color-buttons/color-buttons';
import ColorRadio from '../cups-mobile/color-radio/color-radio';
import ColorApply from '../cups-mobile/color-apply/color-apply';



const CupColorPageMobile = () => {
const colors = [
  '#222222', '#3603FF', '#1A5E1A',
  '#FFF500', '#FF0000', '#00D0FE',
  '#9B27AF', '#B181FF', '#FF00C7',
  '#FCEBCD', '#FF6B00', '#FC006A',
  '#939597', '#8BC34A', '#FFFFFF'
  ];

  return (
    <CupPage>
      <Header />
      <Color>
        <ColorButtons>
        {
          colors.map(color => <ColorRadio color={color}/>)
        }
        </ColorButtons>
        <ColorApply />
      </Color>
    </CupPage>
  )
};

export default CupColorPageMobile;
