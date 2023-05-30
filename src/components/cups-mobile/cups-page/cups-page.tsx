import { FC, ReactNode } from 'react';
import styles from './cups-page.module.css';

const CupsPage: FC <ReactNode> = ({children}) => {
  return (
    <div className={styles['page']}>
       {children}
    </div>
  );
};

export default CupsPage;