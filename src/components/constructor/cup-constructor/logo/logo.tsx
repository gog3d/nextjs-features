'use client';
import Rext, { FC, ReactNode, useState } from 'react';

import styles from './logo.module.css';

import CloseMobileIcon from '@/components/icons/close-mobile-icon';
import PlusIcon from '@/components/icons/plus-icon';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';

import ClipIcon from '@/components/icons/clip-icon';
import BasketIcon from '@/components/icons/basket-icon';
import BigPlusIcon from '@/components/icons/big-plus-icon';
import BigMinusIcon from '@/components/icons/big-minus-icon';

import { selectColorsAmount, selectCupColorAmount, selectViewAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Logo: FC = () => {

  const onFileChange = async (e:  React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
//      deleteImage();
//      setSource(URL.createObjectURL(file))
    }
  }

  const viewSelector = useAppSelector((state) => selectViewAmount(state));
  const view = viewSelector === 'logo' ? true : false;
  const dispatch = useAppDispatch();

  return view ? 
    <div className={styles['page']}>
      <div className={styles['header']}>
        <button
          onClick={() => dispatch(cupActions.view('viewer'))}
        >
          <BackLinkMobileIcon />
        </button>
        <button onClick={() => dispatch(cupActions.modal(false))}>
          <CloseMobileIcon />
        </button>
      </div>
      <div className={styles['page-content']}>
        <p className={styles['title']}>Загрузить лого</p>

        <div className={styles['file__container']}>
          <div className={styles['file']}>
            <label className={styles['file__label']}>
              <div className={styles['file__label_svg']}>
                <ClipIcon />
              </div>
              <p className={styles['file__label_text']}>Выбрать файл</p>
              <input 
                className={styles['file__input']} 
                type="file"
                onChange={onFileChange}
              ></input>
            </label>
          </div>
          <button 
            className={styles['file_delete-button']}
          >
            <BasketIcon />
          </button>
        </div>
        <div className={styles['logo__radio']}>
          <label className={styles['radio']}>
            <input className={styles['radio__input']} 
              type='radio' 
              name={'logo'}
              checked={true}
            />
            <div className={styles['radio__state']}>
            <div className={styles['radio__control']}>
              <div className={styles['radio__icon']}></div>
            </div>
          </div>
            <div className={styles['radio__title']}>{'Квадратная'}</div>
          </label>
          <label className={styles['radio']}>
            <input className={styles['radio__input']} 
              type='radio' 
              name={'logo'}
              checked={false}
            />
            <div className={styles['radio__state']}>
            <div className={styles['radio__control']}>
              <div className={styles['radio__icon']}></div>
            </div>
          </div>
            <div className={styles['radio__title']}>{'Круглая'}</div>
          </label>
        </div>
        <div className={styles['constructor__canvas-container']}>
          <div className={styles['constructor__canvas']}>
          </div>
          <button 
            className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_minus']}`}
          >
            <BigMinusIcon/>
          </button>
          <button 
            className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_plus']}`}
          >
            <BigPlusIcon/>
          </button>
        </div>
        <div className={styles['apply-button_container']}>
          <button className={styles['apply-button']}
          >
            Применить
          </button>
        </div>
      </div>
    </div>
    :
    null
};

export default Logo;
