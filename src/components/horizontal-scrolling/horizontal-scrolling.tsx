import { FC, ReactNode, useEffect } from 'react';
import styles from './horizontal-scrolling.module.css';
import SrollingTextElips from '../icons/scrolling-text-elips';

interface IHorizontalScrollingProps {
//  children: ReactNode;
  textArray: Array<string>;
}

const HorizontalScrolling: FC<IHorizontalScrollingProps> = ({textArray}) => {
  return (
    <div className={styles['scroll']}>
      <div className={styles['scroll-container']}>
        <div className={styles['scroll-text']}>
          {
            textArray.map((text, index) => 
              <div key={index} className={styles['scroll-text-container']}>
                <span>{text}</span><SrollingTextElips />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrolling;
