import { FC, ReactNode } from 'react';
import styles from './image-wrapper-main-mobile.module.css';

interface IImageWrapperMainMobileProps {
  children: ReactNode;
}

const ImageWrapperMainMobile: FC<IImageWrapperMainMobileProps> = ({children}) => {
  return (
    <div className={styles['image-wrapper']}>
      {children}
    </div>
  );
};

export default ImageWrapperMainMobile;