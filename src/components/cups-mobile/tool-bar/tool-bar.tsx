import styles from './tool-bar.module.css';
import Link from 'next/link';
import PlusIcon from '../icons/plus-icon';

const ToolBar = ({children}) => {
  return (
    <nav className={styles['tool-bar']}>
      <ul className={styles['tool-bar__container']}>
        <li className={styles['tool-bar__item']}>
          <Link className={styles['tool-bar__item_link']} href='/cups-types/single-layer/1/color'>
            <PlusIcon />
            <span>Цвет</span>
          </Link>
        </li>
        <li className={styles['tool-bar__item']}>
          <Link className={styles['tool-bar__item_link']} href='/cups-types/single-layer/1/background'>
            <PlusIcon />
            <span>Фон</span>
          </Link>
        </li>
        <li className={styles['tool-bar__item']}>
          <Link className={styles['tool-bar__item_link']} href='/cups-types/single-layer/1/logo'>
            <PlusIcon />
            <span>Лого</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ToolBar;
