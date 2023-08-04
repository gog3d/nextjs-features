import React, { FC, ReactNode } from 'react';
import styles from './checkbox-mobile.module.css';

interface ICheckboxMobileProps {
  title: string;
  name: string;
//  checked: boolean;
  toggleCheckbox: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const CheckboxMobile: FC<ICheckboxMobileProps> = ({title, name, toggleCheckbox}) => {

  return (
    <label className={styles['checkbox']}>
      <input className={styles['checkbox__input']} 
        type='checkbox' 
        name={name}
        onChange={toggleCheckbox}
      />
      <div className={styles['checkbox__state']}>
        <div className={styles['checkbox__control']}>
          <div className={styles['checkbox__icon']}></div>
        </div>
      </div>
        <div className={styles['checkbox__title']}>{title}</div>
      </label>
  );
};

export default CheckboxMobile;