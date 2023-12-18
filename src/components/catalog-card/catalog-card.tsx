import React, { FC, ReactNode, useState,useContext } from 'react';
import Link from 'next/link';
import styles from './catalog-card.module.css';


interface ICatalogCardProps {
  type: string;
  title: string;
  link: string;
  children: ReactNode;
}

const CatalogCard: FC<ICatalogCardProps> = ({ children, type, title, link,}) => {
  return (
    <Link className={`${styles['card']} ${styles[type]}`} href={link}>
      {children}
      <div className={styles['card-text']}>
        {title}
      </div>
    </Link>
  );
};

export default CatalogCard;