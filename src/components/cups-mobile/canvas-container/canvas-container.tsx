import Image from 'next/image';
import styles from './canvas-container.module.css';
// className={styles['canvas-container__image']}

const CanvasContainer = () => {
  return (
    <div className={styles['canvas-container']}>
      <Image 
        src="/cups-mobile/media/constructor-cup.png" 
        alt="constructor-cup"
        width={328}
        height={486}
        />
    </div>
  );
};

export default CanvasContainer;