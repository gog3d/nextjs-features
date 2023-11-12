'use client'
import { FC, ReactNode } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { 
      Stage, 
      OrbitControls, 
      } from '@react-three/drei';

interface IExperienceProps {
  children: ReactNode;
};

const Experience: FC<IExperienceProps> = ({ children }) => {

  return (
    <>
      <Stage shadows={false} adjustCamera={1.2}>
        { children }
      </Stage>
      <OrbitControls
        makeDefault
        autoRotate={true}
        autoRotateSpeed={-3}
      />
    </>
  );
};

export default Experience;
