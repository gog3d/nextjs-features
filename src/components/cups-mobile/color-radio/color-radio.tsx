import styles from './color-radio.module.css';

const ColorRadio = ({checked, color}) => {
  const style = {
    backgroundColor: color
  };
  
  return (
    <label>
      <input className={styles['color__radio_input']} type="radio" name="color" checked/>
        <div className={styles['color__button-container']}>
          <div className={styles['color__button']} style={style}></div>
        </div>
    </label>
  );
};

export default ColorRadio;