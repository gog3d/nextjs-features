'use client';
import { FC, ReactNode, useCallback, useEffect } from 'react';
import styles from './confirm.module.css';

import CheckboxMobileIcon from '@/components/icons/checkbox-mobile-icon';

import { selectConfirmAmount} from '@/redux/features/form/selectors';
        
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Confirm: FC = () => {

  const confirm = useAppSelector((state) => selectConfirmAmount(state)); 
  
  const dispatch = useAppDispatch();
  
  
  const handler = useCallback(() => {
        dispatch(formActions.confirm(confirm ? false : true));
  }, [confirm]);


  return (
    <div>
      <label className={styles['checkbox']}>
        <input className={styles['checkbox__input']} 
          type='checkbox' 
          name={'confirm'}
          onChange={(e:  React.ChangeEvent<HTMLInputElement>) => handler()}
          checked={confirm ? true : false}
        />
        <div className={styles['checkbox__state']}>
          <div className={styles['checkbox__control']}>
            <div className={styles['checkbox__icon']}>
              <CheckboxMobileIcon />
            </div>
          </div>
        </div>
        <div className={styles['checkbox__title']}>{'Соглашаюсь с условиями обработки данных'}</div>
      </label>
    </div>
  );
}

export default Confirm;