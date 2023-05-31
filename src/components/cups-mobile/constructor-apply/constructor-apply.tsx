import styles from './constructor-apply.module.css';

const ConstructorApply = () => {
  return (
    <div className={styles['constructor__apply-container']}>
      <button className={styles['constructor__apply-button']}>Применить</button>
    </div>
  );
};

export default ConstructorApply;