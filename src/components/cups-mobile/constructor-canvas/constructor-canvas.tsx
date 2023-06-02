import { FC, ReactNode } from 'react';
import styles from './constructor-canvas.module.css';
import BigPlusIcon from '../icons/big-plus-icon';
import BigMinusIcon from '../icons/big-minus-icon';

interface IConstructorCanvasProps {
  children: ReactNode;
}

const ConstructorCanvas: FC<IConstructorCanvasProps> = ({children}) => {
  return (
    <div className={styles['constructor__canvas-container']}>
      <div className={styles['constructor__canvas']}>
        {children}
      </div>
      <button className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_minus']}`}>
        <BigMinusIcon/>
      </button>
      <button className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_plus']}`}>
        <BigPlusIcon/>
      </button>
    </div>
  );
};

export default ConstructorCanvas;