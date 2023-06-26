"use client"
import { Canvas } from '@react-three/fiber';

import ConstructorPage from '../cups/constructor-page/constructor-page';
import HeaderConstructor from '../cups/header/header-constructor';
import Constructor from '../cups/constructor/constructor';
import ToolBar from '../cups/tool-bar/tool-bar';
import CanvasContainer from '../cups/canvas-container/canvas-container';
import Send from '../cups/send/send';

import Cup from '../cups/geometry/cup/cup';
import CupWrapper from '../cups/geometry/cup-wrapper/cup-wrapper';
import Experience from '../cups/geometry/experience/experience';

const CupConstructorPageMobile = () => {
  return (
    <ConstructorPage>
      <HeaderConstructor />
      <Constructor>
        <ToolBar />
        <CanvasContainer> 
          <Canvas>
            <Experience>
              <Cup />
              <CupWrapper />
            </Experience>
          </Canvas>
        </CanvasContainer>
        <Send />
      </Constructor>
    </ConstructorPage>
  )
};

export default CupConstructorPageMobile;
