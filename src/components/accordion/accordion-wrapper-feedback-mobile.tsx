import { FC, ReactNode } from 'react';
//import Link from 'next/link';
import styles from './accordion-wrapper-feedback-mobile.module.css';

interface IAccordionWrapperFeedbackMobileProps {
  children: ReactNode;
}

const AccordionWrapperFeedbackMobile: FC<IAccordionWrapperFeedbackMobileProps> = ({children}) => {
  return (
    <div className={styles['accordion-feedback-wrapper']}>
      {children}
    </div>
  );
};

export default AccordionWrapperFeedbackMobile;