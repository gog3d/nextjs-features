import React, { FC, ReactNode } from 'react';
import styles from './radio.module.css';

interface IRadioProps {
  title: string;
  name: string;
  checked: boolean;
  toggleRadio: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

//          <div className={styles['radio__icon']}></div>


const Radio: FC<IRadioProps> = ({title, name, checked, toggleRadio}) => {
  return (
    <label className={styles['radio']}>
      <input className={styles['radio__input']} 
        type='radio' 
        name={name}
        checked={checked}
        onChange={toggleRadio}
      />
      <div className={styles['radio__state']}>
        <div className={styles['radio__control']}>
          <div className={styles['radio__icon']}></div>
        </div>
      </div>
        <div className={styles['radio__title']}>{title}</div>
      </label>
  );
};

export default Radio;