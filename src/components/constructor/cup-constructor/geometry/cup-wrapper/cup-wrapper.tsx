'use client';
import { Cylinder, useTexture } from '@react-three/drei';

import { selectCupBackgroundAmount, selectCupLogoAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const CupWrapper = () => {
  const backgroundImageCrop = useAppSelector((state) => selectCupBackgroundAmount(state));
  const logoImageCrop = useAppSelector((state) => selectCupLogoAmount(state)); 
  const [tR, bR, h] = [4, 2.6, 11.2];

  const backgroundTexture = useTexture(backgroundImageCrop === '' ? '/cups/media/default.png' : backgroundImageCrop);
  const logoTexture = useTexture(logoImageCrop === '' ? '/cups/media/default.png' : logoImageCrop);
 // const logoCoverTexture = useTexture(logoCoverImageCrop === '' ? '/cups/media/default.png' : logoCoverImageCrop);

  return (
    <group rotation={[0, Math.PI, 0]}>

      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 2*Math.PI]} 
        visible={backgroundImageCrop === '' ? false : true}
      >
        <meshStandardMaterial 
          map={backgroundTexture}
          transparent
          opacity={1}
        />
      </Cylinder>

      <Cylinder 
        args={[tR, bR, h, 50, 50, true, 0, 2*Math.PI]} 
        visible={logoImageCrop === '' ? false : true}
      >
        <meshStandardMaterial 
          map={logoTexture}
          transparent
          opacity={1}
        />
      </Cylinder>

    </group>
  );
};

export default CupWrapper;
