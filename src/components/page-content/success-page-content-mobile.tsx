import { FC, ReactNode } from 'react';
import styles from './success-page-content-mobile.module.css';

import LogoMainBigMobile from '@/components/icons/logo-main-big-mobile-icon';
import ButtonConnectMobile from '@/components/button/button-connect-mobile';

const SuccessPageContentMobile = () => {

  const catalog = '/catalog';

  return (
    <div className={styles['main-page-content']}>
      <div className={styles['logo']}>
        <LogoMainBigMobile />
      </div>
      <div className={styles['title']}>
        <span className={styles['title_bold']}>Спасибо</span> за ваше обращение!
      </div>
      <div className={styles['text-block']}>
        <div className={styles['text']}>
          Ваше обращение успешно отправлено!
        </div>
        <div className={styles['text']}>
          Наш менеджер свяжется с вами в течение дня.
        </div>
        <div className={styles['figure-block']}>
          <div className={styles['figure-1']}>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5.34292" y="23.8523" width="25" height="25" rx="4.5" transform="rotate(-47.7621 5.34292 23.8523)" stroke="#939597" strokeOpacity="0.3" strokeWidth="7"/>
            </svg>
          </div>
          <div className={styles['figure-2']}>
            <div className={styles['figure-2__1']}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.5" y="3.5" width="25" height="25" rx="4.5" stroke="#939597" strokeOpacity="0.3" strokeWidth="7"/>
              </svg>
            </div>
            <div className={styles['figure-2__2']}></div>
          </div>
        </div>
      </div>
      <ButtonConnectMobile text={'Вернуться в каталог'} link={catalog}/>
    </div>
  );
};

export default SuccessPageContentMobile;