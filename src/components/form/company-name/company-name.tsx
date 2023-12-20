import { FC, ReactNode } from 'react';
import styles from './company-name.module.css';

import { selectCompanyNameAmount} from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const CompanyName: FC = () => {

  const value = useAppSelector((state) => selectCompanyNameAmount(state)); 
  
  const dispatch = useAppDispatch();

  const handler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch(formActions.companyName(e.target.value));
  };


  return (
    <div  className={styles['input-wrapper']}>
      <input 
        value={value}
        className={styles['input']}
        type={'text'}
        placeholder={'Название компании'}
        onChange={handler}
      />
    </div>
  );
}

export default CompanyName;