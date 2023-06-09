import { FC, ReactNode } from 'react';
import Image from 'next/image';
import styles from './canvas-container.module.css';

interface ICanvasContainerProps {
  children: ReactNode;
};

const CanvasContainer: FC<ICanvasContainerProps> = ({children}) => {

  return (
    <div className={styles['canvas-container']}>
      {children}
    </div>
  );
};

export default CanvasContainer;