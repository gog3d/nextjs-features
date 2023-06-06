import { FC, ReactNode } from 'react';
import styles from './cup-types.module.css';

interface ICupTypesProps {
  children: ReactNode;
  title: string;
}


const CupTypes: FC<ICupTypesProps> = ({children, title}) => {
  return (
    <main className={styles['cup-types']}>
      <div className={styles['cup-types__title']}>
        <p className={styles['cup-types__title_text']}>{title}</p>
      </div>
      <div className={styles['cup-types__menu']}>
        {children}
      </div>
    </main>
  );
};

export default CupTypes;