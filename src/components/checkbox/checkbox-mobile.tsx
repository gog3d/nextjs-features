import React, { FC, ReactNode, useEffect } from 'react';
import styles from './checkbox-mobile.module.css';

import CheckboxMobileIcon from '@/components/icons/checkbox-mobile-icon';

interface ICheckboxMobileProps {
  title: string;
  name: string;
  toggleCheckbox: React.ChangeEventHandler<HTMLInputElement> | undefined;
  checked:  any;
}

const CheckboxMobile: FC<ICheckboxMobileProps> = ({title, name, toggleCheckbox, checked}) => {

  useEffect(() => {
//    console.log(checked);
  }, [checked]);

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

export default CheckboxMobile;