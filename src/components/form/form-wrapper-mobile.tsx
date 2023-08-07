import { FC, ReactNode } from 'react';
import styles from './form-wrapper-mobile.module.css';

interface IFormWrapperMobileProps {
  children: ReactNode;
//  action: string;
  onSubmit: (e: React.SyntheticEvent) => void;
}

const FormWrapperMobile: FC<IFormWrapperMobileProps> = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className={styles['form-wrapper']}>
      {children}
    </form>
  );
};

export default FormWrapperMobile;