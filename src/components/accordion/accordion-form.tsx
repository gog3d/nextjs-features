import { FC, ReactNode } from 'react';
//import Link from 'next/link';
import styles from './accordion-form.module.css';
import DownChevronMobileIcon from '@/components/icons/down-chevron-mobile-icon';

interface IAccordionFormProps {
  title: string;
  children: ReactNode;
}

const AccordionForm: FC<IAccordionFormProps> = ({title, children}) => {
  return (
    <div className={styles['accordion']}>
      <details className={styles['accordion__details']}>
      <summary className={styles['accordion__summary']}>
        <p className={styles['accordion__summary_title']}>
          {title}
        </p>
        <div className={styles['accordion__summary_arrow']}>
          <DownChevronMobileIcon />
        </div>
      </summary>
      <div className={styles['accordion__details_content']}>
        {children}
      </div>
      </details>
    </div>
  );
};

export default AccordionForm;