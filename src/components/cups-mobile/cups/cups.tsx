import { FC, ReactNode } from 'react';
import styles from './cups.module.css';

interface TC {
  children: ReactNode;
}


const Cups: FC <TC> = ({children}) => {
  return (
    <main className={styles['cups']}>
      <div className={styles['cups__menu']}>
        {children}
      </div>
    </main>

  );
};

export default Cups;