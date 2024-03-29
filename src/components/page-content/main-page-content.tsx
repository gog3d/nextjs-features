import { FC, useState, useCallback } from 'react';
import Link from 'next/link';

import styles from './main-page-content.module.css';

import ContainerPage from '@/components/container/container-page';
import ButtonMobile from '@/components/button/button-mobile';
import ButtonConnectMobile from '@/components/button/button-connect-mobile';
import ButtonLink from '@/components/button/button-link';
import RightChevronIcon from '@/components/icons/right-chevron-icon';
import Modal from '@/components/modal/modal';

import FormFeedback from '@/components/form/form-feedback';
import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IMainPageContentProps {
  catalog: Array<TCatalogItemsTypes>;
}

const MainPageContent: FC<IMainPageContentProps> = ({catalog}) => {
  const feedback = '/feedback';

  const [modalOn, setModalOn] = useState(false)
  const modalOpen = () => {
    setModalOn(true);
  };
  const modalClose = () => {
    setModalOn(false);
  };

  return (
    <ContainerPage>
      <Modal modalOn={modalOn} modalClick={modalClose}>
        <FormFeedback catalog={catalog}/>
      </Modal>
      <div className={styles['main-page-content']}>
        <div className={styles['card-1']}>
          Комплексные решения в сфере ресторанного бизнеса и сегмента HoReCa
        </div>
        <div className={styles['container-row']}>
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
            <button onClick={modalOpen}>
              <div className={styles['card-6__button-connect']}>
               {'Связаться с нами'}
              </div>
            </button>
          </div>
          <div className={styles['container-column']}>
            <div className={styles['card-2']}>
              <div className={styles['card-2__title']}>
                Что мы делаем?
              </div>
              <div className={styles['card-2__text']}>
                Если честно, мы делаем всё, что душе угодно, но только то, в чем действительно хорошо разбираемся, а именно:
                упаковка для фастфуда, кофеен, пекарен, рекламное оформление, униформу еще мы варим соус и оказываем услугу консалтинга, 
                да-да, напоминаю, делаем, что душе угодно 
              </div>
            </div>
            <div className={styles['card-4']}>
              <div className={styles['card-4__text']}>
                <span className={styles['card-4__title']}>Наша сильная сторона</span> — это углубленный маркетинговый подход и поиск индивидуальных решений для каждого клиента 
                с полным погружением в рабочий процесс. 
                Поэтому дизайн/макет и штамп - это бесплатно.
              </div>
            </div>
            <div className={styles['card-5']}>
              <div className={styles['card-5__text-container']}>
                <div className={styles['card-5__text-1']}>
                  Мы понимаем как влияют на бизнес узнаваемость, бренд, реклама, маркетинг, формирование цен, а также реализация этих задач. 
                  Поэтому сделали сервис, который упростит все решения и даст желаемый результат.
                </div>
                <div>
                  <Link href={'/'}>
                    <RightChevronIcon />
                  </Link>
                </div>
              </div>
              <div className={styles['card-5__text-2']}>
                Ведь каждый выполненный заказ — это монетка счастья в копилочку нашей радости!
              </div>
            </div>
          </div>
        </div>
        <div className={styles['card-3']}>
          <div className={styles['card-3__title']}>
            Хотим сразу сказать, что мы не интернет-магазин.
          </div>
          <div className={styles['card-3__text-container-1']}>
            <div className={styles['card-3__text-wrapper']}>
              <div className={styles['card-3__text-1']}>
                Вы вряд ли получите от нас общее КП (для всех) и единый прайс на все позиции.
                <br></br>
                На вопрос: «А сколько стоит 1 шт?» — скорее всего, мы тоже не ответим. 
                Все потому, что..
              </div>
              <div className={styles['card-3__text-2']}>
                Если у вас есть свой дизайнер, маркетолог и технолог, мы внимательно изучим все их пожелания, ТЗ и комментарии. 
                Если нет — то все сделаем сами.
              </div>
            </div>
          </div>
        </div>
        <div className={styles['container-row']}>
          <div className={styles['container-row-1']}>
            <svg width="246" height="242" viewBox="0 0 246 242" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="124.13" cy="126.273" rx="115.604" ry="115.228" fill="#CFDEFD"/>
              <path d="M191.696 121.38C159.263 90.7555 116.406 106.713 99.0315 118.52C79.3404 129.08 70.2348 148.147 68.1434 156.36C43.433 147.384 23.5809 157.314 16.7437 163.4C2.07191 176.073 -0.309049 192.147 0.334453 198.601C3.42326 232.041 32.6704 241.135 46.9079 241.501L205.933 240.401C228.906 239.096 239.077 228.787 242.844 220.883C257.536 183.427 213.092 175.207 189.765 180.121C203.922 173.3 224.128 152.004 191.696 121.38Z" fill="#4547EA"/>
              <path d="M180.033 130.841C150.123 101.627 113.567 119.578 97.5438 130.841C79.3841 140.915 79.7107 159.16 77.782 166.996C54.9934 158.433 32.3095 161.189 26.004 166.996C12.4733 179.084 10.2776 194.419 10.871 200.576C13.7196 232.477 40.692 241.152 53.8221 241.501L200.479 240.452C223.751 238.534 233.935 230.238 236.976 223.662C247.48 179.84 189.055 183.641 167.542 188.328C180.598 181.822 209.943 160.056 180.033 130.841Z" fill="#555DEC" fillOpacity="0.52"/>
              <path d="M44.8658 197.811C37.9187 198.583 41.5691 195.079 44.1421 193.23C42.7913 196.123 45.107 196.927 46.5543 196.847C47.9387 196.77 49.6901 195.641 51.6198 194.677C49.2076 197.329 47.2779 197.329 44.8658 197.811Z" fill="#90B2F0"/>
              <path d="M59.3388 190.096C55.4794 191.542 55.4794 189.854 55.2382 187.926C49.8349 188.89 45.4287 191.944 44.1422 193.23C42.9361 194.435 43.2738 197.039 46.5544 196.846C49.8349 196.653 56.9267 192.024 59.3388 190.096Z" fill="#0A0062"/>
              <path d="M57.1677 167.916C56.9747 166.373 58.6954 163.818 59.5799 162.854C60.0623 165.023 63.1981 165.505 64.6454 165.264C63.2946 168.157 60.7055 169.202 59.8211 169.363C59.017 169.524 57.3607 169.459 57.1677 167.916Z" fill="#90B2F0"/>
              <path d="M69.2287 158.514C68.4568 158.514 67.7814 157.308 67.5402 156.826C64.2596 157.598 60.7861 161.246 59.58 162.853C60.0625 165.505 63.3591 165.746 64.6456 165.505C66.4949 163.255 70.0006 158.514 69.2287 158.514Z" fill="#0A0062"/>
              <path d="M84.6666 149.111L80.0834 145.012L74.2943 125.485L64.8868 125.002C63.6808 127.654 63.6816 127.62 62.9571 129.824L70.676 152.486H72.6057L72.847 154.897L74.7767 152.968L80.5659 153.45L104.687 152.486C106.054 154.495 111.104 158.224 119.402 157.067C118.356 158.915 115.783 162.853 111.683 163.576C107.743 163.978 104.446 164.299 98.1747 162.612C92.8679 160.683 84.6666 160.924 79.8422 165.746C73.8118 171.773 65.1281 188.649 58.1328 190.577C52.5366 192.12 56.2835 181.255 58.8564 175.63C60.7862 171.773 65.5622 162.949 69.2287 158.513C67.6849 159.092 64.6456 152.004 63.4395 148.146C61.4043 141.637 61.5257 134.178 62.9571 129.824C63.6816 127.62 63.6808 127.654 64.8868 125.002C66.8166 121.627 69.3895 122.993 71.1585 123.797C71.7796 124.079 73.326 124.861 74.2943 125.485C82.0894 130.908 96.6822 143.174 96.4861 143.566C96.2932 143.952 94.3152 145.736 92.8679 146.218C88.8155 143.903 85.8726 147.182 84.6666 149.111Z" fill="#7F98F5"/>
              <path d="M92.6264 146.458C96.6788 146.265 102.677 134.805 105.17 129.1L107.823 131.51L106.617 140.431C106.135 142.6 103.079 145.039 100.828 146.861C103.38 146.184 104.926 145.367 105.893 144.529L118.195 134.162C121.669 134.934 123.341 139.306 123.743 141.395C122.392 146.795 110.476 150.074 104.687 151.038H82.6229L82.1405 149.833C83.8773 150.026 84.9556 148.816 85.3899 148.145C87.5126 144.867 91.0987 145.654 92.6264 146.458Z" fill="#FFB9BA"/>
              <path d="M92.6264 146.458C96.6788 146.265 102.677 134.805 105.17 129.1L107.823 131.51L106.617 140.431C106.135 142.6 103.079 145.039 100.828 146.861M92.6264 146.458C91.0987 145.654 87.5126 144.867 85.3899 148.145C84.9556 148.816 83.8773 150.026 82.1405 149.833L82.6229 151.038H104.687C110.476 150.074 122.392 146.795 123.743 141.395C123.341 139.306 121.669 134.934 118.195 134.162L105.893 144.529C104.926 145.367 103.38 146.184 100.828 146.861M92.6264 146.458C93.9772 147.615 97.3703 147.422 98.898 147.181C99.5483 147.143 100.197 147.028 100.828 146.861" stroke="#FFB1B2" strokeWidth="1.5"/>
              <path d="M103.481 126.932C109.464 114.781 115.462 112.708 117.713 113.19C118.919 114.797 122.152 117.096 126.397 112.467C131.945 113.351 142.269 117.867 138.217 129.825C136.689 135.048 130.739 147.762 119.161 156.826C115.864 157.469 108.402 157.501 104.929 152.487V151.523C110.477 150.799 121.09 146.99 123.985 141.397C123.467 139.549 121.548 135.466 118.021 133.923C114.239 137.833 108.769 141.835 105.894 143.808L108.065 131.271L103.481 126.932Z" fill="#FF7165"/>
              <path d="M108.065 131.271L103.481 126.932C109.464 114.781 115.462 112.708 117.713 113.19C118.919 114.797 122.152 117.096 126.397 112.467C131.945 113.351 142.269 117.867 138.217 129.825C136.689 135.048 130.739 147.762 119.161 156.826C115.864 157.469 108.402 157.501 104.929 152.487V151.523C110.477 150.799 121.09 146.99 123.985 141.397C123.467 139.549 121.548 135.466 118.021 133.923M108.065 131.271L105.894 143.808C108.769 141.835 114.239 137.833 118.021 133.923M108.065 131.271C107.904 129.503 107.968 125.196 109.512 122.11M124.708 123.557C124.079 126.794 121.326 130.507 118.021 133.923" stroke="#F5675B" strokeWidth="1.5"/>
              <path d="M115.301 93.9025C118.437 92.1346 127.072 91.6845 125.915 104.028C125.496 104.551 125.087 105.033 124.687 105.475C123.869 107.403 125.915 111.02 126.397 112.466C122.345 116.902 118.678 114.555 117.472 112.948V109.66C113.763 109.399 111.756 104.487 111.2 100.653C110.992 99.4957 113.124 95.5098 115.301 93.9025Z" fill="#FFB9BA"/>
              <path d="M116.748 98.0006C120.801 93.7575 121.353 96.9559 121.514 99.4471C121.606 100.219 122.72 100.411 122.961 99.6882L123.502 98.2417C123.985 97.0363 125.216 97.6792 125.432 98.2417C126.204 99.0132 124.687 100.894 124.467 102.099C124.081 104.221 125.593 104.269 126.397 104.028C127.555 103.642 127.764 100.974 127.603 99.9293C127.217 97.422 129.292 96.313 129.774 94.3844C130.739 91.2985 129.05 90.8485 128.085 91.0092C126.349 91.7807 125.915 91.1699 125.915 90.7681C125.336 86.525 121.573 86.4286 119.643 86.9107C117.713 87.634 118.678 90.0448 116.99 89.3216C112.744 85.85 110.477 88.8394 110.718 91.4914C110.718 93.1789 109.753 92.9379 108.547 93.1789C101.793 95.1076 109.029 101.135 112.406 100.17C115.108 99.3989 116.427 98.4024 116.748 98.0006Z" fill="#222222" stroke="#222222"/>
              <path d="M74.2942 125.727L61.5098 125.004L70.676 152.488L82.2543 153.452L104.446 152.488V151.282C97.2097 151.443 82.6403 151.523 82.2543 151.523C81.8684 151.523 76.7868 134.326 74.2942 125.727Z" fill="#0F0776" stroke="#0F0776"/>
              <rect x="124.506" y="72.7598" width="8.28436" height="9.03256" rx="2" fill="#F5DF4D"/>
              <rect x="147.1" y="45.7129" width="10.5437" height="12.0434" rx="2" fill="#F5DF4D"/>
              <rect x="182.497" y="5.1875" width="15.0625" height="16.5597" rx="2" fill="#F5DF4D"/>
              <rect x="128.972" y="70.825" width="6.13123" height="6.12713" rx="2.3" stroke="#939597" strokeWidth="1.4"/>
              <rect x="152.67" y="43.4504" width="7.93956" height="7.93436" rx="2.2" stroke="#939597" strokeWidth="1.6"/>
              <rect x="190.475" y="1.7" width="11.1562" height="11.1488" rx="1.8" stroke="#939597" strokeWidth="2.4"/>
            </svg>
            <div className={styles['card-10']}>
              <div className={styles['card-10__text-1']}>
                 <span className={styles['card-10__color']}>Ес</span>ли после прочитанного вам ничего не понятно, но очень интересно
              </div>
              <div className={styles['card-10__text-2']} style={{color: 'red'}}>
                {/*(гипер ссылка на вкладку как мы работаем в подробностях)*/}
              </div>
              <ButtonLink link={'/catalog'}>
                <div className={styles['card-10__button-connect']}>
                 {'Попробовать конструктор'}
                </div>
              </ButtonLink>
            </div>
          </div>
          <div className={styles['card-8']}>
            <div className={styles['card-8__title']}>
              Конечно же лучше один раз увидеть, чем сто раз представить!
            </div>
            <div className={styles['card-8__text-container']}>
              <div className={styles['card-8__text']}>
                Воспользуйтесь опцией и визуализируйте свой бренд на представленных упаковочных решениях
                <br></br>
                (нажми меня) — открывается фича с визуализацией
              </div>
              <div className={styles['card-8__button-container']}>
                <button onClick={modalOpen}>
                  <div className={styles['card-8__button-connect']}>
                   {'Связаться с нами'}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
};

export default MainPageContent;