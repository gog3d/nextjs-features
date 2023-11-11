'use client';
import { FC, ReactNode, useState } from 'react';
import styles from './color.module.css';

import CloseMobileIcon from '@/components/icons/close-mobile-icon';
import PlusIcon from '@/components/icons/plus-icon';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';


import { selectColorsAmount, selectCupColorAmount, selectViewAmount, selectColorAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Color: FC = () => {
  const colors = useAppSelector((state) => selectColorsAmount(state));
  const selectColor = useAppSelector((state) => selectColorAmount(state));
  const cupColor = useAppSelector((state) => selectCupColorAmount(state));

  const viewSelector = useAppSelector((state) => selectViewAmount(state));
  const view = viewSelector === 'color' ? true : false;
  const dispatch = useAppDispatch();

  const apply = () => {
    dispatch(cupActions.cupColor());
    dispatch(cupActions.view('viewer'));
  };

//  console.log({cupColor})

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
        <p className={styles['title']}>Выбрать цвет</p>
        <div className={styles['colors_container']}>
         {
          colors.map((color, index) => 
            <div key={index}
              className={`${styles['colors_button-container']} 
                ${color === selectColor && styles['colors_button-checked']}`}
                onClick={() => dispatch(cupActions.color(color))}
                >
              <button 
                
                className={styles['colors_button']} 
                style={{background: `${color}`}}
              >
              </button>
            </div>
         )}
        </div>
        <div className={styles['apply-button_container']}>
          <button className={styles['apply-button']}
            onClick={apply}
          >Применить</button>
        </div>
      </div>
    </div>
    :
    null
};

export default Color;