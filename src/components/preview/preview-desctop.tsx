"use client";
import { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './preview-desctop.module.css';

interface IPreviewDesctopProps {
  textTop: string | undefined;
  textBottom: string | undefined;
  imagePath: string | undefined;
  imageAlt: string | undefined;
  constructorHref: string;
//  children: ReactNode;
}

const PreviewDesctop: FC<IPreviewDesctopProps> = ({textTop, textBottom, imagePath, imageAlt='image', constructorHref=''}) => {
  return (
    <div className={styles['preview']}>
      <p className={styles['preview_text-top']}></p>
      <div className={styles['preview__img-container']}>
        <Image
           src={`/media/${imagePath}`}
           alt={imageAlt}
           width={568}
           height={416}
        />
      </div>
      <p className={styles['preview_text']}></p>
      <p className={styles['preview_text']}></p>
      <p className={styles['preview_text']}></p>
      <div className={styles['preview__button-container']}>
      </div>
    </div>
  );
};

export default PreviewDesctop;

/*
        <Link href={constructorHref}>
          <button className={styles['preview_button']}>
            Попробовать
          </button>
        </Link>

  return (
    <div className={styles['preview']}>
      <p className={styles['preview_text-top']}>{`Посмотрите как будее выглядеть ${textTop}`}</p>
      <div className={styles['preview__img-container']}>
        <Image
           src={`/media/${imagePath}`}
           alt={imageAlt}
           width={568}
           height={416}
        />
      </div>
      <p className={styles['preview_text']}>{`Выберите файл изображения дизайна ${textBottom}`}</p>
      <p className={styles['preview_text']}>Допустимые форматы: jpg, gif, png, ai, cdr, pdf.</p>
      <p className={styles['preview_text']}>Максимальный размер: 10 МБ.</p>
      <div className={styles['preview__button-container']}>
        <button className={styles['preview_button']}>
            Попробовать
        </button>
      </div>
    </div>
  );



*/
