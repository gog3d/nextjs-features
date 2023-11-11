import { FC, ReactNode } from 'react';
import styles from './input-form-mobile.module.css';

interface IInputFormMobileProps {
  value: string;
  type: string | undefined;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputFormMobile: FC<IInputFormMobileProps> = ({ placeholder, handleChange, type='text', value='' }) => {
  return (
    <div  className={styles['input-wrapper']}>
      <input 
        value={value}
        className={styles['input']}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputFormMobile;