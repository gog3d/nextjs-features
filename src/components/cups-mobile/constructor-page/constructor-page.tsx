import { FC, ReactNode } from 'react';
import styles from './constructor-page.module.css';

interface TC {
  children: ReactNode;
}


const ConstructorPage: FC<TC> = ({children}) => {

  return (
    <div className={styles['page_constructor']}>
      {children}
    </div>
  );
};

export default ConstructorPage;