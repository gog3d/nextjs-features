import styles from './header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BackLinkIcon from '../icons/back-link-icon';
import BurgerMenuIcon from '../icons/burger-menu-icon';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles['header']}>
      <div className={styles['header_goback']} onClick={()=> router.back()}>
        <BackLinkIcon />
      </div>
      <p className={styles['header_title']}>Стаканы</p>
      <div className={styles['header_burger-menu']}>
        <BurgerMenuIcon/>
      </div>
    </header>
  );
};

export default Header;