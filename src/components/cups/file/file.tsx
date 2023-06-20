import { FC, ReactNode } from 'react';
import styles from './file.module.css';
import ClipIcon from '../icons/clip-icon';
import BasketIcon from '../icons/basket-icon';

interface IFileProps {
  children: ReactNode;
}

const File = () => {
  return (
    <div className={styles['file__container']}>
      <div className={styles['file']}>
        <label className={styles['file__label']}>
          <div className={styles['file__label_svg']}>
            <ClipIcon />
          </div>
          <p className={styles['file__label_text']}>Выбрать файл</p>
          <input className={styles['file__input']} type="file"></input>
        </label>
      </div>
      <button className={styles['file_delete-button']}>
        <BasketIcon />
      </button>
    </div>
  );
};

export default File;