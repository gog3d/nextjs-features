import { FC, ReactNode } from 'react';
import styles from './constructor-page.module.css';

const ConstructorPage: FC<ReactNode> = ({children}) => {

  return (
    <div className={styles['page_constructor']}>
      {children}
    </div>
  );
};

export default ConstructorPage;