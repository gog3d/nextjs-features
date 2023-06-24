import { FC, ReactNode, useCallback, SetStateAction, } from 'react';
import styles from './constructor-canvas.module.css';
import BigPlusIcon from '../icons/big-plus-icon';
import BigMinusIcon from '../icons/big-minus-icon';

interface IConstructorCanvasProps {
  children: ReactNode | null;
  zoom: number | null;
  setZoom: React.Dispatch<SetStateAction<number>> | null;
}

const ConstructorCanvas: FC<IConstructorCanvasProps> = ({children, zoom, setZoom}) => {
  
  const zoomIn = useCallback(()=>{
    if(zoom && setZoom){
      setZoom(zoom + 0.03);
    }
  }, [zoom, setZoom]);

  const zoomOut = useCallback(()=>{
    if(setZoom && zoom && zoom > 0.2) {
      setZoom(zoom - 0.03);
    }
  }, [zoom, setZoom]);

  return (
    <div className={styles['constructor__canvas-container']}>
      <div className={styles['constructor__canvas']}>
        {children}
      </div>
      <button 
        className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_minus']}`}
        onClick={zoomOut}
      >
        <BigMinusIcon/>
      </button>
      <button 
        className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_plus']}`}
        onClick={zoomIn}
      >
        <BigPlusIcon/>
      </button>
    </div>
  );
};

export default ConstructorCanvas;