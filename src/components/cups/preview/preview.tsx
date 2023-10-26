import { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './preview.module.css';

interface IPreviewProps {
  link: string;
}

const Preview: FC<IPreviewProps> = ({link}) => {
  return (
    <div className={styles['preview']}>
      <p className={styles['preview_text-top']}>Посмотрите, как будет выглядеть Ваш новый стаканчик!</p>
      <div className={styles['preview__img-container']}>
        <Image
           src='/cups/media/cup.png'
           alt='cup image'
           width={152}
           height={202}
        />
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