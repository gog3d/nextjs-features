import styles from './cups.module.css';

const Cups = ({children}) => {
  return (
    <main className={styles['cups']}>
      <div className={styles['cups__menu']}>
        {children}
      </div>
    </main>

  );
};

export default Cups;