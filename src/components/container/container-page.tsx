import { FC, ReactNode } from 'react';
import styles from './container-page.module.css';

interface IContainerPageProps {
  children: ReactNode;
}

const ContainerPage: FC<IContainerPageProps> = ({children}) => {
  return (
    <div className={styles['container-page']}>
      {children}
    </div>
  );
};

export default ContainerPage;