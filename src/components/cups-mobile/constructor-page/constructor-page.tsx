import styles from './constructor-page.module.css';

const ConstructorPage = ({children}) => {

  return (
    <div className={styles['page_constructor']}>
      {children}
    </div>
  );
};

export default ConstructorPage;