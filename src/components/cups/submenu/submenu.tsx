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
    <Link className={styles['submenu']} href={link}>
      <p className={styles['submenu_title']}>{title}</p>
      <div className={styles['submenu_link']}>
        <SubMenuLinkIcon />
      </div>
    </Link>
  );
};

export default SubMenu;