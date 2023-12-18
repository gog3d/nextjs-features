import { FC, ReactNode, useEffect, useRef } from 'react';
import styles from './input-form-text-area-mobile.module.css';

interface IInputFormTextAreaMobileProps {
  value: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

const InputFormTextAreaMobile: FC<IInputFormTextAreaMobileProps> = ({ value, placeholder, handleChange }) => {
  const listRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (listRef && listRef.current) {
     const autosize = () => {
      if (listRef && listRef.current) {
         listRef.current.style.cssText = 'height:auto; padding:0';
         listRef.current.style.cssText = 'height:' + listRef.current.scrollHeight + 'px';
//         console.log(listRef.current.scrollHeight);
       }
     }
     listRef.current?.addEventListener('keydown', autosize);
      return () => {
        listRef.current?.removeEventListener('keydown', autosize);
      }
    }
  }, [listRef])

  return (
    <textarea
      ref={listRef}
      className={styles['textarea']} 
      wrap='hard'
      cols={0}
      rows={3}
      onChange={handleChange} 
      value={value}
      placeholder={placeholder}
    >
    </textarea>
  );
}

export default InputFormTextAreaMobile;