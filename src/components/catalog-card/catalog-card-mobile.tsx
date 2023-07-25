import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './catalog-card-mobile.module.css';


interface ICatalogCardMobileProps {
  name: string;
  text: string;
  link: string;
  children: ReactNode;
}

const CatalogCardMobile: FC<ICatalogCardMobileProps> = ({name, text, link, children}) => {
  return (
    <Link className={`${styles['card']} ${styles[name]}`} href={link}>
      {children}
      <div className={styles['card-text']}>
        {text}
      </div>
    </Link>
  );
};

export default CatalogCardMobile;