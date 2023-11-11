import { FC, ReactNode } from 'react';
import styles from './modal-mobile.module.css';

interface IModalMobileProps {
  children: ReactNode;
  modalOn: boolean;
  modalClick: () => void | undefined;

}

const ModalMobile: FC<IModalMobileProps> = ({children, modalOn=false, modalClick}) => {
  return (
    <div 
      className={
        modalOn ? 
        `${styles['modal-window']} ${styles['modal-visible']}` : 
        `${styles['modal-window']} ${styles['modal-hidden']}`
      }
    >
      <div className={styles['modal-wrapper']}>
        <div 
          className={styles['modal-background']}
          onClick={modalClick}
        ></div>
        {children}
      </div>
    </div>
  );
};

export default ModalMobile;