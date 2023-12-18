import { FC, ReactNode } from 'react';
import styles from './container-horizontal-scrolling.module.css';

interface IContainerHorizontalScrollingProps {
  children: ReactNode;
}

const ContainerHorizontalScrolling: FC<IContainerHorizontalScrollingProps> = ({children}) => {
  return (
    <div className={styles['container-horizontal-scrolling']}>
      {children}
    </div>
  );
};

export default ContainerHorizontalScrolling;