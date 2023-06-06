import { FC, ReactNode } from 'react';
import styles from './image-cropping.module.css';

interface IImageCroppingProps {
  children: ReactNode;
  title: string;
}


const ImageCropping: FC<IImageCroppingProps> = ({children, title}) => {
  return (
    <main className={styles['image-cropping']}>
      <p className={styles['image-cropping__title']}>{title}</p>
      {children}
    </main>
  );
};

export default ImageCropping;