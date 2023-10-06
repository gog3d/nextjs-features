import { FC, ReactNode, useEffect, useState } from 'react';
import styles from './horizontal-scrolling.module.css';
import SrollingTextElips from '../icons/scrolling-text-elips';

interface IHorizontalScrollingProps {
//  children: ReactNode;
  textArray: Array<string>;
}

const HorizontalScrolling: FC<IHorizontalScrollingProps> = ({textArray}) => {
  const maxScrollWidth = 808;
  const maxPageWidth = 1172;
  const [scrollWidth, setScrollWidth] = useState(maxScrollWidth);

  const updateDimensions = () => {
    const width = window.innerWidth;
    width < maxPageWidth ? setScrollWidth(maxScrollWidth - maxPageWidth  + width) : '';
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  return (
    <div className={styles['scroll']}>
      <div className={styles['scroll-container']} style={{width: `${scrollWidth}px`}}>
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
