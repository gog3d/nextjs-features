'use client';
import { FC, ReactNode, useState, useCallback } from 'react';
import styles from './wrapper-mobile.module.css';
import { useRouter } from 'next/router';

import { selectFormModule, selectSuccessAmount } from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

//import SuccessPageContent from '@/components/page-content/success-page-content';
import LoadIcon from '@/components/icons/load-icon';

export interface IWrapperMobileProps {
  children: ReactNode;
}

export const WrapperMobile: FC<IWrapperMobileProps> = ({children}) => {

  const [send, setSend] = useState(false);

  const router = useRouter();
  const form = useAppSelector((state) => selectFormModule(state));
  const success = useAppSelector((state) => selectSuccessAmount(state));


  const onSubmit = useCallback(async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSend(true);
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
        setSend(false);
        return;
      }
      //setSuccess(true);
      router.push('/success');
      setSend(false);
    }
  }, [form])

  const dispatch = useAppDispatch();

  return (
    <form onSubmit={onSubmit} className={styles['form-wrapper']}>
      {children}
      { send ? 
        <div className={styles['modal']}>
          <div className={styles['modal-background']}>
          </div>
          <div className={styles['modal-content']}>
            <div className={styles['icon-wrapper']}>
              <LoadIcon />
            </div>
          </div>
        </div>
          : 
        null
      }
      <div className={styles['form-button_wrapper']}>
        <button className={styles['form-button']}>
          Отправить
        </button>
      </div>
    </form>
  )
};

//export default WrapperMobile;
