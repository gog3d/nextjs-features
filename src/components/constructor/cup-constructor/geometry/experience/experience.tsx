'use client'
import { FC, ReactNode, useEffect, useLayoutEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';


import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


import { selectModalAmount, selectCupColorAmount, selectCupModule, selectViewAmount, selectCupBackgroundAmount, selectBackgroundAmount, selectCupLogoAmount, selectLogoAmount, selectColorAmount, selectCupImage64Amount } from '@/redux/features/cup/selectors';
import { 
      Stage, 
      OrbitControls, 
      } from '@react-three/drei';

interface IExperienceProps {
  children: ReactNode;
  rotate: boolean | undefined;
};


const Experience: FC<IExperienceProps> = ({ children, rotate=false }) => {

  

   const cup = useAppSelector((state) => selectCupModule(state));
   const cupImage64 = useAppSelector((state) => selectCupImage64Amount(state));
   const backgroundImageCrop = useAppSelector((state) => selectCupBackgroundAmount(state));
   const logoImageCrop = useAppSelector((state) => selectCupLogoAmount(state)); 
   const cupColor = useAppSelector((state) => selectCupColorAmount(state));

 //dispatch(cupActions.cupImage64(gl.domElement.toDataURL()));
  return (
    <>
      <Stage shadows={false} adjustCamera={1.2}>
        { children }
      </Stage>
      <OrbitControls
        makeDefault
        autoRotate={rotate}
        autoRotateSpeed={-3}
      />
    </>
  );
};

export default Experience;
