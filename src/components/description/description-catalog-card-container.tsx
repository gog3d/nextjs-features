import { FC, ReactNode } from 'react';
import styles from './description-catalog-card-container.module.css';

interface IDescriptionCatalogCardContainerProps {
  children: ReactNode;
}

const DescriptionCatalogCardContainer: FC<IDescriptionCatalogCardContainerProps> = ({children}) => {
  return (
    <div className={styles['description']}>
      {children}
    </div>
  );
};

export default DescriptionCatalogCardContainer;