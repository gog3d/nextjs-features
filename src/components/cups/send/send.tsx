import { FC, ReactNode, useState, useEffect, useMemo } from 'react';

import styles from './send.module.css';
import { useRouter } from 'next/router';



const Send = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      
      const res = await fetch(`/api/send-constructor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'email': email, 'color': 'red' })
      })
    } catch (error) {
      return
    }
        router.push('/success');
  }


  return (
    <div className={styles['send']}>
      <p className={styles['send__title']}>Отправить макет на email</p>
      <label className={styles['send__label']}>
        <input 
          className={styles['send__email']} 
          type="email" 
          placeholder='E-mail'
          onChange={handleChangeEmail}
          value={email}
        ></input>
        <button 
          className={styles['send__button_email']}
          onClick={sendEmail}
        >Отправить</button>
      </label>
    </div>
  );
};

export default Send;


