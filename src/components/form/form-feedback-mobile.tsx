'use client';
import { FC, ReactNode, useState, useEffect, useMemo } from 'react';
import styles from './form-feedback-mobile.module.css';

import { Form } from '@/components/form/form';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IFormFeedbackProps {
  catalog: Array<TCatalogItemsTypes>;
}

const FormFeedbackMobile: FC<IFormFeedbackProps> = ({catalog}) => {

  return (
    <Form catalog={catalog}>
      <Form.WrapperMobile>
        <Form.CompanyName />
        <Form.Tel />
        <Form.Name />
        <Form.Email />
        <Form.CheckboxItems catalog={catalog} />
        <div className={styles['text-area']}>
          <Form.TextAreaMobile />
        </div>
        <Form.ConfirmMobile />
      </Form.WrapperMobile>
    </Form>
    );
  };

export default FormFeedbackMobile;
