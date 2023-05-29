import styles from './color.module.css';

const Color = ({children}) => {
  return (
    <main className={styles['color']}>
      <p className={styles['color__title']}>Выбрать цвет</p>
      {children}
    </main>
  );
};

export default Color;