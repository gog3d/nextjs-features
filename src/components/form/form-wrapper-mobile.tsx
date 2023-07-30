import { FC, ReactNode } from 'react';
import styles from './form-wrapper-mobile.module.css';

interface IFormWrapperMobileProps {
  children: ReactNode;
}

const FormWrapperMobile: FC<IFormWrapperMobileProps> = ({children}) => {
  return (
    <form className={styles['form-wrapper']}>
      {children}
    </form>
  );
};

export default FormWrapperMobile;