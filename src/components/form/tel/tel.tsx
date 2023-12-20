import { FC, ReactNode } from 'react';
import styles from './tel.module.css';

import { selectTelAmount} from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Tel: FC = () => {

  const value = useAppSelector((state) => selectTelAmount(state)); 
  
  const dispatch = useAppDispatch();

  const handler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch(formActions.tel(e.target.value));
  };


  return (
    <div  className={styles['input-wrapper']}>
      <input 
        value={value}
        className={styles['input']}
        type={'number'}
        placeholder={'Телефон'}
        pattern={'[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}'}
        onChange={handler}
      />
      <span className={styles['form__error']}>
        {'Это поле должно содержать телефон в формате +71234567890'}
      </span>
    </div>
  );
}

export default Tel;
//        pattern={'[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}'}
//        {'Это поле должно содержать телефон в формате +7 (123) 456-78-90'}
