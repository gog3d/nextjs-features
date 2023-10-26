import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-contacts.module.css';

interface IPageContentWrapperContactsProps {
  children: ReactNode;
}

const PageContentWrapperContacts: FC<IPageContentWrapperContactsProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperContacts;