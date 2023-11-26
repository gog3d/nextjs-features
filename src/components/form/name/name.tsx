import { FC, ReactNode } from 'react';
import styles from './name.module.css';

import { selectNameAmount} from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Name: FC = () => {

  const value = useAppSelector((state) => selectNameAmount(state)); 
  
  const dispatch = useAppDispatch();

  const handler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch(formActions.name(e.target.value));
  };


  return (
    <div  className={styles['input-wrapper']}>
      <input 
        value={value}
        className={styles['input']}
        type={'text'}
        placeholder={'Имя'}
        onChange={handler}
      />
    </div>
  );
}

export default Name;