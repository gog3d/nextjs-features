import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './catalog-card-mobile.module.css';


interface ICatalogCardMobileProps {
  text: string;
  link: string;
  children: ReactNode;
}

const CatalogCardMobile: FC<ICatalogCardMobileProps> = ({text, link, children}) => {
  return (
    <Link className={styles['card']} href={link}>
      {children}
      <div className={styles['card-text']}>
        {text}
      </div>
    </Link>
  );
};

export default CatalogCardMobile;