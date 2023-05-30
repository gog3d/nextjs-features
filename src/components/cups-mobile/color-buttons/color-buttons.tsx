import { FC, ReactNode } from 'react';
import styles from './color-buttons.module.css';

const ColorButtons: FC<ReactNode> = ({children}) => {
  return (
    <div className={styles['color__buttons']}>
      {children}
    </div>
  );
};

export default ColorButtons;