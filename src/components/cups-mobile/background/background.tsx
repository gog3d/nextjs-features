import { FC, ReactNode } from 'react';
import styles from './background.module.css';

interface IBackgroundProps {
  children: ReactNode;
}


const Background: FC<IBackgroundProps> = ({children}) => {
  return (
    <main className={styles['background']}>
      <p className={styles['background__title']}>Загрузить лого</p>
      {children}
    </main>
  );
};

export default Background;