'use client';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './text-area.module.css';

import { selectTextAreaAmount} from '@/redux/features/form/selectors';
import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const TextArea: FC = () => {

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


  const value = useAppSelector((state) => selectTextAreaAmount(state)); 
  
  const dispatch = useAppDispatch();

  const handler = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(formActions.textArea(e.target.value));
  };


  return (
    <div className={styles['textarea-container']} >
      <textarea
        ref={listRef}
        className={styles['textarea']} 
        wrap='hard'
        cols={0}
        rows={2}
        onChange={handler} 
        value={value}
        placeholder={'Сообщение'}
      >
      </textarea>
      <div className={styles['textarea-rows']} >
        {`${rows} / 100`}
      </div>
    </div>
  );
}

export default TextArea;