import { FC, ReactNode } from 'react';
import styles from './horizontal-scrolling.module.css';

interface IHorizontalScrollingProps {
  children: ReactNode;
}

const HorizontalScrolling: FC<IHorizontalScrollingProps> = ({children}) => {
  return (
    <div className={styles['scroll-container']}>
      <div className={styles['scroll-text']}>
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrolling;