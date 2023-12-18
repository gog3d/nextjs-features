import { FC, ReactNode } from 'react';
import styles from './input-form-wrapper-text-area-mobile.module.css';

interface IInputFormWrapperTextAreaMobileProps {
  children: ReactNode;
};

const InputFormWrapperTextAreaMobile: FC<IInputFormWrapperTextAreaMobileProps> = ({children}) => {
  return (
    <div className={styles['textarea-wrapper']}>
      { children }
    </div>
  );
}

export default InputFormWrapperTextAreaMobile;