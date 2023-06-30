'use client';
import { FC, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import { TCustomization } from '@/types/cups-data-types';

const CustomizationContext = createContext<TCustomization | null>(null);

interface ICustomizationProviderProps {
  children: ReactNode;
};



export const CustomizationProvider: FC<ICustomizationProviderProps> = ({children}) => {
  const colors = [
    {color: '#222222', id: '1'},
    {color: '#3603FF', id: '2'},
    {color: '#1A5E1A', id: '3'},
    {color: '#FFF500', id: '4'},
    {color: '#FF0000', id: '5'},
    {color: '#00D0FE', id: '6'},
    {color: '#9B27AF', id: '7'}, 
    {color: '#B181FF', id: '8'}, 
    {color: '#FF00C7', id: '9'},
    {color: '#FCEBCD', id: '10'}, 
    {color: '#FF6B00', id: '11'}, 
    {color: '#FC006A', id: '12'},
    {color: '#939597', id: '13'}, 
    {color: '#8BC34A', id: '14'}, 
    {color: '#FFFFFF', id: '15'},
  ];
  const [constructorView, setConstructorView] = useState(true);
  const [colorView, setColorView] = useState(false);
  const [backgroundView, setBackgroundView] = useState(false);
  const [logoView, setLogoView] = useState(false);
  const [cupColor, setCupColor] = useState('#FFFFFF');
  const [checkedColor, setCheckedColor] = useState('#FFFFFF');

  const [backgroundImageSource, setBackgroundImageSource] = useState('');
  const [backgroundImageCrop, setBackgroundImageCrop] = useState('');
  const [backgroundImageZoom, setBackgroundImageZoom] = useState(1);
  const [backgroundImageXY, setBackgroundImageXY] = useState({x: 0, y: 0});

  const [logoImageSource, setLogoImageSource] = useState('');
  const [logoImageCrop, setLogoImageCrop] = useState('');
  const [logoImageZoom, setLogoImageZoom] = useState(1);
  const [logoImageXY, setLogoImageXY] = useState({x: 0, y: 0});



  return (
    <CustomizationContext.Provider
      value={{
        colors: colors,
        checkedColor: checkedColor,
        setCheckedColor: setCheckedColor,
        cupColor: cupColor,
        setCupColor: setCupColor,

        backgroundImageSource: backgroundImageSource,
        setBackgroundImageSource: setBackgroundImageSource,
        backgroundImageCrop: backgroundImageCrop,
        setBackgroundImageCrop: setBackgroundImageCrop,
        backgroundImageZoom: backgroundImageZoom,
        setBackgroundImageZoom: setBackgroundImageZoom,
        backgroundImageXY: backgroundImageXY,
        setBackgroundImageXY: setBackgroundImageXY,

        logoImageSource: logoImageSource,
        setLogoImageSource: setLogoImageSource,
        logoImageCrop: logoImageCrop,
        setLogoImageCrop: setLogoImageCrop,
        logoImageZoom: logoImageZoom,
        setLogoImageZoom: setLogoImageZoom,
        logoImageXY: logoImageXY,
        setLogoImageXY: setLogoImageXY,

        constructorView: constructorView, 
        setConstructorView: setConstructorView,
        colorView: colorView, 
        setColorView: setColorView,
        backgroundView: backgroundView, 
        setBackgroundView: setBackgroundView,
        logoView: logoView,
        setLogoView: setLogoView
      }}>
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext) as TCustomization;
  return context;
};