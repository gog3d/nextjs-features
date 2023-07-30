import { FC, ReactNode } from 'react';
import styles from './input-text-mobile.module.css';

interface IInputTextMobileProps {
  type: string | undefined;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputTextMobile: FC<IInputTextMobileProps> = ({ placeholder, type='text', handleChange}) => {
  return (
    <input 
      className={styles['input']}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default InputTextMobile;