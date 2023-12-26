import { FC, ReactNode } from 'react';
import styles from './policy-page-content.module.css';
import Link from 'next/link';

import { TContactsTypes } from '@/types/data-types';

interface IPolicyPageContentProps {
  contacts: TContactsTypes | null;
}

const PolicyPageContent: FC<IPolicyPageContentProps> = ({contacts}) => {

  return (
    <div className={styles['main-page-content']}>
      <div className={styles['title']}>
        Политика конфиденциальности
      </div>
      <div className={styles['text']}>
        Настоящая Политика в области обработки и защиты персональных данных (далее — Политика) применяется ИП Реут Павел Алексеевич (ОГРНИП 322470400087356, адрес: 188692 г. Кудрово, улица Пражская, дом 13, далее —ИП Реут П.А. или мы) , к интернет-сайтам, аккаунтам в социальных сетях и иным продуктам (услугам) ИП Реут П.А. через которые мы собираем персональные данные и которые ссылаются на Политику. В Политике мы рассказываем о всех способах обработки персональных данных при использовании интернет-сайта ИП Реут П.А. Политика разработана в соответствии с Федеральным законом от 27.07.2006 г. №152-ФЗ «О персональных данных» (далее — Закон). Политика разработана и используется совместно с Согласием на обработку персональных данных.
      </div>
      <div className={styles['sub-title']}>
        1. Общее положение
      </div>
      <div className={styles['text']}>
        1.1. Персональными данными является любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу. Например, персональными данными являются фамилия, имя, отчество, должность, наименование компании, адрес электронной почты, номер телефона, место работы и должность, а также иная информация. К персональным данным относится и техническая информация, если ее можно соотнести с физическим лицом. Например, это IP-адрес, вид операционной системы, тип устройства (персональный компьютер, мобильный телефон, планшет), тип браузера, географическое положение, факт заполнения веб-формы, провайдер — поставщик услуг сети Интернет. Если мы не сможем никаким образом соотнести информацию и физическое лицо, мы не будем считать данную информацию персональными данными.
      </div>
      <div className={styles['text']}>
        1.2. Вы понимаете, чтоИП Реут П.А. является оператором только тех персональных данных, которые мы получили от вас, как от физического лица, с помощью наших интернет-сайтов, аккаунтов в социальных сетях и услуг (далее — Сервисы).
      </div>
      <div className={styles['text']}>
        1.3. Настоящий документ определяет политику ИП Реут П.А. в области обработки и защиты персональных данных. 
        {/*
        и размещен по адресу  
        <span className={styles['text-link']}><a href={'https://правильнаяссылка.ru'}> https://правильнаяссылка .ru </a></span>
        */}
        Также ИП Реут П.А. предоставляет неограниченный доступ к Политике любому лицу, лично обратившемуся к ИП Реут П.А..
      </div>
      <div className={styles['text']}>
        1.4. Основная цель ИП Реут П.А. обеспечить защиту прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну, четкое и неукоснительное соблюдение требований, в первую очередь, российского законодательства в области персональных данных.
      </div>
      <div className={styles['text']}>
        1.5. Действие Политики распространяется на все персональные данные физических лиц, обрабатываемые ИП Реут П.А., а также связанные с обработкой персональных данных процессы. ИП Реут П.А. может обрабатывать персональные данные как с применением средств автоматизации, так и без применения таких средств. К процессам в том числе, но не ограничиваясь, могут относится сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), электронное копирование, извлечение, использование, передача (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.
      </div>
      <div className={styles['text']}>
        1.6. ИП Реут П.А. осуществляет обработку персональных данных, в том числе хранит их, с помощью находящихся на территории Российской Федерации серверов.
      </div>
      <div className={styles['text']}>
        1.7. ИП Реут П.А. вправе вносить изменения в Политику по мере необходимости. Обязательный пересмотр Политики проводится в случае существенных изменений международного или национального законодательства в сфере персональных данных. В случае обработки нами персональных данных, мы обязуемся уведомить о таких изменениях по адресу вашей электронной почты.
      </div>
      <div className={styles['text']}>
        1.8. ИП Реут П.А. не проверяет достоверность предоставленных персональных данных и дееспособность лица, их предоставившего. Вы гарантируете, что все данные являются достоверными, актуальными и не нарушают законодательство РФ.
      </div>
      <div className={styles['sub-title']}>
        2. Цели обработки персональных данных
      </div>
      <div className={styles['text']}>
        ИП Реут П.А. руководствуется принципом достаточности, разумности и целесообразности обработки персональных данных. Мы осуществляем связанные с обработкой персональных данных процессы в указанных в настоящем разделе случаях и в соответствующих целях.
      </div>
      <div className={styles['text']}>
        2.1. При доступе к Сервисам — с целью надлежащего выполнения обязательств ИП Реут П.А. перед вами, надлежащего оказания услуг, принятия и обработки заказов на оказание таких услуг, регистрации на Сервисах, идентификации пользователя Сервиса, восстановления пароля от Сервиса, а также в любых других случаях, связанных с такими действиями. Использование вами Сервисов означает безоговорочное согласие с настоящей Политикой и указанными в ней условиями обработки персональных данных. В случае несогласия с данной Политикой использование Сервисов должно быть немедленно прекращено.
      </div>
      <div className={styles['text']}>
        2.2. При осуществлении связи с вами — в целях получения от вас любой обратной связи, а также в целях предоставления вам любой необходимой достоверной и полной информации, связанной с деятельностью ИП Реут П.А. В том числе, но не ограничиваясь, сюда относится предоставление информации о Сервисах и услугах, рассылка информации о Сервисах и услугах, мероприятиях и рекламных акциях, организуемых ИП Реут П.А. и/или уполномоченными на то третьими лицами. Для связи, ИП Реут П.А. вправе использовать указанные вами номер телефона и/или адрес электронной почты.
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          2.3. При получении от вас обратной связи с целью:
        </div>
        <ul className={styles['list-text']}>
          <li>получения информации о лояльности и удовлетворенности Сервисами и услугами, дальнейшего ее исследования и обработки;</li>
          <li>анализа по улучшению качества Сервисов и услуг;</li>
          <li>проведения исследований любых категорий.</li>
        </ul>
      </div>


      <div className={styles['sub-title']}>
          3. Перечень обрабатываемых персональных данных
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          3.1. Мы можем обрабатывать следующие ваши персональные данные.
        </div>
        <ul className={styles['list-text']}>
          <li>3.1.1. Общие персональные данные: фамилия, имя, отчество, адрес электронной почты, номер телефона, место работы и должность.</li>
        </ul>
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          3.2. Иная информация, обрабатываемая ИП Реут П.А:
        </div>
        <ul className={styles['list-text']}>
          <li>3.2.1. Данные о технических средствах (устройствах): IP-адрес, вид операционной системы, тип устройства (персональный компьютер, мобильный телефон, планшет), тип браузера, географическое положение, факт заполнения веб-формы, провайдер — поставщик услуг сети Интернет;</li>
          <li>3.2.2. Информация, автоматически получаемая при доступе к Сервисам, в том числе к интернет-сайтам с использованием cookies. Файлы cookies представляют собой фрагменты текста, который автоматически сохраняется в память вашего интернет-браузера с помощью нашего интернет-сайта. Это позволяет интернет-сайту в необходимых случаях обращаться к сохраненной информации на вашем компьютере и извлекать ее. Мы используем файлы cookies, чтобы можно было запомнить язык, на котором вы используете наш интернет-сайт. В следующий раз, когда вы вернетесь на наш интернет-сайт, мы сможем лучше учесть ваши предпочтения, касающиеся использования нашего интернет-сайта. Большинство интернет-браузеров автоматически сохраняют файлы cookies, но вы всегда можете изменить настройки своего интернет-браузера и отказаться от сохранения файлов cookie;</li>
          <li>3.2.3. Информация, полученная в результате ваших действий, в том числе следующие сведения: о направленных комментариях, запросах, отзывах и вопросах.</li>
        </ul>
      </div>
      <div className={styles['sub-title']}>
        4. Принципы обработки персональных данных
      </div>
      <div className={styles['text']}>
        Достаточность — главный принцип, которого мы неукоснительно придерживаемся при обработке персональных данных. Ваши персональные данные не будут обработаны, если этого действительно не требуется. Также, мы обрабатываем персональные данные руководствуясь следующими принципами.
      </div>
      <div className={styles['text']}>
        4.1. Законность и справедливость обработки персональных данных.
      </div>
      <div className={styles['text']}>
        4.2. Обработка персональных данных в соответствии с конкретными, заранее определенными и законными целями.
      </div>
      <div className={styles['text']}>
        4.3. Недопущение объединения баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.
      </div>
      <div className={styles['text']}>
        4.4. Обработке только тех персональных данных, которые отвечают целям их обработки.
      </div>
      <div className={styles['text']}>
        4.5. Соответствие содержания и объема персональных данных заявленным целям обработки.
      </div>
      <div className={styles['text']}>
        4.6. Точность, достаточность, актуальность и достоверность персональных данных.
      </div>
      <div className={styles['text']}>
        4.7. Законность технических мер, направленных на обработку персональных данных.
      </div>
      <div className={styles['text']}>
        4.8. Разумность и целесообразность обработки персональных данных.
      </div>
      <div className={styles['text']}>
        4.9. Хранение персональных данных в позволяющей определить физическое лицо форме возможно не дольше, чем того требуют цели их обработки, либо в течение срока согласия физического лица.
      </div>
      <div className={styles['text']}>
        4.10. Обрабатываемые персональные данные подлежат уничтожению либо обезличиванию незамедлительно в указанных в Политике случаях.
      </div>
      <div className={styles['sub-title']}>
        5. Обработка персональных данных
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          5.1. Сбор персональных данных.
          Сбор персональных данных осуществляется следующими способами:
        </div>
        <ul className={styles['list-text']}>
          <li>предоставление вами персональных данных при заполнении форм, в том числе и веб-форм на Сервисах;</li>
          <li>автоматический сбор информации с помощью технологий и сервисов: веб-протоколы, файлов cookie, веб-отметки, которые запускаются только при вводе вами своих данных;</li>
          <li>предоставление вами персональных данных в письменной форме, в том числе с помощью средств связи.</li>
        </ul>
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          5.2. Хранение и использование персональных данных.
        </div>
        <ul className={styles['list-text']}>
          <li>Персональные данные хранятся исключительно на должным образом защищенных носителях, в том числе электронных, и обрабатываются как с применением средств автоматизации, так и без применения таких средств;</li>
          <li>ИП Реут П.А. при автоматизированной обработке персональных данных, обеспечивает использование баз данных, находящихся на территории Российской Федерации.</li>
        </ul>
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          5.3. Передача персональных данных.
        </div>
        <ul className={styles['list-text']}>
          <li> ИП Реут П.А. передает персональные данные третьим лицам, включая, но не ограничиваясь, консультантов, партнеров, исполнителей по договорам, подрядчиков и агентов (далее — Консультанты) с вашего согласия. Исключения составляют случаи, когда передача осуществляется для обеспечения соблюдения условий договора, требований законодательства, предупреждения или пресечения ваших незаконных действий и защиты законных интересов ИП Реут П.А. и третьих лиц;</li>
          <li>Передача персональных данных Консультантам осуществляется для достижения указанных выше целей и основывается на заключаемом с соответствующим Консультантом договоре. При этом Консультанты обязуются использовать персональные данные исключительно в соответствии с настоящей Политикой, для достижения указанных целей и для оказания услуг по заключенному договору.</li>
        </ul>
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          5.4. Уничтожение персональных данных.
          ИП Реут П.А. уничтожает персональные данные в следующих случаях:

        </div>
        <ul className={styles['list-text']}>
          <li>наличие угрозы безопасности Сервисов;</li>
          <li>достижение целей обработки персональных данных или в случае утраты необходимости достижения таких целей;</li>
          <li>нарушение вами условий Политики;</li>
          <li>истечение срока хранения персональных данных;</li>
          <li>прекращение действия или расторжение заключенного договора;</li>
          <li>по вашему запросу или в случае отзыва согласия физического лица на обработку персональных данных.</li>
        </ul>
      </div>
      <div className={styles['sub-title']}>
        6. Ваши права
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          6.1. Вы имеете право на получение информации об обработке ваших персональных данных, в том числе содержащей:
        </div>
        <ul className={styles['list-text']}>
          <li>подтверждение факта обработки ваших персональных данных;</li>
          <li>правовые основания обработки ваших персональных данных;</li>
          <li>цели и применяемые ИП Реут П.А. способы обработки ваших персональных данных;</li>
          <li>какие именно ваши персональные данные мы обрабатываем и источник их получения;</li>
          <li>сроки обработки ваших персональных данных, в том числе сроки их хранения;</li>
          <li>порядок осуществления прав, предусмотренных законодательством Российской Федерации;</li>
          <li>информацию об осуществленной или о предполагаемой трансграничной передаче данных;</li>
          <li>сведения о лицах, которым могут быть раскрыты персональные данные на основании договора сИП Реут П.А. или в соответствии с законодательством Российской Федерации;</li>
          <li>наименование или фамилию, имя, отчество и адрес лица, осуществляющего обработку персональных данных по поручению ИП Реут П.А. если обработка поручена или будет поручена такому лицу;</li>
          <li>иные сведения, предусмотренные законодательством Российской Федерации.</li>
        </ul>
        <div className={styles['text']}>
          Вы вправе получать такие сведения неограниченное количество раз. Для этого необходимо направить ИП Реут П.А. соответствующий запрос в порядке, предусмотренном разделом 11 Политики.
        </div>
      </div>
      <div className={styles['sub-title']}>
        7. Обязанности ИП Реут П.А.
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          7.1. В соответствии с требованиями Закона ИП Реут П.А. обязан:
        </div>
        <ul className={styles['list-text']}>
          <li>7.1.1. предоставлять по вашему запросу информацию об обработке ваших персональных данных, указанную в п. 6.1. Политики, или обоснованный отказ;</li>
          <li>7.1.3. по вашему требованию уточнять обрабатываемые персональные данные, блокировать или удалять их, если они являются неполными, устаревшими, неточными, незаконно полученными или ненужными для заявленной цели обработки;</li>
          <li>7.1.4. обеспечить правомерность обработки персональных данных. В случае, если обеспечить правомерность обработки персональных данных невозможно, ИП Реут П.А. в срок, не превышающий 10 (десять) рабочих дней с даты выявления неправомерной обработки персональных данных, обязана их уничтожить или обеспечить их уничтожение;</li>
          <li>7.1.5. в случае прекращения действия заключенного с вами договора или отзыва вами согласия на обработку персональных данных, мы прекращаем их обработку и уничтожаем их в срок, не превышающий 30 (тридцать) рабочих дней с даты поступления вашего отзыва. Исключения составляют случаи, когда обработка может быть продолжена в соответствии с законодательством Российской Федерации</li>
        </ul>
      </div>
      <div className={styles['sub-title']}>
        8. Сведения о защите персональных данных
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          8.1. Все предоставляемые вами персональные данные конфиденциальны по умолчанию. Защита персональных данных, обрабатываемых ИП Реут П.А. обеспечивается реализацией правовых, организационных и технических мер, необходимых и достаточных для обеспечения требований законодательства Российской Федерации в области защиты персональных данных. Однако, мы всегда стараемся максимально защитить ваши данные и применяем большее число мер по защите персональных данных, чем это предусмотрено законодательством. Вот некоторые из реализуемых ИП Реут П.А. мер по защите персональных данных:
        </div>
        <div className={styles['text']}>
          8.2. отказ от любых способов обработки персональных данных, не соответствующих целям, заранее предопределенным ИП Реут П.А.
        </div>
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          8.3. Организационные меры включают в себя:
        </div>
        <ul className={styles['list-text']}>
          <li>
            8.3.1. назначение лица, ответственного за организацию обработки персональных данных. Вы можете контактировать с таким лицом, используя следующий адрес электронной почты:
            <span className={styles['text-link']}>
              <Link href={`mailto:${contacts?.mail}`}>{` ${contacts?.mail}.`}</Link>
            </span>
          </li>
          <li>8.3.2. ограничение состава работников ИП Реут П.А., имеющих доступ к персональным данным, и организацию разрешительной системы доступа к ним;</li>
          <li>8.3.3. периодическая оценка рисков, касающихся процесса обработки персональных данных;</li>
          <li>8.3.4. проведение внутренних расследований для обнаружения фактов, связанных с несанкционированным доступом к персональным данным;</li>
          <li>8.3.5. применение методов шифрования при обработке персональных данных;</li>
          <li>8.3.6. мониторинг и анализ защищенности сетевой инфраструктуры ИП Реут П.А.;</li>
          <li>8.3.7. ознакомление работников ИП Реут П.А. с положениями законодательства Российской Федерации о персональных данных, в том числе с требованиями к защите персональных данных, с локальными актами ИП Реут П.А. по вопросам обработки персональных данных, обучение указанных работников;</li>
          <li>8.3.8. организация режима обеспечения безопасности помещений, в которых размещены носители персональных данных, препятствующий возможности неконтролируемого проникновения или пребывания в этих помещениях лиц, не имеющих права доступа в эти помещения;</li>
        </ul>
      </div>
      <div className={styles['text']}>
     8.4. ИП Реут П.А. обязуется и обязует третьих лиц, в случае передачи им права на обработку персональных данных, соблюдать режим конфиденциальности в отношении персональных данных и не использовать персональные данные без законных оснований их обработки.
      </div>
      <div className={styles['sub-title']}>
        9. Трансграничная передача персональных данных
      </div>
      <div className={styles['text']}>
        9.1. Трансграничная передача персональных данных не осуществляется.
      </div>
      <div className={styles['sub-title']}>
        10. Ограничение действия Политики
      </div>
      <div className={styles['text']}>
        10.1. Вы также обязаны разумно и ответственно подходить к размещению в открытом доступе собственных персональных данных, в том числе на Сервисах в случае оставления отзывов и комментариев.
      </div>
      <div className={styles['text']}>
        10.2. ИП Реут П.А. не несет ответственности за действия третьих лиц, получивших доступ к вашим персональным данным по вашей вине последнего.
      </div>
      <div className={styles['sub-title']}>
        11. Обращения Субъекта персональных данных
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          11.1. Вы вправе направлять ИП Реут П.А. свои запросы, в том числе запросы относительно использования ваших персональных данных:
        </div>
        <ul className={styles['list-text']}>
          <li className={styles['text']}>11.1.1. в письменной форме по  адресу: 188692 г. Кудрово, улица Пражская, дом 13;</li>
          <li>
            11.1.2. в форме электронного документа по адресу электронной почты: 
            <span className={styles['text-link']}>
              <Link href={`mailto:${contacts?.mail}`}>{` ${contacts?.mail}.`}</Link>
            </span>
          </li>
        </ul>
      </div>
      <div className={styles['text-block-list']}>
        <div className={styles['text']}>
          11.2. Запрос должен содержать следующую информацию:
        </div>
        <ul className={styles['list-text']}>
          <li>11.2.1. номер основного документа, удостоверяющего вашу личность;</li>
          <li>11.2.2. сведения о дате выдачи указанного документа и выдавшем его органе;</li>
          <li>11.2.3. сведения, подтверждающие ваше участие в отношениях с ИП Реут П.А.;</li>
          <li>11.2.4. ваша подпись</li>
        </ul>
      </div>
      <div className={styles['text']}>
        11.3. ИП Реут П.А. обязуется рассмотреть и направить ответ на поступивший запрос на указанный в запросе адрес в течение 30 (тридцати) календарных дней с момента поступления обращения.
      </div>
      <div className={styles['text']}>
        11.4. Вся корреспонденция, полученная ИП Реут П.А., (обращения в письменной или электронной форме), относится к информации ограниченного доступа и не разглашается без вашего письменного согласия.
      </div>
      <div className={styles['sub-title']}>
        12. Контактная информация и реквизиты ИП Реут П.А.:
      </div>
      <div className={styles['text']}>
        ИП Реут Павел Алексеевич ОГРНИП: 322470400087356  адрес: 188692 г. Кудрово, улица Пражская, дом 13 ИНН: 781143783880 
        <span className={styles['text-link']}>
          <Link href={`mailto:${contacts?.mail}`}>{` ${contacts?.mail}.`}</Link>
        </span>
      </div>
    </div>
  );
};

export default PolicyPageContent;