import { FC, ReactNode, useState, useEffect, useCallback } from 'react';
import styles from './header-wrapper-mobile.module.css';

interface IHeaderWrapperMobileProps {
  children: ReactNode;
};

const HeaderWrapperMobile: FC<IHeaderWrapperMobileProps> = ({children}) => {

  const [y, setY] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);
 
  const handleNavigation = useCallback(
//    (e: React.UIEvent<HTMLElement>): void => {
  ( ) => {
//      const window = e.currentTarget;
      console.log(window?.pageYOffset)
      if (y > window?.pageYOffset) {
        console.log("scrolling up");
        setScrollUp(true);
      } else if (y < window?.pageYOffset) {
        console.log("scrolling down");
        setScrollUp(false);
      }
      setY(window?.pageYOffset);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);
  
  return (
    <header className={`${styles['header']} ${scrollUp ? styles['sticky'] : ''}`}>
      {children}
    </header>
  );
};

export default HeaderWrapperMobile;