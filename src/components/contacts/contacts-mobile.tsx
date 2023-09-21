import { FC, ReactNode } from 'react';
import styles from './contacts-mobile.module.css';

import Link from 'next/link';

import MailMobileIcon from '@/components/icons/mail-mobile-icon';
import WhatsAppMobileIcon from '@/components/icons/whats-app-mobile-icon';
import TelegramMobileIcon from '@/components/icons/telegram-mobile-icon';

import { TContactsTypes } from '../../types/data-types';

interface IContactsMobileProps {
  contacts: Array<TContactsTypes> | null
}

const ContactsMobile:FC<IContactsMobileProps> = ({contacts}) => {
  return (
    <div className={styles['contacts-wrapper']}>
      <div className={styles['contacts']}>
      {
        contacts?.map((item, index) => <div className={styles['title']} key={index}>{item}</div>)
      }
      </div>
      <div className={styles['communication']}>
        <a href='mailto:info@perfafore.ru'>
          <MailMobileIcon />
        </a>
        <Link href='https://wa.me/79062287887'>
          <WhatsAppMobileIcon />
        </Link>
        <a href='https://t.me/+79062287887'>
          <TelegramMobileIcon />
        </a>
      </div>
    </div>
  );
};

export default ContactsMobile;