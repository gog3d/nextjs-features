import { FC, ReactNode } from 'react';
import styles from './horizontal-scrolling-mobile.module.css';
import SrollingTextElips from '../icons/scrolling-text-elips';

interface IHorizontalScrollingProps {
//  children: ReactNode;
  textArray: Array<string>;
}

const HorizontalScrollingMobile: FC<IHorizontalScrollingProps> = ({textArray}) => {
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

export default HorizontalScrollingMobile;
