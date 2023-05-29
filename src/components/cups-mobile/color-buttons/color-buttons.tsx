import styles from './color-buttons.module.css';

const ColorButtons = ({children}) => {
  return (
    <div className={styles['color__buttons']}>
      {children}
    </div>
  );
};

export default ColorButtons;