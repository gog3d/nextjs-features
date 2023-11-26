'use client';
import { FC, ReactNode, useCallback, useEffect } from 'react';
import styles from './checkbox-items.module.css';

import DownChevronMobileIcon from '@/components/icons/down-chevron-mobile-icon';
import CheckboxMobileIcon from '@/components/icons/checkbox-mobile-icon';
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
                  <div className={styles['checkbox__icon']}>
                    <CheckboxMobileIcon />
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

//export default CheckboxItems;