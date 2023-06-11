'use client'
import { FC, ReactNode } from 'react';

import { 
      Stage, 
      OrbitControls, 
      } from '@react-three/drei';

interface IExperienceProps {
  children: ReactNode;
};
/*
      <Stage shadows={false}>
        { children }
      </Stage>
      <OrbitControls
        makeDefault
        autoRotate={true}
        autoRotateSpeed={-3}
      />

*/

const Experience: FC<IExperienceProps> = ({ children }) => {

  return (
    <>
      <Stage shadows={false}>
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
