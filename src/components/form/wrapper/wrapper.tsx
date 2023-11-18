'use client';
import { FC, ReactNode, useState } from 'react';
import styles from './wrapper.module.css';
import { useRouter } from 'next/router';

import { selectSuccessAmount } from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

import SuccessPageContent from '@/components/page-content/success-page-content';

export interface IWrapperProps {
  children: ReactNode;
}



export const Wrapper: FC<IWrapperProps> = ({children}) => {
  const router = useRouter();
  
  const success = useAppSelector((state) => selectSuccessAmount(state));

  /*
  const sendEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`api/send-cup-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'email': email, 'color': color, 'logo': logoImageCrop, 'logoSource': logo.source64, 'background': backgroundImageCrop, 'backgroundSource': background.source64,})
      })
    } catch (error) {
      return
    }
        router.push('/success');
  }
*/

  const dispatch = useAppDispatch();

  return success ?  <SuccessPageContent /> :
    <form onSubmit={()=>{}} className={styles['form-wrapper']}>
      {children}
      <button className={styles['button-wrapper']}>
        Заказать образец
      </button>
    </form>   
};

//export default Wrapper;
