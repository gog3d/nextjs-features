import { FC, ReactNode } from 'react';
import styles from './constructor.module.css';

interface IConstructorProps {
  children: ReactNode;
}


const Constructor: FC<IConstructorProps> = ({children}) => {
  return (
    <div className={styles['constructor']}>
      {children}
    </div>
  );
};

export default Constructor;