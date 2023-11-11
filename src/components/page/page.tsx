import { FC, ReactNode } from 'react';
import styles from './page.module.css';

interface IPageProps {
  children: ReactNode;
}

const Page: FC<IPageProps> = ({children}) => {
  return (
    <div className={styles['page']}>
      {children}
    </div>
  );
};

export default Page;