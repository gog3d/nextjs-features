import { FC, ReactNode } from 'react';
import styles from './image-wrapper-about-us-mobile.module.css';

interface IImageWrapperAboutUsMobileProps {
  children: ReactNode;
}

const ImageWrapperAboutUsMobile: FC<IImageWrapperAboutUsMobileProps> = ({children}) => {
  return (
    <div className={styles['image-wrapper']}>
      {children}
    </div>
  );
};

export default ImageWrapperAboutUsMobile;