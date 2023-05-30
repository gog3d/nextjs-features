import { FC, ReactNode } from 'react';
import styles from './color.module.css';

interface TC {
  children: ReactNode;
}


const Color: FC<TC> = ({children}) => {
  return (
    <main className={styles['color']}>
      <p className={styles['color__title']}>Выбрать цвет</p>
      {children}
    </main>
  );
};

export default Color;