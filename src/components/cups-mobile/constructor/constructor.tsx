import styles from './constructor.module.css';

const Constructor = ({children}) => {
  return (
    <div className={styles['constructor']}>
      {children}
    </div>
  );
};

export default Constructor;