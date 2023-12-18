import { FC, ReactNode } from 'react';
import styles from './input.module.css';

import { selectInputAmount} from '@/redux/features/search/selectors';
import { searchActions } from '@/redux/features/search';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Input: FC = () => {
  const value = useAppSelector((state) => selectInputAmount(state)); 
  const dispatch = useAppDispatch();

  const handler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.input(e.target.value));
  };

  return (
    <div  className={styles['input-wrapper']}>
      <input 
        value={value}
        className={styles['input']}
        type={'text'}
        required = {true} 
        placeholder={'Поиск'}
        onChange={handler}
      />
    </div>
  );
}

export default Input;

//    pattern={"[^@\s]+@[^@\s]+\.[^@\s]+"}
//    size ={30}