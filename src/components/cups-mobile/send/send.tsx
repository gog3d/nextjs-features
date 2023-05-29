import styles from './send.module.css';

const Send = () => {
  return (
    <div className={styles['send']}>
      <p className={styles['send__title']}>Отправить макет на email</p>
      <label className={styles['send__label']}>
        <input className={styles['send__email']} type="email"></input>
        <button className={styles['send__button_email']}>Отправить</button>
      </label>
    </div>
  );
};

export default Send;