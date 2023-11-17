import { FC, ReactNode } from 'react';
import styles from './footer-main.module.css';

import { TDataTypes, TContactsTypes } from '@/types/data-types';

import Link from 'next/link';

import ContainerPage from '@/components/container/container-page';

import MailMobileIcon from '@/components/icons/mail-mobile-icon';
import WhatsAppMobileIcon from '@/components/icons/whats-app-mobile-icon';
import TelegramMobileIcon from '@/components/icons/telegram-mobile-icon';

import LogoWcdeMobileIcon from '@/components/icons/logo-wcde-mobile-icon';

interface IContactsProps {
  contacts: TContactsTypes | null;
}

const FooterMainMobile: FC <IContactsProps> = ({ contacts }) => {

  return (
    <footer className={styles['footer']}>
      <ContainerPage>
        <div className={styles['communication-wrapper']}>
          <div className={styles['contacts-wrapper']}>
            <div className={styles['title']}>Контакты</div>
            <div className={styles['contacts']}>
              <div className={styles['contacts-item']}>{contacts?.adress}</div>
              {
                contacts?.tel.map((item, index) => <div className={styles['contacts-item']} key={index}>{item}</div>)
              }
            </div>
          </div>
          <div className={styles['communication-container']}>
            <div className={styles['communication']}>
              <Link href={`mailto:${contacts?.mail}`}>
                <MailMobileIcon />
              </Link>
              <Link href={`https://wa.me/${contacts?.whatsapp}`}>
                <WhatsAppMobileIcon />
              </Link>
              <Link href={`https://t.me/${contacts?.telegram}`}>
                <TelegramMobileIcon />
              </Link>
            </div>
            <div className={styles['links']}>
              <Link href={'/consent'}>
                Согласие на обработку персональных данных
              </Link>
              <Link href={'/policy'}>
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </ContainerPage>
      <div className={styles['creators']}>
        <ContainerPage>
          <div className={styles['creators-info']}>
            <a href='https://wcde.vercel.app'>
              <LogoWcdeMobileIcon />
            </a>
          </div>
        </ContainerPage>
      </div>
    </footer>
  );
};

export default FooterMainMobile;
