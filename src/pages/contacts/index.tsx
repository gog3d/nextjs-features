import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TContactsTypes } from '@/types/data-types';

import ContactsPageMobile from "@/components/screens/contacts-page-mobile";
import ContactsPage from "@/components/screens/contacts-page";

import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})


interface IContactsProps {
  contacts: TContactsTypes;
}

const Contacts: FC <IContactsProps> = ({ contacts }) => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <ContactsPage contacts={contacts} />
             :
            <ContactsPageMobile contacts={contacts} />
        }
      </MediaQuery>
    </>
  )

  
}

export default Contacts;

import {readFile} from 'fs/promises';
import path from 'path';

interface Props {
  contacts: TContactsTypes;
};

interface Errors {
  redirect: {
    destination: string;
  };
};

export const getServerSideProps: GetServerSideProps<Props>  = async () => {
  const filePath = path.join(process.cwd(), 'public/data/data.json');
  const data: Buffer = await readFile(filePath);
  const jsonData: TDataTypes  = await JSON.parse(data.toString());
  const contacts: TContactsTypes = jsonData.contacts;
  return { props: { contacts } };
};

