import { FC, ReactNode } from 'react';
import styles from './button-link.module.css';

import Link from 'next/link';

interface IButtonLinkProps {
  children: ReactNode;
  link: string;
}

const ButtonLink: FC<IButtonLinkProps> = ({children, link}) => {
  return (
  <div  className={styles['button-link']}>
    <Link href={link}>
      <div className={styles['button-connect']}>
        {children}
      </div>
    </Link>
  </div>
  );
};

export default ButtonLink;