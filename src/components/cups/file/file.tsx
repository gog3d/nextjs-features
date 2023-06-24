import React, { FC, ReactNode, SetStateAction } from 'react';
import styles from './file.module.css';
import ClipIcon from '../icons/clip-icon';
import BasketIcon from '../icons/basket-icon';

interface IFileProps {
  setSource:  React.Dispatch<SetStateAction<string>>;
}

const File: FC<IFileProps> = ({setSource}) => {

  const onFileChange = async (e:  React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
//      let imageDataUrl = await readFile(file)
      setSource( URL.createObjectURL(file))
    }
  }

  return (
    <div className={styles['file__container']}>
      <div className={styles['file']}>
        <label className={styles['file__label']}>
          <div className={styles['file__label_svg']}>
            <ClipIcon />
          </div>
          <p className={styles['file__label_text']}>Выбрать файл</p>
          <input 
            className={styles['file__input']} 
            type="file"
            onChange={onFileChange}
          ></input>
        </label>
      </div>
      <button 
        className={styles['file_delete-button']}
        onClick={() => setSource('')}
      >
        <BasketIcon />
      </button>
    </div>
  );
};

export default File;