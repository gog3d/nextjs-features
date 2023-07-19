import { FC, ReactNode } from 'react';
import styles from './button-mobile.module.css';

import Link from 'next/link';

interface IButtonLinkMobileProps {
  children: ReactNode;
  link: string;
}

const ButtonLinkMobile: FC<IButtonLinkMobileProps> = ({children, link}) => {
  return (
    <Link className={styles['button']} href={link}>
      {children}
    </Link>
  );
};

export default ButtonLinkMobile;