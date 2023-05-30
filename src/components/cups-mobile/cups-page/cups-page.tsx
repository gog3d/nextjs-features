import { FC, ReactNode } from 'react';
import styles from './cups-page.module.css';

interface TC {
  children: ReactNode;
}


const CupsPage: FC <TC> = ({children}) => {
  return (
    <div className={styles['page']}>
       {children}
    </div>
  );
};

export default CupsPage;