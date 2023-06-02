import { FC, ReactNode } from 'react';
import styles from './logo-radio.module.css';

interface ILogoRadioProps {
  children: ReactNode;
}

const LogoRadio: FC<ILogoRadioProps> = ({children}) => {
  return (
    <div className={styles['logo__radio']}>
      {children}
    </div>
  );
};

export default LogoRadio;