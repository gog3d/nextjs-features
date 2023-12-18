import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './description-item-mobile.module.css';


interface IDescriptionCupMobileProps {
  title: string | undefined;
 // subtitles: Array<string> | undefined;
}

const DescriptionCupMobile: FC<IDescriptionCupMobileProps> = ({title}) => {
  return (
    <div className={styles['description']}>
      <h2  className={styles['description__title']}>{title}</h2>
    </div>
  );
};

export default DescriptionCupMobile;