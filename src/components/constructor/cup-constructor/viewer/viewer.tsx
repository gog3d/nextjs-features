import { FC, ReactNode, useState } from 'react';
import styles from './viewer.module.css';

import CloseMobileIcon from '@/components/icons/close-mobile-icon';
import PlusIcon from '@/components/icons/plus-icon';

import { selectModalAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Viewer: FC = () => {
  const modal = useAppSelector((state) => selectModalAmount(state));
  const dispatch = useAppDispatch();

  return (
    <div className={styles['page']}>
      <div className={styles['header']}>
        <button onClick={() => dispatch(cupActions.modal(false))}>

          <CloseMobileIcon />
        </button>
      </div>
      <div className={styles['page-content']}>
        <nav className={styles['nav-menu']}>
          <button className={styles['nav-menu_button']}
          >
            <PlusIcon /><div>Цвет</div>
          </button>
          <button className={styles['nav-menu_button']}
          >
            <PlusIcon /><div>Фон</div>
          </button>
          <button className={styles['nav-menu_button']}
          >
            <PlusIcon /><div>Лого</div>
          </button>
        </nav>
        <div className={styles['canvas-container']}>
        </div>
        <div className={styles['send']}>
          <p className={styles['send-title']}>
            Отправить макет на е-mail
          </p>
          <div className={styles['send-container']}>
            <input 
              className={styles['send_input-email']}

              type={'email'}
              placeholder={'E-mail'}
            />
            <button className={styles['send_button']}
            >
              {'Отправить'} 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewer;

/*
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

*/
