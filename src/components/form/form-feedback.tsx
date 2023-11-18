import { FC, ReactNode, useState, useEffect, useMemo } from 'react';
import styles from './form-feedback.module.css';

import { useRouter } from 'next/router';

import PageContentWrapperMobile from '@/components/page/page-content-wrapper-mobile';
import HeaderWrapperMobile from '@/components/header-wrapper/header-wrapper-mobile';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import EmptyMobileIcon from '@/components/icons/empty-mobile-icon';


//import FormWrapperMobile from '@/components/form/form-wrapper-mobile';
import InputForm from '@/components/input/input-form';
import InputFormTextArea from '@/components/input/input-form-text-area';
import InputFormWrapperTextAreaMobile from '@/components/input/input-form-wrapper-text-area-mobile';
import AccordionForm from '@/components/accordion/accordion-form';
import AccordionWrapperFeedbackMobile from '@/components/accordion/accordion-wrapper-feedback-mobile';
import CheckboxMobile from '@/components/checkbox/checkbox-mobile';
import CheckboxConfirm from '@/components/checkbox/checkbox-confirm';
import ButtonFormMobile from '@/components/button/button-form-mobile';
import ButtonForm from '@/components/button/button-form';

import SuccessPageContent from '@/components/page-content/success-page-content';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IFormFeedbackProps {
  catalog: Array<TCatalogItemsTypes>;
  modalOn: boolean;
}

const FormFeedback: FC<IFormFeedbackProps> = ({catalog, modalOn}) => {

  const router = useRouter();

  const [checkboxItems, setCheckboxItems] = useState(['']);
  const [companyName, setCompanyName] = useState('');
  const [tel, setTel] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);


  useEffect(()=>{
//    console.log(modalOn, name);
    setCheckboxItems(['']);
    setCompanyName('');
    setTel('');
    setName('');
    setEmail('');
    setTextArea('');
    setConfirm(false);
    setSuccess(false);
  }, [modalOn]);

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
          body: JSON.stringify({ 'companyName': companyName, 'tel': tel, 'name': name, 'textArea': textArea, 'confirm': confirm, 'email': email })
        })
      } catch (error) {
        return
      }

      setSuccess(true);
  }

  return (
    <>
      { success ? (
        <SuccessPageContent />
      ) : (
        <form onSubmit={onSubmit} className={styles['form-wrapper']}>
        <h1 className={styles['form-title']}>Связаться с нами</h1>
        <div className={styles['input-container']}>
          <InputForm placeholder={'Наименование компании'} type={'text'} handleChange={handleChangeCompanyName} value={companyName}/>
          <InputForm placeholder={'Телефон'} type={'tel'}  handleChange={handleChangeTel} value={tel}/>
          <div className={styles['input-wrapper-1']}>
            <InputForm placeholder={'Имя'} type={'text'}  handleChange={handleChangeName} value={name}/>
            <InputForm placeholder={'E-mail'} type={'email'}  handleChange={handleChangeEmail} value={email}/>
          </div>
          <AccordionForm title={'Наименование'}>
            <AccordionWrapperFeedbackMobile>
              {
                catalog.map((item, index) =>
                  <div key={index}>
                    <CheckboxMobile 
                      title={item.title} 
                      name={item.type}
                      toggleCheckbox={() => setCheckboxValue(item.title)}
                      checked={checkboxItems.find(a => a === item.title)}
                    />
                  </div>
                )
              }
            </AccordionWrapperFeedbackMobile>
          </AccordionForm>
          <div className={styles['form-text-area-wrapper']}>
            <InputFormTextArea 
              value={textArea} 
              placeholder={'Сообщение'}
              handleChange={handleChangeTextArea}
            />
          </div>
        </div>
        <CheckboxConfirm 
          title={'Соглашаюсь с условиями обработки данных'} 
          name={'confirm'}
          toggleCheckbox={()=>confirmData()}
          checked={confirm}
        />
        <div className={styles['button-wrapper']}>
          <ButtonForm 
            text={'Заказать образец'}
          />
        </div>
      </form>
      )}
    </>);
  };

export default FormFeedback;
