'use client';

import React, { FC, ReactNode, useState, useContext, useCallback, useMemo } from 'react';
import styles from './constructor.module.css';

import {Modal, IModalProps} from './modal/modal';
import {PreviewDesctop, IPreviewDesctopProps} from './preview/preview-desctop';

import Viewer from './viewer/viewer';
import Color from './color/color';
import Background from './background/background';
import Logo from './logo/logo';

import ViewerMobile from './viewer/viewer-mobile';
import ColorMobile from './color/color-mobile';
import BackgroundMobile from './background/background-mobile';
import LogoMobile from './logo/logo-mobile';

import StoreProvider from '@/redux/store-provider';

interface IConstructorProps {
  children: ReactNode;
}

interface IConstructor {
  Modal: FC<IModalProps>;
  PreviewDesctop: FC<IPreviewDesctopProps>;
  Viewer: FC;
  Color: FC;
  Background: FC;
  Logo: FC;
  ViewerMobile: FC;
  ColorMobile: FC;
  BackgroundMobile: FC;
  LogoMobile: FC;
}


const Constructor: FC<IConstructorProps> & IConstructor = ({ children}) => {

  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
};

Constructor.Modal = Modal;
Constructor.PreviewDesctop = PreviewDesctop;

Constructor.Viewer = Viewer;
Constructor.Color = Color;
Constructor.Background = Background;
Constructor.Logo = Logo;
Constructor.ViewerMobile = ViewerMobile;
Constructor.ColorMobile = ColorMobile;
Constructor.BackgroundMobile = BackgroundMobile;
Constructor.LogoMobile = LogoMobile;

export { Constructor};

