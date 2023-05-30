import { FC, ReactNode } from 'react';
import styles from './accordion.module.css';
import AccordionArrowIcon from '../icons/accordion-arrow-icon';

const Accordion2: FC<ReactNode> = ({children}) => {
  return (
        <div className={styles['accordion']}>
          <details className={styles['accordion__details']}>
            <summary className={styles['accordion__summary']}>
              <div className={`${styles['accordion__summary_container']} ${styles['cup-type_summary-cup-2']}`}>
                <p className={styles['accordion__title']}>
                  Стакан 170-210 мм
                </p>
                <div className={styles['accordion__arrow']}>
                  <AccordionArrowIcon />
                </div>
              </div>
              <div className={`${styles['accordion__summary_overlay']} ${styles['cup-type_description-cup-2']}`}></div>
            </summary>
            <div className={styles['accordion__container']}>
              <div className={`${styles['accordion__description']} ${styles['cup-type_description-cup-2']}`}>
                <div className={styles['accordion__description_text-container']}>
                  <p className={styles['accordion__description_text']}>Ø горлышка</p>
                  <p className={styles['accordion__description_text']}>90</p>
                </div>
                <div className={styles['accordion__description_text-container']}>
                  <p className={styles['accordion__description_text']}>Ø донышка</p>
                  <p className={styles['accordion__description_text']}>62</p>
                </div>
                <div className={styles['accordion__description_text-container']}>
                  <p className={styles['accordion__description_text']}>Высота</p>
                  <p className={styles['accordion__description_text']}>135</p>
                </div>
                <div className={styles['accordion__description_text-container']}>
                  <p className={styles['accordion__description_text']}>Минимальный тираж</p>
                  <p className={styles['accordion__description_text']}>5000</p>
                </div>
              </div>
              {children}
            </div>
          </details>
        </div>
  );
};

export default Accordion2;