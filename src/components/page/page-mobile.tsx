import { FC, ReactNode } from 'react';
import styles from './page-mobile.module.css';

interface IPageMobileProps {
  children: ReactNode;
}

const PageMobile: FC<IPageMobileProps> = ({children}) => {
  return (
    <div className={styles['page']}>
      {children}
    </div>
  );
};

export default PageMobile;