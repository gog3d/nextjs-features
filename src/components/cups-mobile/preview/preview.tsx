import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './preview.module.css';

const Preview: FC<string> = ({link}) => {
  return (
    <div className={styles['preview']}>
      <p className={styles['preview_text-top']}>Посмотрите, как будет выглядеть Ваш новый стаканчик!</p>
      <div className={styles['preview__img-container']}>
        <img src="/cups-mobile/media/cup.png" alt="cup image"></img>
      </div>
      <p className={styles['preview_text']}>Выберите файл изображения дизайна вашего стакана.</p>
      <p className={styles['preview_text']}>Допустимые форматы: jpg, gif, png, ai, cdr, pdf.</p>
      <p className={styles['preview_text']}>Максимальный размер: 10 МБ.</p>
      <div className={styles['preview__button-container']}>
        <Link href={link}>
          <button className={styles['preview_button']}>
            Попробовать
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Preview;