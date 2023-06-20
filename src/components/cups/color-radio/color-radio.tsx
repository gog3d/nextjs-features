import { FC, ReactNode, useState, useEffect } from 'react';
import styles from './color-radio.module.css';
import { useCustomization } from '@/context/customization';

interface IColorRadioProps {
  color: string;
}

const ColorRadio: FC<IColorRadioProps> = ({color}) => {

  const {
    colors,
    checkedColor,
    setCheckedColor,
    cupColor,
    setCupColor
  } = useCustomization();

  const style = {
    backgroundColor: color
  };

  useEffect(()=>{
    setCheckedColor(cupColor);
  }, [cupColor]);

  return (
    <label>
      <input 
        className={styles['color__radio_input']} 
        type="radio" 
        name="color"
        checked={color === checkedColor}
        onChange={() => setCheckedColor(color)}
        />
      <div className={styles['color__button-container']}>
        <div className={styles['color__button']} style={style}></div>
      </div>
    </label>
  );
};

export default ColorRadio;