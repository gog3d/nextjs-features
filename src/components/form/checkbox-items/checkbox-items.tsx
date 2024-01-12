'use client';
import { FC, ReactNode, useCallback, useEffect } from 'react';
import styles from './checkbox-items.module.css';

import DownChevronMobileIcon from '@/components/icons/down-chevron-mobile-icon';
//import CheckboxMobileIcon from '@/components/icons/checkbox-mobile-icon';
//import CheckboxSmallIcon from '@/components/icons/checkbox-small-icon';

import { selectCheckboxItemsAmount} from '@/redux/features/form/selectors';

import { formActions } from '@/redux/features/form';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

export interface ICheckboxItemsProps {
  catalog: Array<TCatalogItemsTypes>;
}


export const CheckboxItems: FC<ICheckboxItemsProps> = ({catalog}) => {

  const checkboxItems = useAppSelector((state) => selectCheckboxItemsAmount(state)); 
  
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    const items = catalog.map((item, index) =>item.title);
    dispatch(formActions.checkboxItems([...new Array(items.length).fill("")]));
  }, [catalog]);

  //console.log(checkboxItems);

  const handler = useCallback((index: number) => {
      const items = catalog.map((item, index) =>item.title);
      const checkbox = [...checkboxItems];
      if (checkbox[index]) {
        checkbox[index] = '';
        dispatch(formActions.checkboxItems([...checkbox]));
      } else {
        checkbox[index] = items[index];
        dispatch(formActions.checkboxItems([...checkbox]));
      }
  }, [catalog, checkboxItems]);


  return (
    <div className={styles['accordion']}>
      <details className={styles['accordion__details']}>
        <summary className={styles['accordion__summary']}>
          <p className={styles['accordion__summary_title']}>
            {'Наименование'}
          </p>
          <div className={styles['accordion__summary_arrow']}>
            <DownChevronMobileIcon />
          </div>
        </summary>
        <div className={styles['accordion__details_content']}>
        {
          catalog.map((item, index) =>
            <div key={index}>
              <label className={styles['checkbox']}>
                <input className={styles['checkbox__input']} 
                  type='checkbox' 
                  name={item.type}
                  onChange={(e:  React.ChangeEvent<HTMLInputElement>) => handler(index)}
                  checked={checkboxItems[index] ? true : false}
                />
                <div className={styles['checkbox__state']}>
                  <div className={styles['checkbox__control']}>
                    <div className={styles['icon-false']}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.8285 9.98044C4.02694 7.31406 4.13044 6.30362 5.21581 5.21825C6.30118 4.13288 7.31162 4.02938 9.978 3.83094C10.6408 3.78161 11.3215 3.75195 11.9995 3.75195C12.6775 3.75195 13.3583 3.78161 14.021 3.83094C16.6874 4.02938 17.6978 4.13288 18.7832 5.21825C19.8686 6.30362 19.9721 7.31406 20.1705 9.98044C20.2199 10.6432 20.2495 11.3239 20.2495 12.002C20.2495 12.68 20.2199 13.3607 20.1705 14.0235C19.9721 16.6898 19.8686 17.7003 18.7832 18.7857C17.6978 19.871 16.6874 19.9745 14.021 20.173C13.3583 20.2223 12.6775 20.252 11.9995 20.252C11.3215 20.252 10.6408 20.2223 9.978 20.173C7.31162 19.9745 6.30118 19.871 5.21581 18.7857C4.13044 17.7003 4.02694 16.6898 3.8285 14.0235C3.77917 13.3607 3.74951 12.68 3.74951 12.002C3.74951 11.3239 3.77917 10.6432 3.8285 9.98044Z" fill="white" stroke="#D9D9D9" strokeWidth="1.5"/>
                      </svg>
                    </div>

                    <div className={styles['icon-focus']}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.8285 9.98044C4.02694 7.31406 4.13044 6.30362 5.21581 5.21825C6.30118 4.13288 7.31162 4.02938 9.978 3.83094C10.6408 3.78161 11.3215 3.75195 11.9995 3.75195C12.6775 3.75195 13.3583 3.78161 14.021 3.83094C16.6874 4.02938 17.6978 4.13288 18.7832 5.21825C19.8686 6.30362 19.9721 7.31406 20.1705 9.98044C20.2199 10.6432 20.2495 11.3239 20.2495 12.002C20.2495 12.68 20.2199 13.3607 20.1705 14.0235C19.9721 16.6898 19.8686 17.7003 18.7832 18.7857C17.6978 19.871 16.6874 19.9745 14.021 20.173C13.3583 20.2223 12.6775 20.252 11.9995 20.252C11.3215 20.252 10.6408 20.2223 9.978 20.173C7.31162 19.9745 6.30118 19.871 5.21581 18.7857C4.13044 17.7003 4.02694 16.6898 3.8285 14.0235C3.77917 13.3607 3.74951 12.68 3.74951 12.002C3.74951 11.3239 3.77917 10.6432 3.8285 9.98044Z" fill="white" stroke="#2DA393" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className={styles['icon-true_shape']}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0805648 6.92478C0.27526 4.30879 0.372607 3.00079 1.68548 1.68792C2.99835 0.375049 4.30635 0.277701 6.92233 0.0830063C7.60046 0.0325365 8.29999 0.00195312 8.99951 0.00195312C9.69904 0.00195312 10.3986 0.0325365 11.0767 0.0830062C13.6927 0.277701 15.0007 0.375048 16.3135 1.68792C17.6264 3.00079 17.7238 4.30879 17.9185 6.92478C17.9689 7.60291 17.9995 8.30243 17.9995 9.00195C17.9995 9.70148 17.9689 10.401 17.9185 11.0791C17.7238 13.6951 17.6264 15.0031 16.3135 16.316C15.0007 17.6289 13.6927 17.7262 11.0767 17.9209C10.3986 17.9714 9.69904 18.002 8.99951 18.002C8.29999 18.002 7.60046 17.9714 6.92233 17.9209C4.30635 17.7262 2.99835 17.6289 1.68548 16.316C0.372607 15.0031 0.27526 13.6951 0.0805649 11.0791C0.0300951 10.401 -0.000488281 9.70148 -0.000488281 9.00195C-0.000488281 8.30243 0.030095 7.60291 0.0805648 6.92478Z" fill="#2DA393"/>
                      </svg>
                    </div>
                    <div className={styles['icon-true_tick']}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6839 5.18596C12.0471 5.47869 12.106 6.01264 11.8154 6.37855L7.60493 11.6816C7.45529 11.87 7.23309 11.9854 6.99393 11.9987C6.75476 12.012 6.52127 11.9221 6.3519 11.7515L4.24665 9.63028C3.91778 9.29893 3.91778 8.7617 4.24665 8.43035C4.57551 8.099 5.1087 8.099 5.43756 8.43035L6.87753 9.88123L10.5003 5.31847C10.7908 4.95255 11.3208 4.89323 11.6839 5.18596Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles['checkbox__title']}>{item.title}</div>
              </label>
            </div>
          )
        }
        </div>
      </details>
    </div>
  );
}

//export default CheckboxItems;  <CheckboxSmallIcon />
