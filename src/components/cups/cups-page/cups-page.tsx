import { FC, ReactNode } from 'react';
import styles from './cups-page.module.css';

interface ICupsPageProps {
  children: ReactNode;
}


const CupsPage: FC<ICupsPageProps> = ({children}) => {
  return (
    <div className={styles['page']}>
       {children}
    </div>
  );
};

export default CupsPage;