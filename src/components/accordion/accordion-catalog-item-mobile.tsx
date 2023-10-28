import { FC, ReactNode } from 'react';
//import Link from 'next/link';
import styles from './accordion-catalog-item-mobile.module.css';
import DownChevronMobileIcon from '@/components/icons/down-chevron-mobile-icon';

interface IPatameters {
  name: string;
  value: string;
}

interface IAccordionCatalogItemMobileProps {
  title: string;
  parameters: Array<IPatameters>;
  background: {
    color_1: string;
    color_2: string;
  };
  chevron?: boolean | undefined;
//  children: ReactNode;
}

const AccordionCatalogItemMobile: FC<IAccordionCatalogItemMobileProps> = ({title, parameters, background, chevron=true}) => {
  return (
    <div className={styles['accordion']}>
      <details className={styles['accordion__details']} style={{background: `${background.color_2}`}}>
        <summary className={styles['accordion__summary']} 
          style={
            !!chevron ? 
            {background: `${background.color_1}`}
             :
            {background: `${background.color_1}`, cursor: 'auto'}
          }
         >
          <p className={styles['accordion__summary_title']}>
            {title}
          </p>
          <div className={styles['accordion__summary_arrow']}>
            {!!chevron && <DownChevronMobileIcon />}
          </div>
        </summary>
        <div className={styles['accordion__details_content']} >
        {
          parameters.map((parameter, index) => {
            return (
              <div key={index} className={styles['accordion__details_parameters']}>
                {
                  parameter.name === '' ? null : <p>{parameter.name}</p>
                }
                <p>{parameter.value}</p>
              </div>
            )
          })
        }
        </div>
      </details>
    </div>
  );
};

export default AccordionCatalogItemMobile;
