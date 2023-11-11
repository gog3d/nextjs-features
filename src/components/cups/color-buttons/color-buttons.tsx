import { FC, ReactNode } from 'react';
import styles from './color-buttons.module.css';

interface IColorButtonsProps {
  children: ReactNode;
}


const ColorButtons: FC<IColorButtonsProps> = ({children}) => {
  return (
    <div className={styles['color__buttons']}>
      {children}
    </div>
  );
};

export default ColorButtons;