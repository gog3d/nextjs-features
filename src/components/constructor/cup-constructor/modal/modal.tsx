'use client';

import { FC, ReactNode, useContext } from 'react';
//import { useConstructor } from '../constructor';

import styles from './modal.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectModalAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';


export interface IModalProps {
  children: ReactNode;
}

export const Modal: FC<IModalProps> = ({children}) => {

  const modal = useAppSelector((state) => selectModalAmount(state));

  const dispatch = useAppDispatch();
  return (
    <div 
      className={
        modal ? 
        `${styles['modal']} ${styles['modal-visible']}` : 
        `${styles['modal']} ${styles['modal-hidden']}`
      }
    >
      <div className={styles['modal-window']}>
        <div 
          className={styles['modal-background']}
          onClick={() => dispatch(cupActions.modal(false))}
          >
        </div>
        <div className={styles['modal-content']}>
          {children}
        </div>
      </div>
    </div>
  );
};

//export default Modal;
