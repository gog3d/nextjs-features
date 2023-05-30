import { FC, ReactNode } from 'react';
import styles from './cups-types.module.css';

interface TC {
  children: ReactNode;
}


const CupsTypes: FC <TC> = ({children}) => {
  return (
    <main className={styles['cup-type']}>
      <div className={styles['cup-type__title']}>
        <p className={styles['cup-type__title_text']}>Двуслойные</p>
      </div>
      <div className={styles['cup-type__menu']}>
        {children}
      </div>
    </main>
  );
};

export default CupsTypes;