import { FC, ReactNode } from 'react';
import styles from './header-search-wrapper-mobile.module.css';

interface IHeaderSearchWrapperMobileProps {
  children: ReactNode;
};

const HeaderSearchWrapperMobile: FC<IHeaderSearchWrapperMobileProps> = ({children}) => {
  return (
    <header className={styles['header']}>
      <div className={styles['header-wrapper']}>
        {children}
      </div>
    </header>
  );
};

export default HeaderSearchWrapperMobile;