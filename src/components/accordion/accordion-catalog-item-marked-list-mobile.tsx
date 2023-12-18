import { FC, ReactNode } from 'react';
//import Link from 'next/link';
import styles from './accordion-catalog-item-marked-list-mobile.module.css';
import DownChevronMobileIcon from '@/components/icons/down-chevron-mobile-icon';

interface IPatameters {
  name: string;
  value: string;
}

interface IAccordionCatalogItemMarkedListMobileProps {
  title: string;
  parameters: Array<IPatameters>;
  background: {
    color_1: string;
    color_2: string;
  };
//  children: ReactNode;
}

const AccordionCatalogItemMarkedListMobile: FC<IAccordionCatalogItemMarkedListMobileProps> = ({title, parameters, background}) => {
  return (
    <div className={styles['accordion']}>
      <details className={styles['accordion__details']} style={{background: `${background.color_2}`}}>
        <summary className={styles['accordion__summary']} style={{background: `${background.color_1}`}}>
          <p className={styles['accordion__summary_title']}>
            {title}
          </p>
          <div className={styles['accordion__summary_arrow']}>
            <DownChevronMobileIcon />
          </div>
        </summary>
        <div className={styles['accordion__details_content']} >
          {
            parameters.map((parameter, index) => {
            return (
              <div key={index} className={styles['accordion__details_parameters']}>
                {
                  parameter.name === 'marked-list' ? <div className={styles['accordion__details_marked-list']}></div>
                    :
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

export default AccordionCatalogItemMarkedListMobile;