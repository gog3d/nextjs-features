import { FC, ReactNode } from 'react';
import styles from './button-connect-mobile.module.css';

import Link from 'next/link';

interface IButtonConnectMobileProps {
//  children: ReactNode;
  text: string;
  link: string;
}

const ButtonConnectMobile: FC<IButtonConnectMobileProps> = ({link, text}) => {
  return (
    <Link href={link}>
      <div className={styles['button-connect']}>
        {text}
      </div>
    </Link>
  );
};

export default ButtonConnectMobile;