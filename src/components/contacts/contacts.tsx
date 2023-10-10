import { FC, ReactNode } from 'react';
import styles from './contacts.module.css';

import Link from 'next/link';

import MailMobileIcon from '@/components/icons/mail-mobile-icon';
import WhatsAppMobileIcon from '@/components/icons/whats-app-mobile-icon';
import TelegramMobileIcon from '@/components/icons/telegram-mobile-icon';

import { TContactsTypes } from '../../types/data-types';

interface IContactsProps {
  contacts: TContactsTypes | null;
  children: ReactNode;
}

const Contacts:FC<IContactsProps> = ({contacts, children}) => {
  return (
    <div className={styles['contacts-wrapper']}>
      <div className={styles['contacts-title']}>Контакты</div>
      <div className={styles['contacts-container']}>
        <div className={styles['contacts']}>
          <div className={styles['text']}>{contacts?.adress}</div>
          {
            contacts?.tel.map((item, index) => <div className={styles['text']} key={index}>{item}</div>)
          }
        </div>
        <div className={styles['map-container']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
