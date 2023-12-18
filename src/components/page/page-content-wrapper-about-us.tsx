import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-about-us.module.css';

interface IPageContentWrapperMainProps {
  children: ReactNode;
}

const PageContentWrapperMain: FC<IPageContentWrapperMainProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperMain;