import { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './preview-mobile.module.css';

interface IPreviewMobileProps {
  textTop: string | undefined;
  textBottom: string | undefined;
  imagePath: string | undefined;
  imageAlt: string | undefined;
  constructorHref: string;
}

const PreviewMobile: FC<IPreviewMobileProps> = ({textTop, textBottom, imagePath, imageAlt='image', constructorHref='/'}) => {
  return (
    <div className={styles['preview']}>
      <p className={styles['preview_text-top']}></p>
      <p className={styles['preview_text-top']}></p>
      <div className={styles['preview__img-container']}>
        <Image
           src={`/media/${imagePath}`}
           alt={imageAlt}
           width={270}
           height={210}
        />
      </div>
      <p className={styles['preview_text']}></p>
      <p className={styles['preview_text']}></p>
      <p className={styles['preview_text']}></p>
      <p className={styles['preview_text']}></p>
      <div className={styles['preview__button-container']}>
      </div>
    </div>
  );
};

export default PreviewMobile;


/*
  return (
    <div className={styles['preview']}>
      <p className={styles['preview_text-top']}>{'Посмотритеб как будее выглядеть'}</p>
      <p className={styles['preview_text-top']}>{textTop}</p>
      <div className={styles['preview__img-container']}>
        <Image
           src={`/media/${imagePath}`}
           alt={imageAlt}
           width={270}
           height={210}
        />
      </div>
      <p className={styles['preview_text']}>{'Выберите файл изображения дизайна'}</p>
      <p className={styles['preview_text']}>{textBottom}</p>
      <p className={styles['preview_text']}>Допустимые форматы: jpg, gif, png, ai, cdr, pdf.</p>
      <p className={styles['preview_text']}>Максимальный размер: 10 МБ.</p>
      <div className={styles['preview__button-container']}>
        <Link href={constructorHref}>
          <button className={styles['preview_button']}>
            Попробовать
          </button>
        </Link>
      </div>
    </div>
  );
*/