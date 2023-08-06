import { FC, ReactNode } from 'react';
import styles from './form-wrapper-mobile.module.css';

interface IFormWrapperMobileProps {
  children: ReactNode;
  action: string;
}

const FormWrapperMobile: FC<IFormWrapperMobileProps> = ({children, action}) => {
  return (
    <form action={action} className={styles['form-wrapper']}>
      {children}
    </form>
  );
};

export default FormWrapperMobile;