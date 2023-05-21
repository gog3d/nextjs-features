import Link from 'next/link';
import styles from "./styles.module.css";
import A from '../components/A.js';

const Header = () => {
  return (
      <header className={styles.header}>
        <A href={"/"} text={'Index'} className={styles.header__link} />
        <A href={"/users"} text={'Users'} className={styles.header__link} />
      </header>
  );
};

export default Header;
