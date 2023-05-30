import { FC, ReactNode } from 'react';
import styles from './constructor.module.css';

const Constructor: FC<ReactNode> = ({children}) => {
  return (
    <div className={styles['constructor']}>
      {children}
    </div>
  );
};

export default Constructor;