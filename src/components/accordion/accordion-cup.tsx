import { FC, ReactNode } from 'react';
import styles from './accordion-cup.module.css';
//import AccordionArrowIcon from '@/components/icons/accordion-arrow-icon';
import DownChevronMobileIcon from '@/components/icons/down-chevron-mobile-icon';
import { TCup } from '@/types/data-types';

interface IAccordionCupProps {
  children?: ReactNode | null;
  type: TCup;
}

const AccordionCup: FC<IAccordionCupProps> = ({type, children}) => {

  const color = type.name;
 // console.log(color);

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
            {children}
          </details>
        </div>
  );
};

export default AccordionCup;