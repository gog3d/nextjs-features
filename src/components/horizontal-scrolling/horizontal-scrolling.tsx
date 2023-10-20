"use client";
import { FC, ReactNode, useEffect, useState, useCallback } from 'react';
import styles from './horizontal-scrolling.module.css';
import SrollingTextElips from '../icons/scrolling-text-elips';

interface IHorizontalScrollingProps {
//  children: ReactNode;
  textArray: Array<string>;
}

const HorizontalScrolling: FC<IHorizontalScrollingProps> = ({textArray}) => {
  const maxScrollWidth = 808;
  const maxPageWidth = 1172;
  const [scrollWidth, setScrollWidth] = useState(null);

  const updateDimensions = useCallback(() => {
    "use client";
    const maxScrollWidth = 808;
    const maxPageWidth = 1172;
    const width = window.innerWidth;
    Number(width) < maxPageWidth ? setScrollWidth(maxScrollWidth - maxPageWidth  + width) : '';
  }, [])

  useEffect(() => {
    const width = window.innerWidth;
    updateDimensions()
  }, [scrollWidth]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
  <>
  { !!scrollWidth && <div className={styles['scroll']}>
      <div className={styles['scroll-container']} style={{width: `${scrollWidth}px`}}>
          {'hello'}
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
    }
  </>
  );
};

export default HorizontalScrolling;
