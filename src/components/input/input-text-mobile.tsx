import { FC, ReactNode } from 'react';
import styles from './input-text-mobile.module.css';

interface IInputTextMobileProps {
  type: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputTextMobile: FC<IInputTextMobileProps> = ({ placeholder, handleChange }) => {
  return (
    <input 
      className={styles['input']}
      type='text'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default InputTextMobile;