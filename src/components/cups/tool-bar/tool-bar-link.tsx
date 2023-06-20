import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

import styles from './tool-bar.module.css';
import Link from 'next/link';
import PlusIcon from '../icons/plus-icon';

const ToolBar = () => {
  const { asPath } = useRouter();

  return (
    <nav className={styles['tool-bar']}>
      <ul className={styles['tool-bar__container']}>
        <li className={styles['tool-bar__item']}>
          <Link className={styles['tool-bar__item_link']} href={`${asPath}/color`}>
            <PlusIcon />
            <span>Цвет</span>
          </Link>
        </li>
        <li className={styles['tool-bar__item']}>
          <Link className={styles['tool-bar__item_link']} href={`${asPath}/background`}>
            <PlusIcon />
            <span>Фон</span>
          </Link>
        </li>
        <li className={styles['tool-bar__item']}>
          <Link className={styles['tool-bar__item_link']} href={`${asPath}/logo`}>
            <PlusIcon />
            <span>Лого</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ToolBar;
