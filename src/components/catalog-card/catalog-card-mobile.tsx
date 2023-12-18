import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './catalog-card-mobile.module.css';


interface ICatalogCardMobileProps {
  type: string;
  title: string;
  link: string;
  children: ReactNode;
}

const CatalogCardMobile: FC<ICatalogCardMobileProps> = ({type, title, link, children}) => {
  return (
    <Link className={`${styles['card']} ${styles[type]}`} href={link}>
      {children}
      <div className={styles['card-text']}>
        {title}
      </div>
    </Link>
  );
};

export default CatalogCardMobile;