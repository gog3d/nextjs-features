import { FC, ReactNode } from 'react';
import styles from './button-form.module.css';

interface IButtonFormProps {
  text: string;
}

const ButtonForm: FC<IButtonFormProps> = ({text}) => {
  return (
    <button className={styles['button']}>
      {text}
    </button>
  );
};

export default ButtonForm;

