import { FC, ReactNode } from 'react';
import styles from './policy-page-content-mobile.module.css';

const PolicyPageContentMobile = () => {
  return (
    <div className={styles['main-page-content']}>
      <div className={styles['title']}>
        Согласие на обработку персональных данных
      </div>
      <div className={styles['text']}>
        Заполняя веб-форму и отправляя указанные в ней персональные данные, я даю свое согласие ИП Реут Павел Алексеевич 
        (ОГРНИП 322470400087356, адрес: 188692 г. Кудрово, улица Пражская, дом 13, далее ИП Реут П. А. ) на обработку моих 
        персональных данных в соответствии с политикой конфиденциальности 
        <span className={styles['text-link']}>
          <a href={'https://правильнаяссылка.ru'}> (https://ссылка на страницу) </a>
        </span>
         с использованием средств автоматизации или без использования таких средств любыми способами, включая, но не ограничиваясь, 
         сбор, запись, систематизацию, накопление, хранение, уточнение, обновление, изменение, электронное копирование, извлечение, использование, 
         передачу (распространение, предоставление, доступ), трансграничную передачу, обезличивание, блокирование, удаление, уничтожение, для целей, указанных ниже.
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
        Давая согласие, я подтверждаю, что:
        </div>
        <ul className={styles['list-text']}>
          <li>действую свободно, по своей воле и в своих интересах;</li>
          <li>являюсь дееспособным;</li>
          <li>мое согласие является конкретным, информированным и сознательным.</li>
        </ul>
      </div>
      <div className={styles['sub-title']}>
        Цели обработки персональных данных:
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          Я понимаю, что ИП Реут П.А.  собирает мои персональные данные с целью:
        <ul className={styles['list-text']}>
          <li>надлежащего оказания услуг, принятия и обработки заказов на оказание таких услуг;</li>
          <li>регистрации на Сервисах, идентификации пользователя Сервиса, восстановления пароля от Сервисов, а также в любых других случаях, связанных с такими действиями;</li>
          <li>рассылки сообщений, связанных с предоставлением доступа к сайту 
            <span className={styles['text-link']}>
              <a href={'https://правильнаяссылка.ru'}> https://правильнаяссылка .ru
              </a>
            </span>
          </li>
        </ul>
      </div>
     </div>
      <div className={styles['sub-title']}>
        Перечень персональных данных, на обработку которых я даю согласие:
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
        </div>
        <ul className={styles['list-text']}>
          <li>Мои персональные данные: имя, фамилия, адрес электронной почты; номер телефона; место работы и должность.</li>
          <li>Иная информация, обрабатываемая ProninTeam: o данные о технических средствах (устройствах): IP-адрес, вид операционной системы, тип устройства (персональный компьютер, мобильный телефон, планшет), тип браузера, географическое положение, факт заполнения вебформы, время участия в мероприятии; o информация, автоматически получаемая при доступе к Сервисам, в том числе к сайтам с использованием cookies.</li>
        </ul>
      </div>
      <div className={styles['sub-title']}>
        Передача персональных данных третьим лицам.
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
        </div>
        <ul className={styles['list-text']}>
          <li>Настоящим я признаю и подтверждаю, что в случае необходимости и для достижения указанных выше целей ИП Реут П.А.  вправе передавать мои персональные данные третьим лицам. Такими третьими лицами являются партнеры, исполнители по договорам, поставщики и иные уполномоченные ими лица. Я также даю согласие на передачу моих персональных данных таким третьим лицам для их обработки в целях и способами, указанными выше. Настоящее согласие действует до момента его отзыва в письменной форме Я уведомлен и согласен с тем, что я могу отписаться от рассылки и отозвать свое согласие в любой момент, написав об этом на электронную почту a@указать почту.ru. Также я могу отозвать согласие, направив ИП Реут П.А. уведомление в письменной форме по указанному выше адресу. Такое уведомление направляется заказным письмом с описью вложения. В случае отзыва моего согласия мои персональные данные будут уничтожены в течение 30 (тридцати) календарных дней с даты получения ИП Реут П.А. уведомления об отзыве. Обработка моих персональных данных будет прекращена, за исключением случаев, прямо предусмотренных законодательством Российской Федерации.</li>
        </ul>
      </div>
    </div>
  );
};

export default PolicyPageContentMobile;