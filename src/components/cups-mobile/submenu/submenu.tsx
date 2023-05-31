import { FC, ReactNode } from 'react';
import styles from './submenu.module.css';
import Link from 'next/link';

import SubMenuLinkIcon from '../icons/submenu-link-icon';

interface ISubMenuProps {
  title: string;
  link: string;
}


const SubMenu: FC<ISubMenuProps> = ({title, link}) => {
  return (
    <div className={styles['submenu']}>
      <p className={styles['submenu_title']}>{title}</p>
      <Link className={styles['submenu_link']} href={link}>
        <SubMenuLinkIcon />
      </Link>
    </div>
  );
};

export default SubMenu;