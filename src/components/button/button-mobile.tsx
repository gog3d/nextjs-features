import { FC, ReactNode } from 'react';
import styles from './button-mobile.module.css';

interface IButtonMobileProps {
//  children: ReactNode;
  text: string;
  onClickHandler: () => void;
}

const ButtonMobile: FC<IButtonMobileProps> = ({text, onClickHandler}) => {
  return (
    <button className={styles['button']} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default ButtonMobile;
