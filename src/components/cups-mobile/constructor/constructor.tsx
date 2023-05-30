import { FC, ReactNode } from 'react';
import styles from './constructor.module.css';

interface TC {
  children: ReactNode;
}


const Constructor: FC<TC> = ({children}) => {
  return (
    <div className={styles['constructor']}>
      {children}
    </div>
  );
};

export default Constructor;