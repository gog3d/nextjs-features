'use client';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './confirm.module.css';

import CheckboxMobileIcon from '@/components/icons/checkbox-mobile-icon';

import { selectConfirmAmount, selectSubmitAmount } from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

const Confirm: FC = () => {
  const [valid, setValid] = useState(true);
  const confirm = useAppSelector((state) => selectConfirmAmount(state)); 
  const submit = useAppSelector((state) => selectSubmitAmount(state));

  const dispatch = useAppDispatch();

 useEffect(() => {
//    console.log({value, submit});
    if (submit && confirm === false) {
      setValid(false);
    } else {
      setValid(true);
    };
  }, [confirm, submit]);


  const handler = useCallback(() => {
        dispatch(formActions.confirm(confirm ? false : true));
  }, [confirm]);

//        className={valid ? styles['input'] : `${styles['input']} ${styles['input_invalid']}`}

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
            <div className={valid ? styles['icon-invalid'] : `${styles['icon-invalid']} ${styles['icon-inline-block']}`}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85539 13.288C5.11874 9.74968 5.25468 8.30324 6.77768 6.78024C8.30067 5.25725 9.74711 5.1213 13.2855 4.85796C14.1743 4.79181 15.0882 4.75195 15.9994 4.75195C16.9106 4.75195 17.8245 4.79181 18.7133 4.85796C22.2517 5.1213 23.6981 5.25725 25.2211 6.78024C26.7441 8.30324 26.88 9.74968 27.1434 13.288C27.2095 14.1769 27.2494 15.0907 27.2494 16.002C27.2494 16.9132 27.2095 17.8271 27.1434 18.7159C26.88 22.2542 26.7441 23.7007 25.2211 25.2237C23.6981 26.7467 22.2517 26.8826 18.7133 27.146C17.8245 27.2121 16.9106 27.252 15.9994 27.252C15.0882 27.252 14.1743 27.2121 13.2855 27.146C9.74711 26.8826 8.30067 26.7467 6.77768 25.2237C5.25468 23.7007 5.11874 22.2542 4.85539 18.7159C4.78924 17.8271 4.74939 16.9132 4.74939 16.002C4.74939 15.0907 4.78924 14.1769 4.85539 13.288Z" fill="white" stroke="red" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={valid ? styles['icon-false'] : `${styles['icon-false']} ${styles['icon-none']}`}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85539 13.288C5.11874 9.74968 5.25468 8.30324 6.77768 6.78024C8.30067 5.25725 9.74711 5.1213 13.2855 4.85796C14.1743 4.79181 15.0882 4.75195 15.9994 4.75195C16.9106 4.75195 17.8245 4.79181 18.7133 4.85796C22.2517 5.1213 23.6981 5.25725 25.2211 6.78024C26.7441 8.30324 26.88 9.74968 27.1434 13.288C27.2095 14.1769 27.2494 15.0907 27.2494 16.002C27.2494 16.9132 27.2095 17.8271 27.1434 18.7159C26.88 22.2542 26.7441 23.7007 25.2211 25.2237C23.6981 26.7467 22.2517 26.8826 18.7133 27.146C17.8245 27.2121 16.9106 27.252 15.9994 27.252C15.0882 27.252 14.1743 27.2121 13.2855 27.146C9.74711 26.8826 8.30067 26.7467 6.77768 25.2237C5.25468 23.7007 5.11874 22.2542 4.85539 18.7159C4.78924 17.8271 4.74939 16.9132 4.74939 16.002C4.74939 15.0907 4.78924 14.1769 4.85539 13.288Z" fill="white" stroke="#D9D9D9" strokeWidth="1.5"/>
             </svg>
            </div>
            <div className={styles['icon-focus']}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85539 13.288C5.11874 9.74968 5.25468 8.30324 6.77768 6.78024C8.30067 5.25725 9.74711 5.1213 13.2855 4.85796C14.1743 4.79181 15.0882 4.75195 15.9994 4.75195C16.9106 4.75195 17.8245 4.79181 18.7133 4.85796C22.2517 5.1213 23.6981 5.25725 25.2211 6.78024C26.7441 8.30324 26.88 9.74968 27.1434 13.288C27.2095 14.1769 27.2494 15.0907 27.2494 16.002C27.2494 16.9132 27.2095 17.8271 27.1434 18.7159C26.88 22.2542 26.7441 23.7007 25.2211 25.2237C23.6981 26.7467 22.2517 26.8826 18.7133 27.146C17.8245 27.2121 16.9106 27.252 15.9994 27.252C15.0882 27.252 14.1743 27.2121 13.2855 27.146C9.74711 26.8826 8.30067 26.7467 6.77768 25.2237C5.25468 23.7007 5.11874 22.2542 4.85539 18.7159C4.78924 17.8271 4.74939 16.9132 4.74939 16.002C4.74939 15.0907 4.78924 14.1769 4.85539 13.288Z" fill="white" stroke="#2DA393" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styles['icon-true_shape']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.107461 9.23238C0.367054 5.7444 0.49685 4.00041 2.24735 2.24991C3.99785 0.499413 5.74184 0.369617 9.22982 0.110024C10.134 0.0427309 11.0667 0.00195312 11.9994 0.00195312C12.9321 0.00195312 13.8648 0.0427309 14.769 0.110024C18.2569 0.369617 20.0009 0.499413 21.7514 2.24991C23.5019 4.00041 23.6317 5.7444 23.8913 9.23238C23.9586 10.1366 23.9994 11.0693 23.9994 12.002C23.9994 12.9347 23.9586 13.8674 23.8913 14.7715C23.6317 18.2595 23.5019 20.0035 21.7514 21.754C20.0009 23.5045 18.2569 23.6343 14.769 23.8939C13.8648 23.9612 12.9321 24.002 11.9994 24.002C11.0667 24.002 10.134 23.9612 9.22982 23.8939C5.74184 23.6343 3.99785 23.5045 2.24735 21.754C0.49685 20.0035 0.367053 18.2595 0.10746 14.7715C0.0401674 13.8673 -0.000610352 12.9347 -0.000610352 12.002C-0.000610352 11.0693 0.0401674 10.1366 0.107461 9.23238Z" fill="#2DA393"/>
              </svg>
            </div>
            <div className={styles['icon-true_tick']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.5566 7.26878C18.072 7.68589 18.1493 8.43903 17.7294 8.95094L10.6677 17.5596C10.4538 17.8203 10.1393 17.9795 9.80124 17.9982C9.46318 18.0168 9.13285 17.8931 8.89125 17.6575L5.3604 14.2141C4.88603 13.7514 4.87904 12.9944 5.34478 12.5232C5.81053 12.052 6.57263 12.0451 7.047 12.5077L9.63556 15.0322L15.8631 7.44043C16.283 6.92851 17.0412 6.85166 17.5566 7.26878Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles['checkbox__title']}>{'Соглашаюсь с условиями обработки данных'}</div>
      </label>
    </div>
  );
}

export default Confirm;