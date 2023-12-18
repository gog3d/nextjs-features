import { FC, ReactNode } from 'react';
import styles from './modal.module.css';

interface IModalProps {
  children: ReactNode;
  modalOn: boolean;
  modalClick: () => void | undefined;

}

const Modal: FC<IModalProps> = ({children, modalOn=false, modalClick}) => {
  return (
    <div 
      className={
        modalOn ? 
        `${styles['modal']} ${styles['modal-visible']}` : 
        `${styles['modal']} ${styles['modal-hidden']}`
      }
    >
      <div className={styles['modal-window']}>
        <div 
          className={styles['modal-background']}
          onClick={modalClick}>
        </div>
        <div className={styles['modal-content']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;