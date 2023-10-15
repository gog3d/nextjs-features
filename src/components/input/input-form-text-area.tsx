import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './input-form-text-area.module.css';

interface IInputFormTextAreaProps {
  value: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

const InputFormTextArea: FC<IInputFormTextAreaProps> = ({ value, placeholder, handleChange }) => {

  const [rows, setRows] = useState(2);
  const listRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    const lineHeight = 24;
    if (listRef && listRef.current) {
     const autosize = () => {
      if (listRef && listRef.current) {
         listRef.current.style.cssText = 'height:auto; padding:8px';
         listRef.current.style.cssText = 'height:' + listRef.current.scrollHeight + 'px';
//         console.log(listRef.current.scrollHeight);
         setRows(Math.floor(listRef.current.scrollHeight / lineHeight));
       }
     }
     listRef.current?.addEventListener('keydown', autosize);
      return () => {
        listRef.current?.removeEventListener('keydown', autosize);
      }
    }
  }, [listRef])

  return (
    <div className={styles['textarea-container']} >
      <textarea
        ref={listRef}
        className={styles['textarea']} 
        wrap='hard'
        cols={0}
        rows={2}
        onChange={handleChange} 
        value={value}
        placeholder={placeholder}
      >
      </textarea>
      <div className={styles['textarea-rows']} >
        {`${rows} / 100`}
      </div>
    </div>
  );
}

export default InputFormTextArea;