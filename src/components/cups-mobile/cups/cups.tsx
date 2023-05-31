import { FC, ReactNode } from 'react';
import styles from './cups.module.css';

interface ICupsProps {
  children: ReactNode;
}


const Cups: FC<ICupsProps> = ({children}) => {
  return (
    <main className={styles['cups']}>
      <div className={styles['cups__menu']}>
        {children}
      </div>
    </main>

  );
};

export default Cups;