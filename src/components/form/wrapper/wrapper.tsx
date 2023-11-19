'use client';
import { FC, ReactNode, useState, useCallback } from 'react';
import styles from './wrapper.module.css';
import { useRouter } from 'next/router';

import { selectFormModule, selectSuccessAmount } from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

import SuccessPageContent from '@/components/page-content/success-page-content';

export interface IWrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<IWrapperProps> = ({children}) => {
  const router = useRouter();

  const form = useAppSelector((state) => selectFormModule(state));
  const success = useAppSelector((state) => selectSuccessAmount(state));


const onSubmit = useCallback(async (e: React.SyntheticEvent) => {
  e.preventDefault();
if (form.confirm) {
  try {
  //  console.log(form);
    const res = await fetch(`api/send-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...form })
    })
  } catch (error) {
    return
  }

  //setSuccess(true);
  router.push('/success');
}
}, [form])

  const dispatch = useAppDispatch();

  return success ?  <SuccessPageContent /> :
    <form onSubmit={onSubmit} className={styles['form-wrapper']}>
      {children}
      <div className={styles['form-button_wrapper']}>
        <button className={styles['form-button']}>
          Заказать образец
        </button>
      </div>
    </form>   
};


//export default WrapperMobile;