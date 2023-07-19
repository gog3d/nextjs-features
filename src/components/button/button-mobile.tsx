import { FC, ReactNode } from 'react';
import styles from './button-mobile.module.css';

interface IButtonMobileProps {
  children: ReactNode;
  onClick: () => void;
}

const ButtonMobile: FC<IButtonMobileProps> = ({children, onClick}) => {
  return (
    <button className={styles['button']} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonMobile;
