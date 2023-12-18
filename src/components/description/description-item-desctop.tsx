import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './description-item-desctop.module.css';


interface IDescriptionItemDesctopProps {
  title: string | undefined;
  subtitles: Array<string> | undefined;
}

const DescriptionItemDesctop: FC<IDescriptionItemDesctopProps> = ({title, subtitles}) => {
  return (
    <div className={styles['description']}>
      <h2  className={styles['description__title']}>{title}</h2>
      <h3  className={styles['description__subtitles']}>
        {
          subtitles ? subtitles.map((subtitle, index) => 
            <p key={index}>{subtitle}</p>
          ) : null
        }
      </h3>
    </div>
  );
};

export default DescriptionItemDesctop;