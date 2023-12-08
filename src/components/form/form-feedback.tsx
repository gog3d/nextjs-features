'use client';
import { FC, ReactNode, useState, useEffect, useMemo } from 'react';
import styles from './form-feedback.module.css';

import { Form } from '@/components/form/form';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IFormFeedbackProps {
  catalog: Array<TCatalogItemsTypes>;
}

const FormFeedback: FC<IFormFeedbackProps> = ({catalog}) => {

  return (
    <div className={styles['form-wrapper']}>
      <p className={styles['form-title']}>Связаться с нами</p>
      <Form catalog={catalog}>
        <Form.Wrapper>
          <Form.CompanyName />
          <Form.Tel />
          <div className={styles['name-email-wrapper']}>
            <Form.Name />
            <Form.Email />
          </div>
          <Form.CheckboxItems catalog={catalog} />
          <div className={styles['text-area']}>
            <Form.TextArea />
          </div>
          <Form.Confirm />
        </Form.Wrapper>
      </Form>
    </div>
  );
};

export default FormFeedback;
