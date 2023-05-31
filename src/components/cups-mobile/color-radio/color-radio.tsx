import { FC, ReactNode } from 'react';
import styles from './color-radio.module.css';

interface IColorRadioProps {
  color: string;
}


const ColorRadio: FC<IColorRadioProps> = ({color}) => {
  const style = {
    backgroundColor: color
  };
  
  return (
    <label>
      <input className={styles['color__radio_input']} type="radio" name="color"/>
        <div className={styles['color__button-container']}>
          <div className={styles['color__button']} style={style}></div>
        </div>
    </label>
  );
};

export default ColorRadio;