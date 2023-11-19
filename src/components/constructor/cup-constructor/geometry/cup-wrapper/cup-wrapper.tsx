'use client';
import { Cylinder, useTexture } from '@react-three/drei';
import { FC, ReactNode, useEffect, useLayoutEffect} from 'react';

import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


import { selectModalAmount, selectCupColorAmount, selectCupModule, selectViewAmount, selectCupBackgroundAmount, selectBackgroundAmount, selectCupLogoAmount, selectLogoAmount, selectColorAmount, selectCupImage64Amount } from '@/redux/features/cup/selectors';

import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';

const CupWrapper = () => {
  const dispatch = useAppDispatch();

  const backgroundImageCrop = useAppSelector((state) => selectCupBackgroundAmount(state));
  const logoImageCrop = useAppSelector((state) => selectCupLogoAmount(state)); 
  const [tR, bR, h] = [4, 2.6, 11.2];

  const cupImage64 = useAppSelector((state) => selectCupImage64Amount(state));
  const backgroundTexture = useTexture(backgroundImageCrop === '' ? '/cups/media/default.png' : backgroundImageCrop);
  const logoTexture = useTexture(logoImageCrop === '' ? '/cups/media/default.png' : logoImageCrop);
 // const logoCoverTexture = useTexture(logoCoverImageCrop === '' ? '/cups/media/default.png' : logoCoverImageCrop);
 //const cupColor = useAppSelector((state) => selectCupColorAmount(state));
  
 const { gl }  = useThree();

 // setTimeout(()=>{
    dispatch(cupActions.cupImage64(gl.domElement.toDataURL('image/png')));
    //console.log(gl.domElement.toDataURL('image/png'));
    //console.log(cupImage64);

  //}, 400);

  return (
    <group rotation={[0, Math.PI, 0]}>

      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 2*Math.PI]} 
        visible={backgroundImageCrop === '' ? false : true}
      >
        <meshStandardMaterial 
          map={backgroundTexture}
          transparent
          opacity={1}
        />
      </Cylinder>

      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 2*Math.PI]} 
        visible={logoImageCrop === '' ? false : true}
      >
        <meshStandardMaterial 
          map={logoTexture}
          transparent
          opacity={1}
        />
      </Cylinder>

    </group>
  );
};

export default CupWrapper;
//        args={[tR, bR, h, 50, 50, true, 0, 2*Math.PI]} 