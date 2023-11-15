import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
//import type { RootState } from '@/redux/store';
import { Point, Area } from "react-easy-crop/types";
const colors = [
  '#222222',
  '#3603FF',
  '#1A5E1A',
  '#FFF500',
  '#FF0000',
  '#00D0FE',
  '#9B27AF', 
  '#B181FF', 
  '#FF00C7',
  '#FCEBCD', 
  '#FF6B00', 
  '#FC006A',
  '#939597', 
  '#8BC34A', 
  '#FFFFFF',
]

//type TView = 'viewer' | 'color' |'background' | 'logo';

type TView = string;


interface IImage {
    source: string;
    source64: string | ArrayBuffer | null;
    crop: Point;
    zoom: number;
    rotation: number;
    position: Point;
    area:  Area;
};

interface CupState {
  modal: boolean;
  colors: Array<string>;
  view: TView;
  color: string;
  rounded: boolean;
  logo: IImage;
  background: IImage;
  cup: {
    color: string;
    logo: string;
    background: string;
    model: string;
  };
}

const resetImage = {
  source: '',
  source64: '',
  crop: {
    x: 0,
    y: 0
  },
  zoom: 1,
  rotation: 0,
  position: {
    x: 0,
    y: 0
  },
  area: {
    height: 0,
    width: 0,
    x: 0,
    y: 0
  },
};

const initialState: CupState = {
  modal: false,
  colors: colors,
  view: 'viewer',
  color: '#222222',
  rounded: false,
  background: {
    source: '',
    source64: '',
    crop: {
      x: 0,
      y: 0
    },
    zoom: 1,
    rotation: 0,
    position: {
      x: 0,
      y: 0
    },
    area: {
      height: 0,
      width: 0,
      x: 0,
      y: 0
    },
  },
  logo: {
    source: '',
    source64: '',
    crop: {
      x: 0,
      y: 0
    },
    zoom: 1,
    rotation: 0,
    position: {
      x: 0,
      y: 0
    },
    area: {
      height: 0,
      width: 0,
      x: 0,
      y: 0
    },
  },
  cup: {
    color: '#FFFFFF',
    logo: '',
    background: '',
    model: '',
  }
};

const cupSlice = createSlice({
  name: 'cup',
  initialState,
  reducers: {
    modal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
    view: (state, action: PayloadAction<TView>) => {
      state.view = action.payload;
    },
    color: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    rounded: (state, action: PayloadAction<boolean>) => {
      state.rounded = action.payload;
    },
    cupColor:  (state) => {
      state.cup.color = state.color;
    },
    backgroundSource: (state, action: PayloadAction<string>) => {
      state.background.source = action.payload;
    },
    backgroundSource64: (state, action: PayloadAction<string | ArrayBuffer | null>) => {//64base
      state.background.source64 = action.payload;
    },
    backgroundCrop: (state, action: PayloadAction<Point>) => {
      state.background.crop = action.payload;
    },
    backgroundRotation: (state, action: PayloadAction<number>) => {
      state.background.rotation = action.payload;
    },
    backgroundZoom: (state, action: PayloadAction<number>) => {
      state.background.zoom = action.payload;
    },
    backgroundPosition: (state, action: PayloadAction<Point>) => {
      state.background.position = action.payload;
    },
    backgroundArea: (state, action: PayloadAction<Area>) => {
      state.background.area = action.payload;
    },
    cupBackround:  (state, action: PayloadAction<string>) => {
      state.cup.background = action.payload;
    },
    backroundReset:  (state) => {
      state.background = resetImage;  
    },
    logoSource: (state, action: PayloadAction<string>) => {
      state.logo.source = action.payload;
    },
    logoSource64: (state, action: PayloadAction<string | ArrayBuffer | null>) => {//64base
      state.logo.source64 = action.payload;
    },
    logoCrop: (state, action: PayloadAction<Point>) => {
      state.logo.crop = action.payload;
    },
    logoRotation: (state, action: PayloadAction<number>) => {
      state.logo.rotation = action.payload;
    },
    logoZoom: (state, action: PayloadAction<number>) => {
      state.logo.zoom = action.payload;
    },
    logoPosition: (state, action: PayloadAction<Point>) => {
      state.logo.position = action.payload;
    },
    logoArea: (state, action: PayloadAction<Area>) => {
      state.logo.area = action.payload;
    },
    cupLogo:  (state, action: PayloadAction<string>) => {
      state.cup.logo = action.payload;
    },
    logoReset:  (state) => {
      state.logo = resetImage;  
    },
  }
});

export const cupReducer = cupSlice.reducer;
export const cupActions = cupSlice.actions;

