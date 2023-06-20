import { FC } from 'react';
import styles from './constructor-apply.module.css';
import { useCustomization } from '@/context/customization';

interface IConstructorApplyProps {
  apply: () => void | null;
};

const ConstructorApply: FC<IConstructorApplyProps> = ({apply}) => {
//  console.log(apply);
  return (
    <div className={styles['constructor__apply-container']}>
      <button 
        className={styles['constructor__apply-button']}
        onClick={() => apply()}
      >
        Применить
      </button>
    </div>
  );
};

export default ConstructorApply;