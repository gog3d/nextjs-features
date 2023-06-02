import ConstructorPage from '../cups-mobile/constructor-page/constructor-page';
import HeaderConstructor from '../cups-mobile/header/header-constructor';
//import Header from '../cups-mobile/header-constructor/header';
import Constructor from '../cups-mobile/constructor/constructor';
import ToolBar from '../cups-mobile/tool-bar/tool-bar';
import CanvasContainer from '../cups-mobile/canvas-container/canvas-container';
import Send from '../cups-mobile/send/send';

const CupConstructorPageMobile = () => {
  return (
    <ConstructorPage>
      <HeaderConstructor />
      <Constructor>
        <ToolBar />
        <CanvasContainer></CanvasContainer>
        <Send />
      </Constructor>
    </ConstructorPage>
  )
};

export default CupConstructorPageMobile;
