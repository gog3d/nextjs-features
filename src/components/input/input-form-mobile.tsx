import { FC, ReactNode } from 'react';
import styles from './input-form-mobile.module.css';

interface IInputFormMobileProps {
  type: string | undefined;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputFormMobile: FC<IInputFormMobileProps> = ({ placeholder, handleChange, type='text' }) => {
  return (
    <div  className={styles['input-wrapper']}>
      <input 
        className={styles['input']}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputFormMobile;