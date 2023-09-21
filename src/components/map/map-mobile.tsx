import { FC, ReactNode } from 'react';
import styles from './map-mobile.module.css';

import { YMaps, Map } from '@pbe/react-yandex-maps';

interface IMapMobileProps {
  points: Array<string> | null;
}

const MapMobile: FC<IMapMobileProps> = ({ points }) => {
  return (
    <div className={styles['map-wrapper']}>
      <YMaps>
        <Map 
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 9
          }}
          width={'100%'}
          height={'100%'}
        />
      </YMaps>
    </div>
  );
};

export default MapMobile;