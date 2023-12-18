import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-policy.module.css';

interface IPageContentWrapperPolicyProps {
  children: ReactNode;
}

const PageContentWrapperPolicy: FC<IPageContentWrapperPolicyProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperPolicy;