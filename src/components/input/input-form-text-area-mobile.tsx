import { FC, ReactNode } from 'react';
import styles from './input-form-text-area-mobile.module.css';

interface IInputFormTextAreaMobileProps {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

const InputFormTextAreaMobile: FC<IInputFormTextAreaMobileProps> = ({ value, handleChange }) => {
  return (
    <textarea 
      wrap='hard'
      cols={20}
      rows={2}
      onChange={handleChange} 
      value={value} 
    >
    </textarea>
  );
}

export default InputFormTextAreaMobile;