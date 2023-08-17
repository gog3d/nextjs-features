import { FC, ReactNode } from 'react';
import styles from './footer-main-mobile.module.css';

import Link from 'next/link';

import MailMobileIcon from '@/components/icons/mail-mobile-icon';
import WhatsAppMobileIcon from '@/components/icons/whats-app-mobile-icon';
import TelegramMobileIcon from '@/components/icons/telegram-mobile-icon';

import LogoWcdeMobileIcon from '@/components/icons/logo-wcde-mobile-icon';


const FooterMainMobile = () => {

  return (
    <footer className={styles['footer']}>
      <div className={styles['communication-wrapper']}>
        <div className={styles['title']}>Контакты</div>
        <div className={styles['adress']}>100000, г. С.Петербург, ул. Крыленко 3Б</div>
        <div className={styles['tel']}>тел: (812) 703 4282</div>
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
      <div className={styles['creators']}>
        <a href='https://www.wcde.studio'>
          <LogoWcdeMobileIcon />
        </a>
      </div>
    </footer>
  );
};

export default FooterMainMobile;