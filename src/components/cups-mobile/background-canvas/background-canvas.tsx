import { FC, ReactNode } from 'react';
import styles from './background-canvas.module.css';
import BigPlusIcon from '../icons/big-plus-icon';
import BigMinusIcon from '../icons/big-minus-icon';

interface IBackgroundCanvasProps {
  children: ReactNode;
}

const BackgroundCanvasProp: FC<IBackgroundCanvasProps> = ({children}) => {
  return (
    <div className={styles['background__canvas-container']}>
      <div className={styles['background__canvas']}>
        {children}
      </div>
      <button className={`${styles['background__canvas-button']} ${styles['background__canvas-button_minus']}`}>
        <BigMinusIcon/>
      </button>
      <button className={`${styles['background__canvas-button']} ${styles['background__canvas-button_plus']}`}>
        <BigPlusIcon/>
      </button>
    </div>
  );
};

export default BackgroundCanvasProp;