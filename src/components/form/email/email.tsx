import { FC, ReactNode } from 'react';
import styles from './email.module.css';

import { selectEmailAmount} from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Email: FC = () => {

  const value = useAppSelector((state) => selectEmailAmount(state)); 
  
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
    </div>
  );
}

export default Email;

//    pattern={"[^@\s]+@[^@\s]+\.[^@\s]+"}
//    size ={30}