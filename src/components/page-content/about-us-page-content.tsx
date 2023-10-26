import { FC, ReactNode, useState } from 'react';
import styles from './about-us-page-content.module.css';

import Image from 'next/image';

import ButtonMobile from '../button/button-mobile';
//import ButtonLinkMobile from '../button/button-link-mobile';
import ButtonConnectMobile from '../button/button-connect-mobile';
import ButtonLink from '../button/button-link';
import Modal from '@/components/modal/modal';

import FormFeedback from '@/components/form/form-feedback';
import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IAboutUsPageContentProps {
  catalog: Array<TCatalogItemsTypes>;
}

const AboutUsPageContent: FC<IAboutUsPageContentProps> = ({catalog}) => {
  const feedback = '/feedback';

  const [modalOn, setModalOn] = useState(false)
  const modalOpen = () => {
    setModalOn(true);
  };
  const modalClose = () => {
    setModalOn(false);
  };

  return (
    <div className={styles['about-us-page-content']}>
      <Modal modalOn={modalOn} modalClick={modalClose}>
        <FormFeedback catalog={catalog} modalOn={modalOn}/>
      </Modal>
      <div className={styles['card-1']}>
        <b>PERFAVORE</b>
        <span> — это творческо-производственное объединение из Санкт-Петербурга.</span>
      </div>
      <div className={styles['container-row']}>
        <div className={styles['card-6']}>
          <div className={styles['card-6__title']}>
            Выясняем цели и потребности
          </div>
          <div className={styles['card-6__text-1']}>
            Мы все так же внимательно слушаем, но уже задаем много вопросов.
          </div>
          <div className={styles['card-6__text-2']}>
            Узнаем целевую аудиторию;
            Подбираем сегмент;
            Формируем бюджет;
            Фиксируем полученную информацию.
          </div>
          <button onClick={modalOpen}>
            <div className={styles['card-6__button-connect']}>
              {'Связаться с нами'}
            </div>
          </button>
        </div>
        <div className={styles['container-column']}>
          <div className={styles['card-2']}>
            <div className={styles['card-2__title']}>
              Наша компания
            </div>
            <div>
              Состоит из людей объединённых общим современным подходом к реализации 
              любых идей. Готовых поделиться своим опытом, вдохновением и 
              профессионализмом, что позволяет нам воплощать наши проекты и 
              задачи. А вам — получить именно ту услугу, на которую вы рассчитываете!
            </div>
          </div>
          <div className={styles['card-3']}>
            Мы внимательно относимся и следим за современными технологиями в области 
            производства, тенденциями в бизнесе и маркетинговым подходом. 
            Поэтому предлагаем клиентам новые и улучшенные решения.
          </div>
        </div>
      </div>
      <div className={styles['container-row']}>
        <div className={styles['card-4']}>
          <div className={styles['card-4__header']}>Как мы работаем:</div>
          <ul className={styles['card-4__list']}>
            <li className={styles['card-4__list-item']}>
              <div className={styles['list-icon']}></div>
              <div className={styles['card-4__list-item_text']}>Составляем техническое задание</div>
            </li>
            <li className={styles['card-4__list-item']}>
              <div className={styles['list-icon']}></div>
              <div className={styles['card-4__list-item_text']}>Сначала мы внимательно вас слушаем...</div>
            </li>
            <li className={styles['card-4__list-item']}>
              <div className={styles['list-icon']}></div>
              <div className={styles['card-4__list-item_text']}>Получаем вводные данные</div>
            </li>
            <li className={styles['card-4__list-item']}>
              <div className={styles['list-icon']}></div>
              <div className={styles['card-4__list-item_text']}>Расставляем приоритеты и задачи </div>
            </li>
            <li className={styles['card-4__list-item']}>
              <div className={styles['list-icon']}></div>
              <div className={styles['card-4__list-item_text']}>Анализируем</div>
            </li>
          </ul>
        </div>
        <div className={styles['card-5']}>
          <div className={styles['card-5__header']}>Обсуждаем детали</div>
          <ul className={styles['card-5__list']}>
            <li className={styles['card-5__list-item']}>
              Позвольте уточнить?
            </li>
            <li className={styles['card-5__list-item']}>
              Вырабатываем концепцию (нам два раза объяснять не надо,нам с первого раза все понятно)
            </li>
          </ul>
        </div>
        <div className={styles['card-7']}>
          <div className={styles['card-7__title']}>
            Подбираем варианты и предлагаем решения. Дальше действовать будем мы! 
          </div>
          <div className={styles['card-7__text-1']}>
            В зависимости от задачи предоставляем:
          </div>
          <ul className={styles['card-7__list']}>
            <li className={styles['card-7__list-item']}>
             {/* <div className={styles['list-icon']}></div>*/}
              <div>Макет</div>
            </li>
            <li className={styles['card-7__list-item']}>
              <div className={styles['list-icon']}></div>
              <div>Дизайн</div>
            </li>
            <li className={styles['card-7__list-item']}>
              <div className={styles['list-icon']}></div>
              <div>Образец</div>
            </li>
            <li className={styles['card-7__list-item']}>
              <div className={styles['list-icon']}></div>
              <div>Прототип</div>
            </li>
            <li className={styles['card-7__list-item']}>
              <div className={styles['list-icon']}></div>
              <div>Проект</div>
            </li>
          </ul>
        </div>
        <div className={styles['card-8']}>
          Утверждаем стоимость. Сделаем все, чтобы ваши ожидания совпали с 
          нашим предложением. Формируем ценовое предложение. Все обсуждаемо, 
          с нами всегда можно договориться.
        </div>
        <div className={styles['card-9']}>
          Запускаем в работу. Все самое сложное уже позади, ожидайте и 
          расслабьтесь :) Подписываем все сопроводительные документы Заключаем 
          договор.
        </div>
        <div className={styles['container-row-1']}>

          <Image
            src={'/media/about-us-page-mobile-image.png'}
            alt='main-page-mobile-image'
            width='245'
            height='245'
          />

          <div className={styles['card-10']}>
            <span className={styles['card-10__color-text']}>Ос</span>
            <span>
              новная идея и концепция заключаются в том, чтобы реализовать ваши запросы, 
              сделать этот процесс максимально простым и прозрачным.
            </span>
            <div className={styles['card-10__text']}>
              Мы всегда гарантируем клиенту индивидуальный подход, 
              качественный сервис, соблюдение сроков и самое главное - РЕЗУЛЬТАТ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageContent;