import { FC, ReactNode } from 'react';
//import Link from 'next/link';
import styles from './text-block-catalog-item-mobile.module.css';
//import DownChevronMobileIcon from '@/components/icons/down-chevron-mobile-icon';

interface ITextBlockCatalogItemMobileProps {
  title: string | undefined;
  background: {
    color_1: string;
    color_2: string;
  };
}
// style={{background: `${background.color_1}`}}
const TextBlockCatalogItemMobile: FC<ITextBlockCatalogItemMobileProps> = ({title, background}) => {
  return (
    <div className={styles['text-block']} style={{background: `${background.color_1}`}}>
      <p className={styles['text-block__text']}>
        {title}
      </p>
    </div>
  );
};

export default TextBlockCatalogItemMobile;