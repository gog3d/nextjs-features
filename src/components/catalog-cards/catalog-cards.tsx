import { FC, ReactNode } from 'react';
import styles from './catalog-cards.module.css';

interface ICatalogCardsProps {
  children: ReactNode;
}

const CatalogCards: FC<ICatalogCardsProps> = ({children}) => {
  return (
    <div className={styles['cards']}>
      {children}
    </div>
  );
};

export default CatalogCards;