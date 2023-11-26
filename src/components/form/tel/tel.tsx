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
        onChange={handler}
      />
    </div>
  );
}

export default Tel;