"use client"
import ConstructorPage from '../cups-mobile/constructor-page/constructor-page';
import HeaderConstructor from '../cups-mobile/header/header-constructor';
//import Header from '../cups-mobile/header-constructor/header';
import Constructor from '../cups-mobile/constructor/constructor';
import ToolBar from '../cups-mobile/tool-bar/tool-bar';
import CanvasContainer from '../cups-mobile/canvas-container/canvas-container';
import Send from '../cups-mobile/send/send';

import { Canvas } from '@react-three/fiber';
import Cup from '../cups-mobile/geometry/cup/cup';
import Experience from '../cups-mobile/geometry/experience/experience';


//import Image from 'next/image';
/*
  <Image 
    src="/cups/media/constructor-cup.png" 
    alt="constructor-cup"
    width={328}
    height={486}
  />

*/


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
            </Experience>
          </Canvas>
        </CanvasContainer>
        <Send />
      </Constructor>
    </ConstructorPage>
  )
};

export default CupConstructorPageMobile;
