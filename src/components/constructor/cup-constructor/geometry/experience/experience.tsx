'use client'
import { FC, ReactNode, useEffect, useLayoutEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';

//import { cupActions } from '@/redux/features/cup';
//import { useAppSelector, useAppDispatch } from '@/redux/hooks';

//import { selectModalAmount, selectCupColorAmount, selectCupModule, selectViewAmount, selectCupBackgroundAmount, selectBackgroundAmount, selectCupLogoAmount, selectLogoAmount, selectColorAmount, selectCupImage64Amount } from '@/redux/features/cup/selectors';
import { 
      Stage, 
      OrbitControls, 
      } from '@react-three/drei';

interface IExperienceProps {
  children: ReactNode;
  rotate: boolean | undefined;
};


const Experience: FC<IExperienceProps> = ({ children, rotate=false }) => {

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <PerspectiveCamera 
        makeDefault
        position={[11, 8, 20]}
        fov={60}
        zoom={1.9}
      />
        { children }
      <OrbitControls
        makeDefault
        autoRotate={rotate}
        autoRotateSpeed={-3}
      />
    </>
  );
};

export default Experience;
/*
      <Stage shadows={false} adjustCamera={1.2}>
        { children }
      </Stage>
*/