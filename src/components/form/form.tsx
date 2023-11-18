'use client';

import React, { FC, ReactNode, useState, useContext, useCallback, useMemo } from 'react';
import styles from './form.module.css';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

import {WrapperMobile, IWrapperMobileProps} from './wrapper/wrapper-mobile';

import CompanyName from './company-name/company-name';
import Tel from './tel/tel';

import Name from './name/name';
import Email from './email/email';
import { CheckboxItems, ICheckboxItemsProps } from './checkbox-items/checkbox-items';
import TextArea from './text-area/text-area';
import Confirm from './confirm/confirm';

import StoreProvider from '@/redux/store-provider';

interface IFormProps {
  children: ReactNode;
  catalog: Array<TCatalogItemsTypes>;
}

interface IForm {
  WrapperMobile: FC<IWrapperMobileProps>;
  CompanyName: FC;
  Tel: FC;
  Name: FC;
  Email: FC;
  CheckboxItems: FC<ICheckboxItemsProps>;
  TextArea: FC;
  Confirm: FC;
}

const Form: FC<IFormProps> & IForm = ({ children, catalog }) => {

  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
};

Form.CompanyName = CompanyName;
Form.Tel = Tel;
Form.Name = Name;
Form.Email = Email;
Form.CheckboxItems = CheckboxItems;
Form.TextArea = TextArea;
Form.Confirm = Confirm;


Form.WrapperMobile = WrapperMobile;

export { Form};

