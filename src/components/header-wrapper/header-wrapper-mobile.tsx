import { FC, ReactNode } from 'react';
import styles from './header-wrapper-mobile.module.css';

interface IHeaderWrapperMobileProps {
  children: ReactNode;
};

const HeaderWrapperMobile: FC<IHeaderWrapperMobileProps> = ({children}) => {
  return (
    <div className={styles['header']}>
      {children}
    </div>
  );
};

export default HeaderWrapperMobile;