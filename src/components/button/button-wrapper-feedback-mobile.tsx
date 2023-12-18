import { FC, ReactNode } from 'react';
import styles from './button-wrapper-feedback-mobile.module.css';

interface IButtonWrapperFeedbackMobileProps {
  children: ReactNode;

}

const ButtonWrapperFeedbackMobile: FC<IButtonWrapperFeedbackMobileProps> = ({children}) => {
  return (
    <div className={styles['button-wrapper']}>
      {children}
    </div>
  );
};

export default ButtonWrapperFeedbackMobile;
