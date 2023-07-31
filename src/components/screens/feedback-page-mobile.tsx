import React, { FC, useState } from 'react';
import PageMobile from '../page/page-mobile';
import Link from 'next/link';
import { useRouter } from 'next/router';

import PageContentMobile from '@/components/page-content//page-content-mobile';
import HeaderWrapperMobile from '@/components/header-wrapper/header-wrapper-mobile';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import EmptyMobileIcon from '@/components/icons/empty-mobile-icon';


import FormWrapperMobile from '@/components/form/form-wrapper-mobile';
import InputFormMobile from '@/components/input/input-form-mobile';
import AccordionMobile from '@/components/accordion/accordion-mobile';


const FeedbackPageMobile = () => {

  const router = useRouter();

  const [searchText, setSearchText] = useState('Пока ничего не найдено');

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <PageMobile>
      <HeaderWrapperMobile>
        <button onClick={()=> router.back()}>
          <BackLinkMobileIcon />
        </button>
        <p>Связаться с нами</p>
        <EmptyMobileIcon />
      </HeaderWrapperMobile>
      <PageContentMobile>
        <FormWrapperMobile>
          <InputFormMobile placeholder={'Наименование компании'} type={'text'} handleChange={handleChange}/>
          <InputFormMobile placeholder={'Телефон'} type={'tel'}  handleChange={handleChange}/>
          <InputFormMobile placeholder={'Имя'} type={'text'}  handleChange={handleChange}/>
          <InputFormMobile placeholder={'E-mail'} type={'email'}  handleChange={handleChange}/>
          <AccordionMobile title={'Наименование'}>
           <p>Cups</p>
           <p>Cups</p>
           <p>Cups</p>
           <p>Cups</p>

          </AccordionMobile>
        </FormWrapperMobile>
      </PageContentMobile>
    </PageMobile>
  );
};

export default FeedbackPageMobile;

