import { FC, ReactNode } from 'react';
import styles from './button-connect.module.css';

import Link from 'next/link';

interface IButtonConnectProps {
//  children: ReactNode;
  text: string;
  link: string;
}

const ButtonConnect: FC<IButtonConnectProps> = ({link, text}) => {
  return (
      <Link href={link}>
        <div className={styles['button-connect']}>
          {text}
        </div>
      </Link>
  );
};

export default ButtonConnect;
