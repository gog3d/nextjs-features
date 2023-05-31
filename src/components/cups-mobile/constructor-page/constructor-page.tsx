import { FC, ReactNode } from 'react';
import styles from './constructor-page.module.css';

interface IConstructorPageProps {
  children: ReactNode;
}


const ConstructorPage: FC<IConstructorPageProps> = ({children}) => {

  return (
    <div className={styles['page_constructor']}>
      {children}
    </div>
  );
};

export default ConstructorPage;