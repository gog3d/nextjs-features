import { FC, ReactNode } from 'react';
import styles from './image-cropping.module.css';

interface IImageCroppingProps {
  children: ReactNode;
}


const ImageCropping: FC<IImageCroppingProps> = ({children}) => {
  return (
    <main className={styles['image-cropping']}>
      <p className={styles['image-cropping__title']}>Загрузить лого</p>
      {children}
    </main>
  );
};

export default ImageCropping;