import { FC, ReactNode } from 'react';
//import { useRouter } from 'next/router';
import styles from './tool-bar.module.css';
//import Link from 'next/link';
import PlusIcon from '../icons/plus-icon';

import { useCustomization } from '@/context/customization';

const ToolBar = () => {
//  const { asPath } = useRouter();
  const {
    constructorView, 
    setConstructorView,
    colorView, 
    setColorView,
    backgroundView, 
    setBackgroundView,
    logoView,
    setLogoView
  } = useCustomization();

  const switchToColor = () => {
    setConstructorView(false);
    setColorView(true);
    setBackgroundView(false);
    setLogoView(false);
  };

  const switchTotBackground = () => {
    setConstructorView(false);
    setColorView(false);
    setBackgroundView(true);
    setLogoView(false);
  };

  const switchToLogo = () => {
    setConstructorView(false);
    setColorView(false);
    setBackgroundView(false);
    setLogoView(true);
  };

  return (
    <nav className={styles['tool-bar']}>
      <ul className={styles['tool-bar__container']}>
        <li className={styles['tool-bar__item']}>
          <button className={styles['tool-bar__item_link']} onClick={switchToColor}>
            <PlusIcon />
            <span>Цвет</span>
          </button>
        </li>
        <li className={styles['tool-bar__item']}>
          <button className={styles['tool-bar__item_link']}  onClick={switchTotBackground}>
            <PlusIcon />
            <span>Фон</span>
          </button>
        </li>
        <li className={styles['tool-bar__item']}>
          <button className={styles['tool-bar__item_link']}  onClick={switchToLogo}>
            <PlusIcon />
            <span>Лого</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ToolBar;
