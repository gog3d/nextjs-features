import styles from './canvas-container.module.css';

const CanvasContainer = () => {
  return (
    <div className={styles['canvas-container']}>
      <img className={styles['canvas-container__image']} src="/cups-mobile/media/constructor-cup.png" alt="constructor-cup"></img>
    </div>
  );
};

export default CanvasContainer;