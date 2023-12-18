import { FC, ReactNode } from 'react';
import styles from './button-form-mobile.module.css';

interface IButtonFormMobileProps {
  text: string;
}

const ButtonFormMobile: FC<IButtonFormMobileProps> = ({text}) => {
  return (
    <button className={styles['button']}>
      {text}
    </button>
  );
};

export default ButtonFormMobile;
