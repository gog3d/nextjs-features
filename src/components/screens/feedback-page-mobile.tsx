import React, { FC, useState, useCallback, useMemo } from 'react';
import PageMobile from '../page/page-mobile';
import Link from 'next/link';
import { useRouter } from 'next/router';

import PageContentWrapperMobile from '@/components/page/page-content-wrapper-mobile';
import HeaderWrapperMobile from '@/components/header-wrapper/header-wrapper-mobile';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import EmptyMobileIcon from '@/components/icons/empty-mobile-icon';


import FormWrapperMobile from '@/components/form/form-wrapper-mobile';

import InputFormMobile from '@/components/input/input-form-mobile';
import InputFormTextAreaMobile from '@/components/input/input-form-text-area-mobile';
import InputFormWrapperTextAreaMobile from '@/components/input/input-form-wrapper-text-area-mobile';

import AccordionMobile from '@/components/accordion/accordion-mobile';
import AccordionWrapperFeedbackMobile from '@/components/accordion/accordion-wrapper-feedback-mobile';

import CheckboxMobile from '@/components/checkbox/checkbox-mobile';
import CheckboxConfirmMobile from '@/components/checkbox/checkbox-confirm-mobile';

import ButtonFormMobile from '@/components/button/button-form-mobile';
import ButtonWrapperFeedbackMobile from '@/components/button/button-wrapper-feedback-mobile';

//import ButtonConnectMobile from '@/components/button/button-connect-mobile';


import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IFeedbackPageProps {
  catalog: Array<TCatalogItemsTypes>;
}

const FeedbackPageMobile: FC<IFeedbackPageProps> = ({catalog}) => {

  const router = useRouter();

  const [checkboxItems, setCheckboxItems] = useState(['']);
  const [companyName, setCompanyName] = useState('');
  const [tel, setTel] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleChangeCompanyName = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const handleChangeTel = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value.toString());
  };
  const handleChangeName = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangeTextArea = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };

  const confirmData = () => {
    confirm ? setConfirm(false) : setConfirm(true);
  };

  const setCheckboxValue = (name: string) => {
    const checkItem = checkboxItems && checkboxItems.find((item) => item === name) ? checkboxItems.find((item) => item === name) : false;
    if (checkItem) {
      setCheckboxItems(checkboxItems.filter((item) => item !== name));
    } else { 
     checkboxItems.push(name)
     setCheckboxItems(checkboxItems);
    }
  }

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'companyName': companyName, 'tel': tel, 'name': name, 'textArea': textArea, 'confirm': confirm })
      })
    } catch (error) {
      return
    }
    router.push('/success')
  }

  return (
    <PageMobile>
      <HeaderWrapperMobile>
        <button onClick={()=> router.back()}>
          <BackLinkMobileIcon />
        </button>
        <p>Связаться с нами</p>
        <EmptyMobileIcon />
      </HeaderWrapperMobile>
      <PageContentWrapperMobile>
        <FormWrapperMobile onSubmit={onSubmit}>
          <InputFormMobile placeholder={'Наименование компании'} type={'text'} handleChange={handleChangeCompanyName} value={companyName}/>
          <InputFormMobile placeholder={'Телефон'} type={'tel'}  handleChange={handleChangeTel} value={tel}/>
          <InputFormMobile placeholder={'Имя'} type={'text'}  handleChange={handleChangeName} value={name}/>
          <InputFormMobile placeholder={'E-mail'} type={'email'}  handleChange={handleChangeEmail} value={email}/>
          <AccordionMobile title={'Наименование'}>
            <AccordionWrapperFeedbackMobile>
              {
                catalog.map((item, index) =>
                  <div key={index}>
                    <CheckboxMobile 
                      title={item.title} 
                      name={item.type}
                      toggleCheckbox={() => setCheckboxValue(item.title)}
                      checked={checkboxItems.find(a => a===item.title)}
                    />
                  </div>
                )
              }
            </AccordionWrapperFeedbackMobile>
          </AccordionMobile>
          <InputFormWrapperTextAreaMobile>
            <InputFormTextAreaMobile 
              value={textArea} 
              placeholder={'Сообщение'}
              handleChange={handleChangeTextArea}
            />
          </InputFormWrapperTextAreaMobile>
          <CheckboxConfirmMobile 
            title={'Соглашаюсь с условиями обработки данных'} 
            name={'confirm'}
            toggleCheckbox={()=>confirmData()}
          />
          <ButtonWrapperFeedbackMobile>
            <ButtonFormMobile 
              text={'Отправить'}
            />
          </ButtonWrapperFeedbackMobile>
        </FormWrapperMobile>
      </PageContentWrapperMobile>
    </PageMobile>
  );
};

export default FeedbackPageMobile;

