import { FC, ReactNode, useMemo } from 'react';
import styles from './email.module.css';

import { selectEmailAmount} from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Email: FC = () => {

  const value = useAppSelector((state) => selectEmailAmount(state)); 
//  console.log({value});
//  }, [state]);
  
  const dispatch = useAppDispatch();

  const handler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch(formActions.email(e.target.value));
  };

  return (
    <div  className={styles['input-wrapper']}>
      <input 
        value={value}
        className={styles['input']}
        type={'email'}
        required = {true} 
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

