import styles from './color-apply.module.css';

const ColorApply = () => {
  return (
    <div className={styles['color__apply-container']}>
      <button className={styles['color__apply-button']}>Применить</button>
    </div>
  );
};

export default ColorApply;