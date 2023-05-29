import styles from './cups-page.module.css';

const CupsPage = ({children}) => {
  return (
    <div className={styles['page']}>
       {children}
    </div>
  );
};

export default CupsPage;