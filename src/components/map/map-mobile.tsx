import { FC, ReactNode } from 'react';
import styles from './map-mobile.module.css';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

interface IMapMobileProps {
  points: Array<string> | null;
}
//          style={{border: '1px solid red', borderRadius: '20px'}}
const MapMobile: FC<IMapMobileProps> = ({ points }) => {
  return (
    <div className={styles['map-wrapper']}>
      <YMaps>
        <Map 
          defaultState={{
            center: [59.893307874895335, 30.45862219704383],
            zoom: 17
          }}
          width={'100%'}
          height={'100%'}
          style={{borderRadius: '10px 0px 10px 0px', overflow: 'hidden'}}
        >
          <Placemark geometry={[59.893307874895335, 30.45862219704383]} />
        </Map>

      </YMaps>
    </div>
  );
};

export default MapMobile;