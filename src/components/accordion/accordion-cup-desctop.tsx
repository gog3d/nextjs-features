import { FC, ReactNode } from 'react';
import styles from './accordion-cup-desctop.module.css';
//import AccordionArrowIcon from '@/components/icons/accordion-arrow-icon';
import DownChevronMobileIcon from '@/components/icons/down-chevron-mobile-icon';
import { TCup } from '@/types/data-types';

interface IAccordionCupDesctopProps {
//  children: ReactNode;
  type: TCup;
}

const AccordionCupDesctop: FC<IAccordionCupDesctopProps> = ({type}) => {
//  console.log(color);
  const color = type.name;
  const summaryColor = styles[`cup-type_summary-cup-${color}`];
  const descriptionColor = styles[`cup-type_description-cup-${color}`];
  return (
        <div className={styles['accordion']}>
          <details className={styles['accordion__details']}>
            <summary className={styles['accordion__summary']}>
              <div 
                className={`${styles['accordion__summary_container']} ${summaryColor}`}>
                <p className={styles['accordion__title']}>
                  {type.title}
                </p>
                <div className={styles['accordion__arrow']}>
                  <DownChevronMobileIcon />
                </div>
              </div>
              <div className={`${styles['accordion__summary_overlay']} ${descriptionColor}`}></div>
            </summary>
            <div className={styles['accordion__container']}>
              <div className={`${styles['accordion__description']} ${descriptionColor}`}>
                {
                  type.parameters.map((parameter, index) => {
                    return (
                      <div className={styles['accordion__description_text-container']} key={index}>
                        <p className={styles['accordion__description_text']}>{parameter.name}</p>
                        <p className={styles['accordion__description_text']}>{parameter.value}</p>
                      </div>
                    )})
                }
              </div>
            </div>
          </details>
        </div>
  );
};

export default AccordionCupDesctop;