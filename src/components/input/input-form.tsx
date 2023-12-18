import { FC, ReactNode } from 'react';
import styles from './input-form.module.css';

interface IInputFormProps {
  value: string;
  type: string | undefined;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputForm: FC<IInputFormProps> = ({ placeholder, handleChange, type='text', value='' }) => {
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

export default InputForm;