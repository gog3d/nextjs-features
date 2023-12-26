import { FC, ReactNode } from 'react';
import styles from './main-page-content-mobile.module.css';

import ButtonMobile from '@/components/button/button-mobile';
import ButtonLink from '@/components/button/button-link';

import ButtonConnectMobile from '@/components/button/button-connect-mobile';

const MainPageContentMobile = () => {

  const feedback = '/feedback';

  return (
    <div className={styles['main-page-content']}>
      <div className={styles['card-1']}>
        Комплексные решения в сфере ресторанного бизнеса и сегмента HoReCa
      </div>
      <div className={styles['card-2']}>
        <div className={styles['card-2__title']}>
          Что мы делаем?
        </div>
        <div>
          Если честно, мы делаем всё, что душе угодно, но только то, в чем действительно хорошо разбираемся, а именно:
          упаковка для фастфуда, кофеин, пекарен, рекламное оформление, униформу еще мы варим соус и оказываем услугу консалтинга, 
          да-да, напоминаю, делаем, что душе угодно 
        </div>
      </div>
      <div className={styles['card-3']}>
        <div className={styles['card-3__title']}>
          Хотим сразу сказать, что мы не интернет-магазин.
        </div>
        <div className={styles['card-3__text']}>
          Вы вряд ли получите от нас общее КП (для всех) и единый прайс на все позиции. 
          На вопрос: «А сколько стоит 1 шт?» — скорее всего, мы тоже не ответим. 
          Все потому, что..
        </div>
      </div>
      <div className={styles['card-4']}>
        <div>
          <span className={styles['card-4__title']}>Наша сильная сторона</span> — это углубленный маркетинговый подход и поиск индивидуальных решений для каждого клиента 
          с полным погружением в рабочий процесс. 
          Поэтому дизайн/макети штамп - это бесплатно.
        </div>
        <div className={styles['card-4__text']}>
          Ведь каждый выполненный заказ — это монетка счастья в копилочку нашей радости!
        </div>
      </div>
      <div className={styles['card-5']}>
        Мы понимаем как влияют на бизнес узнаваемость, бренд, реклама, маркетинг, формирование цен, а также реализация этих задач. 
        Поэтому сделали сервис, который упростит все решения и даст желаемый результат.
      </div>
      <div className={styles['card-6']}>
        <div className={styles['card-6__text-1']}>
          Что это для нас и почему это важно?
        </div>
        <div className={styles['card-6__text-2']}>
          Френдли — бизнес
        </div>
        <div className={styles['card-6__text-3']}>
          Хотим, чтобы наши взаимодействия были выстроены на доверии, а не на счетах за дополнительные услуги 
          и каждое лишнее действие. Если вы дочитали до этого пункта, то мы уже на полпути к тому, чтобы реализовать ваш запрос с минимальными затратами времени и нервов. 
        </div>
        <div className={styles['card-6__button-connect']}>
          <ButtonConnectMobile link={'/feedback'} text={'Связаться с нами'} />
        </div>
      </div>
      <div className={styles['card-7']}>
        Если у вас есть свой дизайнер, маркетолог и технолог, мы внимательно изучим все их пожелания, ТЗ и комментарии. 
        Если нет — то все сделаем сами.
      </div>
      <div className={styles['card-8']}>
        <div className={styles['card-8__title']}>
          Конечно же лучше один раз увидеть, чем сто раз представить!
        </div>
        <div className={styles['card-8__text']}>
          Воспользуйтесь опцией и визуализируйте свой бренд на представленных упаковочных решениях
          (нажми меня) — открывается фича с визуализацией
        </div>
        <div className={styles['card-8__button-connect']}>
          <ButtonConnectMobile link={'/feedback'} text={'Связаться с нами'} />
        </div>
      </div>
      <div className={styles['card-9']}>
        Если вы не нашли то, что искали, это не означает, что мы этого не можем, не делаем или не предоставляем. 
        Готовы обсудуть новые предложения. Нам всегда можно позвонить или написать. Отвечаем быстро и почти в любое время, а не после «дождичка в четверг»
      </div>
      <div className={styles['card-10']}>
        <div>
         <span className={styles['card-10__color']}>Ес</span>ли после прочитанного вам ничего не понятно, но очень интересно
        </div>
        <ButtonLink link={'/catalog'}>
          <div className={styles['card-10__button-connect']}>
            {'Попробовать конструктор'}
          </div>
        </ButtonLink>
        <div>
          {/*(гипер ссылка на вкладку как мы работаем в подробностях)*/}
        </div>
      </div>
    </div>
  );
};

export default MainPageContentMobile;