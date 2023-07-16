import { FC, ReactNode } from 'react';
import styles from './page-content-mobile.module.css';

interface IPageContentMobileProps {
  children: ReactNode;
}

const PageContentMobile: FC<IPageContentMobileProps> = ({children}) => {
  return (
    <div className={styles['page-content']}>
      {children}
    </div>
  );
};

export default PageContentMobile;