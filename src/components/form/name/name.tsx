'use client';
import { FC, ReactNode, useState, useEffect } from 'react';
import styles from './name.module.css';

import { selectNameAmount, selectSubmitAmount } from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Name: FC = () => {

  const [valid, setValid] = useState(true);
  const value = useAppSelector((state) => selectNameAmount(state)); 
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
    dispatch(formActions.name(e.target.value));
  };


  return (
    <div  className={styles['input-wrapper']}>
      <input 
        value={value}
        className={valid ? styles['input'] : `${styles['input']} ${styles['input_invalid']}`}
        required = {false} 
        type={'text'}
        placeholder={'Имя'}
        onChange={handler}
      />
    </div>
  );
}

export default Name;