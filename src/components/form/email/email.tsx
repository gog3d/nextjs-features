'use client';
import { FC, ReactNode, useState, useEffect } from 'react';
import styles from './email.module.css';

import { selectEmailAmount, selectSubmitAmount} from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Email: FC = () => {

  const [valid, setValid] = useState(true);
  const value = useAppSelector((state) => selectEmailAmount(state)); 
  const submit = useAppSelector((state) => selectSubmitAmount(state));

  const dispatch = useAppDispatch();

  useEffect(() => {
//    console.log({value, submit});
    if (submit && value === '') {
      setValid(false);
    } else {
      setValid(true);
    };
  }, [value, submit]);


  const handler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch(formActions.email(e.target.value));
  };

  return (
    <div  className={styles['input-wrapper']}>
      <input 
        value={value}
        className={valid ? styles['input'] : `${styles['input']} ${styles['input_invalid']}`}
        type={'email'}
        required = {false} 
        placeholder={'Email'}
        onChange={handler}
      />
      <div className={styles['form__error']}>
        {'Это поле должно содержать E-Mail в формате example@site.com'}
      </div>
    </div>
  );
}

export default Email;

//    pattern={"[^@\s]+@[^@\s]+\.[^@\s]+"}
//    size ={30}

