import { Point, Area } from "react-easy-crop/types";
import React, { SetStateAction } from 'react';

export type TParameters ={
  name: string,
  value: string
};

export type TCup = {
  id: string,
  name: string,
  title: string,
  parameters: Array<TParameters>
};

export type TCupTypes = {
  id: string,
  name: string,
  title: string,
  types: Array<TCup>
};

export type TCatalogItemsTypes = {
  id: number,
  type: string,
  title: string,
  link: string,
  logo: {
    mobile: string,
    desctop: string
  },
  image: {
    mobile: string
  },
  description: {
    title: string,
    subtitles: Array<string>
  },
  items: Array<any>
}

export type TDataTypes = {
  catalog: Array<TCatalogItemsTypes>
}
/*
export type TData = {
  cups: Array<TCupTypes>,
  tShirts: Array<any>,
  caps: Array<any>
};
*/
export type TColor = {
  color: string,
  id: string
};

export type TCustomization = {
  colors: Array<TColor>,
  checkedColor: string,
  setCheckedColor: (arg0: string) => void,
  cupColor: string,
  setCupColor: (arg0: string) => void,

  backgroundImageSource: string,
  setBackgroundImageSource: React.Dispatch<SetStateAction<string>>,
  backgroundImageCrop: string,
  setBackgroundImageCrop:  React.Dispatch<SetStateAction<string>>,
  backgroundImageZoom: number,
  setBackgroundImageZoom: React.Dispatch<SetStateAction<number>>,
  backgroundImageXY: Point,
  setBackgroundImageXY:  React.Dispatch<SetStateAction<Point>>,

  logoImageSource: string,
  setLogoImageSource: React.Dispatch<SetStateAction<string>>,
  logoImageCrop: string,
  setLogoImageCrop: React.Dispatch<SetStateAction<string>>,
  logoImageZoom: number,
  setLogoImageZoom: React.Dispatch<SetStateAction<number>>,
  logoImageXY: Point,
  setLogoImageXY: React.Dispatch<SetStateAction<Point>>,

  logoCoverImageSource: string,
  setLogoCoverImageSource: React.Dispatch<SetStateAction<string>>,
  logoCoverImageCrop: string,
  setLogoCoverImageCrop: React.Dispatch<SetStateAction<string>>,
  logoCoverImageZoom: number,
  setLogoCoverImageZoom: React.Dispatch<SetStateAction<number>>,
  logoCoverImageXY: Point,
  setLogoCoverImageXY: React.Dispatch<SetStateAction<Point>>,

  constructorView: boolean,
  setConstructorView: (arg0: boolean) => void,
  colorView: boolean ,
  setColorView: (arg0:boolean) => void,
  backgroundView: boolean,
  setBackgroundView: (arg0:boolean) => void,
  logoView: boolean,
  setLogoView: (arg0:boolean) => void
};