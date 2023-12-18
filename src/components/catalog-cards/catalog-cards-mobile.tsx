import { FC, ReactNode } from 'react';
import styles from './catalog-cards-mobile.module.css';

interface ICatalogCardsMobileProps {
  children: ReactNode;
}

const CatalogCardsMobile: FC<ICatalogCardsMobileProps> = ({children}) => {
  return (
    <div className={styles['cards']}>
      {children}
    </div>
  );
};

export default CatalogCardsMobile;