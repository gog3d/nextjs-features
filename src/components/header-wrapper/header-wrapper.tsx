import { FC, ReactNode, useState, useEffect, useCallback } from 'react';
import styles from './header-wrapper.module.css';

interface IHeaderWrapperProps {
  children: ReactNode;
};

const HeaderWrapper: FC<IHeaderWrapperProps> = ({children}) => {

  const [y, setY] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);
 
  const handleNavigation = useCallback(() => {
      if (y > window?.pageYOffset) {
        setScrollUp(true);
      } else if (y < window?.pageYOffset) {
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

export default HeaderWrapper;