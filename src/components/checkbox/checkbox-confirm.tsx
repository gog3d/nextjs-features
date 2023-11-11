import React, { FC, ReactNode } from 'react';
import styles from './checkbox-confirm.module.css';

import CheckboxMobileIcon from '@/components/icons/checkbox-mobile-icon';


interface ICheckboxConfirmProps {
  title: string;
  name: string;
  toggleCheckbox: React.ChangeEventHandler<HTMLInputElement> | undefined;
  checked: boolean;
}

const CheckboxConfirm: FC<ICheckboxConfirmProps> = ({title, name, toggleCheckbox, checked}) => {

  return (
    <label className={styles['checkbox']}>
      <input className={styles['checkbox__input']} 
        type='checkbox' 
        name={name}
        onChange={toggleCheckbox}
        checked={checked}
      />
      <div className={styles['checkbox__state']}>
        <div className={styles['checkbox__control']}>
          <div className={styles['checkbox__icon']}>
            <CheckboxMobileIcon />
          </div>
        </div>
      </div>
        <div className={styles['checkbox__title']}>{title}</div>
    </label>
  );
};

export default CheckboxConfirm;