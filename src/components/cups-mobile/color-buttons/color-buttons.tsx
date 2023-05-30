import { FC, ReactNode } from 'react';
import styles from './color-buttons.module.css';

interface TC {
  children: ReactNode;
}


const ColorButtons: FC<TC> = ({children}) => {
  return (
    <div className={styles['color__buttons']}>
      {children}
    </div>
  );
};

export default ColorButtons;