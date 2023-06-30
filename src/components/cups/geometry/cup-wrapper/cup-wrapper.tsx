//import { Cylinder, meshStandardMaterial, useTexture } from '@react-three/drei';
import { Cylinder, useTexture } from '@react-three/drei';
import { useCustomization } from '@/context/customization';


const CupWrapper = () => {

  const {
    checkedColor,
    backgroundImageCrop,
    logoImageCrop
  } = useCustomization();

//  console.log({backgroundImageCrop, checkedColor});

  const [tR, bR, h] = [4, 2.6, 11.2];
//  const [tR, bR, h] = [5, 3.6, 11.2];
  const backgroundTexture = useTexture(backgroundImageCrop === '' ? '/cups/media/default.png' : backgroundImageCrop);
  const logoTexture = useTexture(logoImageCrop === '' ? '/cups/media/default.png' : logoImageCrop);


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
